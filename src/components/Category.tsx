import { category } from "@/constants/options";

const Category = () => {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">
        Browse By Category
      </h2>
      <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {category?.map((category, index) => (
          <div
            key={index}
            className="flex flex-col  justify-center items-center gap-1  hover:shadow-2xl  cursor-pointer border border-gray-500 rounded-md"
          >
            <img src={category?.icon} className="size-10"></img>
            <p className="text-xs">{category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
