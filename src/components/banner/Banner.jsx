import React from "react";
import bannerImg from "../../assets/banner_img.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="bg-dark-cyan h-auto px-[8rem] pb-[11rem]">
      <div className="flex justify-center items-center pt-5 flex-wrap">
        <div className="mr-auto">
          <p className="text-[2.2rem] text-light-gray font-bold">
            Fashionable collection.
          </p>
          <p className="text-[0.9rem] font-thin text-light-gray">
            The most trusted and awesome store in town
          </p>
          <button className="mt-8 bg-dark-blue text-white px-6 py-2 flex items-center justify-center hover:bg-opacity-90">
            Start Shopping
            <HiOutlineArrowLongRight className="ml-2" size={20} />
          </button>
        </div>
        <img src={bannerImg} className="w-[25rem] h-[25rem] relative z-20" />
        <div className="w-[15rem] h-[18rem] bg-dark-blue absolute right-28 top-64 rounded-[1rem] z-10"></div>
      </div>
    </div>
  );
};

export default Banner;
