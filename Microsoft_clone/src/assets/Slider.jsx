import React from "react";
import Image1 from "../Images/Highlight-PC-GamePass.png";

export default function Slider() {
    return(
        <div className="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2] ">
            <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-32 space-y-5 min-[320px]:pr-20">
                <h1 className="text-2xl font-medium md:text-4xl mx-5">PC Game Pass</h1>
                <p className="w-3/4 mx-5 text-center md:text-left">Unwrap 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.</p>
                <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5">Shop Now </button>
            </div>
            <div className="right">
                <img className="w-[60rem] md:w-[64rem]" src={Image1} alt="Slider image 1 " />
            </div>
        </div>
    )
}