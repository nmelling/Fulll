import { expect } from "bun:test";
import { Before, Given, setWorldConstructor, Then, When, World } from "@cucumber/cucumber";
import { ERROR_MESSAGE } from "@/Domain/Fleet/constants";
import { Fleet } from "@/Domain/Fleet/fleet";

export class WorldFleet extends World {
  fleet!: Fleet;
  anotherFleet!: Fleet; // Consider updating logic if more than two fleet are concerned. Keep it simple for now.
  error?: Error;

  async attempt(fn: () => void) {
    try {
      await fn();
    } catch (e) {
      this.error = e as Error;
    }
  }
}

setWorldConstructor(WorldFleet);

const PLATE_NUMBER = "TEST-1";

Before(function (this: WorldFleet) {
  this.fleet = new Fleet("FLEET-1");
  this.anotherFleet = new Fleet("FLEET-2");
});

Given("my fleet", function (this: WorldFleet) {
  return this.fleet;
});
Given("I have registered this vehicle into my fleet", function (this: WorldFleet) {
  if (!this.fleet.data.plateNumbers.has(PLATE_NUMBER)) this.fleet.registerVehicle(PLATE_NUMBER);
});
Given("the fleet of another user", function (this: WorldFleet) {
  return this.anotherFleet;
});
Given("this vehicle has been registered into the other user's fleet", function (this: WorldFleet) {
  this.attempt(() => this.anotherFleet.registerVehicle(PLATE_NUMBER));
});

When("I register this vehicle into my fleet", function (this: WorldFleet) {
  this.attempt(() => this.fleet.registerVehicle(PLATE_NUMBER));
});
When("I try to register this vehicle into my fleet", function (this: WorldFleet) {
  this.attempt(() => this.fleet.registerVehicle(PLATE_NUMBER));
});

Then("this vehicle should be part of my vehicle fleet", function (this: WorldFleet) {
  expect(this.error).not.toBeDefined();
  expect(this.fleet.data.plateNumbers.has(PLATE_NUMBER));
});
Then("I should be informed this this vehicle has already been registered into my fleet", function (this: WorldFleet) {
  expect(this.error).toBeDefined();
  expect(this.error?.message).toBe(ERROR_MESSAGE.VEHICLE_ALREADY_REGISTERED);
});
