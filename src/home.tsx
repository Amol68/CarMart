import Category from "./components/Category";
//import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import MostSearchedCar from "./components/MostSearchedCar";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />

      <Category />
      <MostSearchedCar />
      <InfoSection />
    </div>
  );
};

export default Home;
