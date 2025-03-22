import { Arrivals } from "../components/Arrivals"
import { HomeSection } from "../components/HomeSection"
import { ShopSection } from "../components/ShopSection"
import '../components/home.css'

export const Home = ({navigate_page}) => {
  return (
    <div className="w-screen md:max-w[170vh] mx-auto">
        <HomeSection/>
      
        <Arrivals navigateTo={navigate_page}/>
        {/* <Bookinghome/> */}
        <ShopSection/>
    </div>
  )
}
