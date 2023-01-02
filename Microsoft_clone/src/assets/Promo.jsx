import React from "react";
import Promo1 from "../Images/icon-Windows-Logo.png";
import Promo2 from "../Images/icon-Tablet-Kickstand.png";
import Promo3 from "../Images/icon-Xbox-Logo.png";
export default function Promo() {
    return(
        <div className="Promo space-y-6 flex flex-col lg:flex-row justify-center">
            <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
                <img src={Promo1} alt="Windows Logo"/>
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Choose your Microsoft 365</span>
            </div>

            <div className="item flex items-center mx-4 space-x-2 md:flex-col">
                <img src={Promo2} alt="Kickstand-Logo"/>
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Explore Surface devices</span>
            </div>

            <div className="item flex items-center mx-4 space-x-2 md:flex-col">
                <img src={Promo3} alt="X-box-Logo"/>
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Buy Xbox Games</span>
            </div>

            <div className="item flex items-center mx-4 space-x-2 md:flex-col">
                <img src={Promo1} alt="Windows Logo"/>
                <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Get Windows 11</span>
            </div>

        </div>
    )
}