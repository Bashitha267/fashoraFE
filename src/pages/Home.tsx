import { Hometitle } from "../components/Hometitle";
import { NewsLetter } from "../components/NewsLetter";
import { ShopSection } from "../components/ShopSection";
import { SocialMedia } from "../components/SocialMedia";
import '../components/home.css';

// Define the type for props

interface home{
  navigateto:(category:string)=>void
}
export const Home:React.FC<home> = ({navigateto}) => {
  return (
    <div className="w-screen md:max-w[170vh] mx-auto">
      <Hometitle/>
      {/* <HomeSection /> */}
      
      {/* <Bookinghome/> */}
      <ShopSection navigateTo={
        navigateto
      } />
      <NewsLetter/>
      <SocialMedia/>
    
    </div>
  );
};
