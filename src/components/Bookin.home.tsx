import { Package, RefreshCw, ShoppingBag } from "lucide-react"

export const Bookinghome = () => {
  return (
    <div className=" w-screen p-8
    ">
    <div className="    max-w-[140vh] md:mx-auto  flex-col flex md:gap-55  gap-7 md:grid md:grid-cols-3 p-10 ">
        <div className="flex flex-col p-3 gap-1">
            <div className="flex flex-row justify-center "><ShoppingBag size={55} color="gray"></ShoppingBag></div>
            <div className="item_name flex justify-center  text-black text-3xl">Pick Up In Store</div>
            <div className="item_desc flex justify-center    text-gray-500 text-md px-3 ">abcsdkjdsaksddsjjjskasddsakjkjdskjdskjdskjds</div>
        </div>
        <div className="flex flex-col p-3 gap-1">
            <div className="flex flex-row justify-center "><Package size={55} color="gray"></Package></div>
            <div className="item_name flex justify-center  text-black text-3xl ">Online Order</div>
            <div className="item_desc flex justify-center  text-gray-500 text-md">abcsdkjdsaksddsjjjskasddsakjkjdskjdskjdskjds</div>
        </div>  
        <div className="flex flex-col p-3 gap-1">
            <div className="flex flex-row justify-center "><RefreshCw size={55} color="gray"></RefreshCw></div>
            <div className="item_name flex justify-center  text-black text-3xl ">Return</div>
            <div className="item_desc flex justify-center  text-gray-500 text-md px-3">abcsdkjdsaksddsjjjskasddsakjkjdskjdskjdskjds</div>
        </div>
        


    </div>
    </div>
  )
}
