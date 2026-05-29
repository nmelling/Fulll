import { ERROR_MESSAGE } from "./constants";

export class Vehicle {
  private plateNumber: string;
  private type: string | null;
  private location: string | null;

  constructor(plateNumber: string) {
    if (plateNumber.trim().length === 0) throw new Error(ERROR_MESSAGE.INCORRECT_PLATE_NUMBER);
    this.plateNumber = plateNumber;
    this.type = null;
    this.location = null;
  }

  create(type: string, location?: string) {
    if (this.type) throw new Error(ERROR_MESSAGE.ALREADY_CREATED);
    this.type = type;
    if (location) this.parkVehicle(location);
  }

  parkVehicle(location: string) {
    if (this.location === location) throw new Error(ERROR_MESSAGE.ALREADY_PARKED_HERE);
    this.location = location;
  }

  get data() {
    return {
      plateNumber: this.plateNumber,
      type: this.type,
      location: this.location,
    };
  }
}
