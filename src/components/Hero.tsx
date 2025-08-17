import Search from "./Search";
import tesla from "../assets/tesla.png"


const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-center p-10 py-20 gap-6 h-[600px] border border-black bg-[#eef0fc] w-full">
      <h2 className="text-lg">Find Cars For Sale and Rent Near You</h2>
      <h2 className=" text-[60px]">Find Your Dream Car</h2>
      <Search/>
      <img src={tesla} className="mt-10"/>

     
      </div>
  );
};

export default Hero;
