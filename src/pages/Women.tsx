import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
interface KidsProps {
  display_cart: any; // You can specify the actual type of display_cart if possible
}
interface Product {
  _id: string;
  name: string;
  price: number;
  main_image:any;
  additional_images:string;
  // other properties
}
export const Women:React.FC<KidsProps> = ({display_cart}) => {
  const [productData,setproductData]=useState<Product[]>([])
  const [loading,setloading]=useState(false)
  const [loadingcolors,setloadingcolors]=useState(false)

  const[colors,setcolors]=useState([]);
useEffect(()=>{
  const fetchProduct=async()=>{
    setloadingcolors(true)
    try{
      const response=await axios.get('https://fashorabe26.onrender.com/getWomenColors')
      setcolors(response.data)
    }
    catch(e)
    {
      console.log(e)
    }
    finally{
      setloadingcolors(false)
    }
  }
  fetchProduct()
},[])


  useEffect(() => {
    const fetchProduct = async () => {
      setloading(true)
        try {
            const response = await axios.get(`https://fashorabe26.onrender.com/getWomen`);
            setproductData(response.data);
        } catch (err) {
            console.log(err)
        } finally {
            setloading(false);
        }
    };

    fetchProduct();
}, []);

if(loading||loadingcolors){
  return <div className="mt-20 w-screen md:max-w-[160vh] mx-auto max-w-[80%] flex justify-center items-center h-[80vh]"><ThreeDot variant="pulsate" color="#FF6900" size="large" text="" textColor=""  speedPlus={0} /></div>
}
  return (
    <div className="mt-20 w-screen md:max-w-[160vh] mx-auto max-w-[80%]">
    
    <div className=" w-screen max-w-[100%] md:max-w-[160vh] md:mx-auto  flex flex-row border-2 border-[#6F6F6F] gap-2">
        <div className="p-6 md:w-[40vh]">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold">SIZE</div>
            {/* <div className="flex md:flex-row flex-col  md:gap-4 gap-2">
              {sizes.map((item) => (
                <div className="section_name md:text-lg "><button className="  bg-gray-200 px-1 py-1 hover:bg-gray-400 w-8 h-8 md:h-12 md:w-12 text-lg">{item}</button></div>
              ))}
            </div> */}
          </div>
        </div>
        <div className="border-l-2 border-[#E1E1E1] md:block hidden"></div>
        <div className="p-6 ">
          <div className="flex-col flex gap-5">
            <div className="section_name md:text-xl font-bold  ">COLOR</div>
            <div className="md:flex md:flex-row grid grid-cols-5 md:gap-4 gap-2  ">
              {colors.map((item) => (
                <div className="w-8 h-8 md:w-10 md:h-10  border-2 border-[#3F3F3D]" style={{backgroundColor:item}}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

    <div className="mt-10 md:grid md:grid-cols-4 gap-8 flex flex-col">
      {productData.map((items)=>(
        <div className="flex flex-col gap-1 " onClick={()=>{
          display_cart(items._id)
        }}>
           <div className="relative w-[40vh] h-[40vh] overflow-hidden">
  {/* Main Image */}
  <img
    src={items.main_image}
    className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
    
  />
  
  {/* Second Image (Appears on Hover) */}

  <img
    src={items.additional_images[1]}
    className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
    
  />
</div>
          {/* <div className="relative overflow-hidden "><img src={items.main_image} className="w-[50vh] h-[50vh] hover:scale-110 transform duration-500 ease-in-out object-cover"></img></div> */}
          <div className="flex justify-center  font-semibold section_name text-lg text-[#2F2F2F] ">{items.name}</div>
          <div className="flex justify-center section_name font-bold text-xl text-[#222222]">${items.price}</div>



        </div>



      ))}
    </div>
     </div>
  )
}
