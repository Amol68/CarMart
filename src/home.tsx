import Category from "./components/Category";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MostSearchedCar from "./components/MostSearchedCar";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero />

      <Category />
      <MostSearchedCar/>
    </div>
  );
};

export default Home;
