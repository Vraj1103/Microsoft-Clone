import React from "react";
// import { VscSearch } from "react-icons/vsc";
import Logo from "../Images/Microsoft_Logo.png";
import Search from "../Images/Search.svg";
import Cart from "../Images/cart-icon.svg";
import Account from "../Images/account-icon.svg";
export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between py-4 ">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburger inline-block p-4 cursor-pointer md:hidden md:order-2">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>
        <div className="search md:hidden w-4 mr-6 "><img src={Search} alt="Search Icon" /></div>
      </div>

      <div className="logo text-center md:order-1 flex">
        <div className=" flex justify-start "><img className="w-[50%]" src={Logo} alt="Microsoft Logo" /></div>
        
        <div className="features absolute md:static w-fit md:w-auto bg-gray-200 md:bg-white inset-0 md:flex md:items-center md:mx-4 md:space-x-6 -translate-x-96 md:translate-x-0 ">
          <div className="fitem hover:underline hover:underline-offset-8  cursor-pointer">Microsoft 365</div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer"> Office</div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer"> Windows</div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer"> Surface</div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer"> Xbox</div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer"> Support</div>
        </div>
      </div>
      <div className="cart text-center md:order-3 flex">
        <div className="search hidden md:block mr-6">All microsoft</div>
        {/* <div className="mx-2 ">
          Search
        </div> */}
        <img className="w-4 mr-6" src={Search} alt="Search Icon" />
        <div className="flex">
        <img className="w-4 h-4 md:mt-4 lg:mt-1 mr-6" src={Cart} alt="Cart Icon" />
        <img className="w-4 h-4  md:mt-4 lg:mt-1 mr-6" src={Account} alt="Account Icon" /></div>
      </div>
    </nav>
  );
}
