import { Arrivals } from "../components/Arrivals";
import { HomeSection } from "../components/HomeSection";
import { ShopSection } from "../components/ShopSection";
import '../components/home.css';

// Define the type for props


export const Home = () => {
  return (
    <div className="w-screen md:max-w[170vh] mx-auto">
      <HomeSection />
      <Arrivals  />
      {/* <Bookinghome/> */}
      <ShopSection />
    </div>
  );
};
