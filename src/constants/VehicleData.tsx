import { faker } from "@faker-js/faker";
import type { Vehicle } from "./types";

export const getVehicleData = (): Vehicle => {
  return {
    name: faker?.vehicle?.vehicle(),
    fuelType: faker?.vehicle?.fuel(),
    model: faker?.vehicle?.model(),
    type: faker?.vehicle?.type(),
    image:
      "https://www.topgear.com/sites/default/files/2023/02/1.%20L46023GL_303101754_0012_Bespoke%20Grey%20Visualiser%20Asset.jpg",
    miles: 1000,
    gearType: "Automatic",
    amount: faker?.finance?.amount({ min: 2000, max: 9000, symbol: "$" }),
  };
};

export const carList: Vehicle[] = faker.helpers.multiple(getVehicleData, {
  count: 10,
});
