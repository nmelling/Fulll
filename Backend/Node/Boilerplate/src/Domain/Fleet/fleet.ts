import { ERROR_MESSAGE as VEHICLE_ERROR_MESSAGE } from "../Vehicle/constants";
import { ERROR_MESSAGE } from "./constants";

export class Fleet {
  private name: string | null;
  private plateNumbers: Set<string>;

  constructor(name: string) {
    this.name = name;
    this.plateNumbers = new Set();
  }

  registerVehicle(plateNumber: string) {
    if (plateNumber.trim().length === 0) throw new Error(VEHICLE_ERROR_MESSAGE.INCORRECT_PLATE_NUMBER);
    if (this.plateNumbers.has(plateNumber)) throw new Error(ERROR_MESSAGE.VEHICLE_ALREADY_REGISTERED);
    this.plateNumbers.add(plateNumber);
  }

  get data() {
    return {
      name: this.name,
      plateNumbers: this.plateNumbers,
    };
  }
}
