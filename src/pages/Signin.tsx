import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo2.jpg';
export const Signin = () => {
  return (
    <div className="md:mt-55 mt-38 w-full md:max-w-[160vh] mx-auto px-4 h-screen">
      <div className="lg:grid lg:grid-cols-3 lg:w-11/12 lg:mx-auto lg:h-full relative">
        <div className="lg:col-span-2  lg:flex lg:justify-center lg:items-center">
          <div className="bg-white lg:w-2/3 h-full lg:h-3/5 lg:flex lg:flex-col lg:p-5 p-2 shadow-2xl">
          <div className="flex justify-center lg:justify-start"><img src={logo} className="w-52 h-32 mb-5 object-contain"></img></div>
          <div className="flex justify-center lg:justify-start text-2xl mb-4 font-bold text-gray-400">Welcome Back!!</div>
          <div className="flex flex-col">
            <div className="flex-col flex">
              <label>Username</label>
              <input type="text" required></input>
            </div>
            <div className="flex-col flex">
              <label>Password</label>
              <input type="password" required></input>
            </div>
            <div className="flex px-4 bg-[#444444] w-fit mx-auto rounded-3xl py-2 mt-1 text-xl  hover:bg-[#787676] items-center"><button className=" text-white px-2">Sign in</button><MoveRight size={24} color="white" ></MoveRight></div>
            <div className="flex mt-4 justify-center text-gray-400">dont have an account ?<Link to="/sign-up" className=" ml-1 text-[#444444] font-bold w-fit hover:border-b-2">Sign up</Link></div>
          </div>
          
          
          </div>
        </div>
        <div className="col-span-1 bg-[#444444]"></div>
        <div className="absolute hidden  lg:flex bottom-0 left-1/2 right-0.5 bg-red-200 " >img</div>

      </div>


    </div>
  )
}
