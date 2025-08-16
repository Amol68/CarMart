import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carMakes, pricing } from "../constants/options";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className="px-5 py-4  items-center border bg-gray-200 flex-col md:flex md:flex-row gap-2 rounded-full md:rounded-lg md:w-[60%]">
      {/* select 1 */}
      <Select>
        <SelectTrigger className="w-[180px] outline:none md:border-none ">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          {carMakes.map((car) => (
            <SelectItem value={car?.id.toString()}>{car?.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation={"vertical"} className="hidden md:block" />

      {/* select 2 */}
      <Select>
        <SelectTrigger className="w-[180px] md:border-none">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          {pricing.map((price) => (
            <SelectItem value={price?.id.toString()}>{price?.price}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation={"vertical"} className="hidden md:block" />

      {/* select 3 */}
      <Select>
        <SelectTrigger className="w-[180px] md:border-none">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <div className="bg-primary text-2xl p-1 text-white rounded-full hover:scale-105 transition-all">
        <CiSearch />
      </div>
    </div>
  );
};

export default Search;
