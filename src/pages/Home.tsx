import { Arrivals } from "../components/Arrivals";
import { HomeSection } from "../components/HomeSection";
import { NewsLetter } from "../components/NewsLetter";
import { ShopSection } from "../components/ShopSection";
import '../components/home.css';

// Define the type for props

interface home{
  navigateto:(category:string)=>void
}
export const Home:React.FC<home> = ({navigateto}) => {
  return (
    <div className="w-screen md:max-w[170vh] mx-auto">
      <HomeSection />
      <Arrivals  />
      {/* <Bookinghome/> */}
      <ShopSection navigateTo={
        navigateto
      } />
      <NewsLetter/>
    </div>
  );
};
