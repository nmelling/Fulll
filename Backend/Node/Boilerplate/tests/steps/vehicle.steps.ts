import { Vehicle } from "@Domain/Vehicle/vehicle";
import { expect } from "bun:test";
import { Before, Given, setWorldConstructor, Then, When, World } from "@cucumber/cucumber";
import { ERROR_MESSAGE } from "@/Domain/Vehicle/constants";

export class WorldVehicle extends World {
  vehicle!: Vehicle;
  location!: string;
  error?: Error;

  async attempt(fn: () => void) {
    try {
      await fn();
    } catch (e) {
      this.error = e as Error;
    }
  }
}

setWorldConstructor(WorldVehicle);

const LOCATION_1 = "Tatooine";

Before(function (this: WorldVehicle) {
  this.vehicle = new Vehicle("TEST-1");
  this.location = LOCATION_1;
});

Given("a vehicle", function (this: WorldVehicle) {
  this.vehicle;
});
Given("a location", function (this: WorldVehicle) {
  LOCATION_1;
});
Given("my vehicle has been parked into this location", function (this: WorldVehicle) {
  if (this.vehicle.data.location === LOCATION_1) return this.vehicle.data.location;
  this.vehicle.parkVehicle(LOCATION_1);
  return this.vehicle.data.location;
});

When("I park my vehicle at this location", function (this: WorldVehicle) {
  this.attempt(async () => this.vehicle.parkVehicle(LOCATION_1));
});
When("I try to park my vehicle at this location", function (this: WorldVehicle) {
  this.attempt(async () => this.vehicle.parkVehicle(LOCATION_1));
});

Then("the known location of my vehicle should verify this location", function (this: WorldVehicle) {
  expect(this.error).not.toBeDefined();
  expect(this.vehicle.data.location).toBe(LOCATION_1);
});
Then("I should be informed that my vehicle is already parked at this location", function (this: WorldVehicle) {
  expect(this.error).toBeDefined();
  expect(this.error?.message).toBe(ERROR_MESSAGE.ALREADY_PARKED_HERE);
});
