import type { Vehicle } from "@/constants/types";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
const CarItem = ({ item }: { item: Vehicle }) => {
  return (
    <div className="rounded-xl bg-white  hover:shadow-2xl cursor-pointer">
      <h2 className="absolute mt-2 ml-1 bg-green-400 px-1 rounded-full text-sm ">New</h2>
      
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-70 rounded-t-xl"
      />
      <div className="p-4 ">
        <h2 className="font-bold text-sm mb-2">{item?.name}</h2>
        <Separator />

        <div className="grid grid-cols-3 mt-5 ">
          <div className="flex flex-col items-center  text-xs justify-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{item?.miles} Miles</h2>
          </div>

          <div className="flex flex-col items-center text-xs justify-center">
            <SlSpeedometer className="text-lg mb-2" />
            <h2>{item?.fuelType} </h2>
          </div>

          <div className="flex flex-col items-center text-xs justify-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{item?.gearType}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-sm ">{item?.amount}</h2>

          <h2 className="text-sm flex gap-1  justify-center items-center">
            View Details
            <IoMdOpen />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
