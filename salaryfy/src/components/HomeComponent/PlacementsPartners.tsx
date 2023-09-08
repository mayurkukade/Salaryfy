import React from "react";

import lenskartlogo from "../../../assets/Logos/lenskartlogo.png";
import cromalogo from "../../../assets/Logos/cromalogo.png";
import hamleyslogo from "../../../assets/Logos/hamleyslogo.png";
import justdial from "../../../assets/Logos/justdial.png";
import trentlogo from "../../../assets/Logos/Trent.png";
import jimmychoo from "../../../assets/Logos/jimmuchoo.png";
import wipro from "../../../assets/Logos/wipro.jpg";
import techmahindra from "../../../assets/Logos/techmahindra.png";
const PlacementsPartners = () => {
  return (
    <div className="w-full font-Lexend">
      <div className="container mx-auto">
        <p className="text-center mt-8 md:mt-[4rem] mb-6 md:mb-[3.81rem] text-2xl md:text-[3.9375rem] font-semibold">
          <span className="text-darkGreen">Our Placement</span>
          <span className="text-yellow"> Partners</span>
        </p>
        {/* <marquee scrollamount="10"> */}
        <div className="max-h-[400px] overflow-y-auto p-5">
          <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-auto gap-4 md:gap-6 mb-10">
            {/* <div className="flex gap-[100px]"> */}
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img
                src={lenskartlogo}
                alt="Lenskart Logo"
                className="max-h-full"
              />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img
                src={hamleyslogo}
                alt="hamleys Logo"
                className="max-h-full"
              />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={trentlogo} alt="Trent  Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={cromalogo} alt="Croma Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img
                src={jimmychoo}
                alt="JimmyChoo Logo"
                className="max-h-full"
              />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={wipro} alt="Wipro Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img
                src={techmahindra}
                alt="techmahindra Logo"
                className="max-h-full"
              />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img
                src={lenskartlogo}
                alt="Lenskart Logo"
                className="max-h-full"
              />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img
                src={hamleyslogo}
                alt="hamleys Logo"
                className="max-h-full"
              />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={trentlogo} alt="Trent  Logo" className="max-h-full" />
            </div>
          </div>
        </div>
        {/* </marquee> */}
      </div>
    </div>
  );
};

export default PlacementsPartners;
