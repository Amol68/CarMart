export type CarMake = {
  id: number;
  name: string;
};

export type Price = {
  id: number;
  price: string;
};

export type Category = {
  id: number;
  name: string;
  icon: string;
};

export type Vehicle = {
  name: string;
  fuelType: string;
  model: string;
  type: string;
  image: string;
  miles: number;
  gearType: "Automatic" | "Manual";
  amount: string;
};
