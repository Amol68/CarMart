import { carList } from "@/constants/VehicleData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostSearchedCar = () => {
  console.log(carList);
  return (
    <div className=" flex items-center justify-center mt-6">
      <Carousel className="max-w-2xl ">
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <CarItem item={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
