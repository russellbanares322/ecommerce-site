import React from "react";
import bannerImg from "../../assets/banner_img.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="px-[1rem] md:px-[8rem] bg-dark-cyan h-auto  pb-[11rem]">
      <div className="flex justify-center items-center pt-5 flex-wrap">
        <div className="mr-auto">
          <p className="text-[1.5rem] pt-8 md:text-[2.2rem] text-light-gray font-bold">
            Fashionable collection.
          </p>
          <p className="text-[0.8rem] font-thin text-light-gray md:text-[0.9rem]">
            The most trusted and awesome store in town
          </p>
          <button className="px-4 py-2 text-xs  md:px-6 md:py-2 md:text-[0.9rem] rounded-sm mt-8 bg-dark-blue text-white  flex items-center justify-center hover:bg-opacity-90">
            Start Shopping
            <HiOutlineArrowLongRight className="ml-2" size={20} />
          </button>
        </div>
        <img
          src={bannerImg}
          className="mt-[5rem] w-[18rem] h-[15rem] relative z-10 md:w-[25rem] md:[25rem]"
        />
        <div className="w-[10rem] h-[10rem] bg-dark-blue absolute right-28 top-[25rem] rounded-[1rem] z-9 md:w-[15rem] md:h-[18rem] md:right-28 md:top-64"></div>
      </div>
    </div>
  );
};

export default Banner;
