import React from "react";
import teamImg from "../../assets/good_team_img.svg";
import groceriesImg from "../../assets/groceries_img.svg";
import search_img from "../../assets/search_img.svg";

const Services = () => {
  return (
    <div className="bg-light-gray h-auto pb-5">
      <p className="page_header_text">Our services</p>
      <div className="pt-10 px-2">
        <div className="flex justify-center gap-20 flex-wrap-reverse mt-10">
          <img src={teamImg} className="w-[20rem] h-[20rem]" />
          <div className="pt-10">
            <p className="font-bold text-lg text-dark-cyan">
              24/7 Team Support
            </p>
            <p className="text-sm text-dark-blue pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-20 mt-10 flex-wrap">
          <div className="pt-10">
            <p className="font-bold text-lg text-dark-cyan">
              Wide variety of products
            </p>
            <p className="text-sm text-dark-blue pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>

          <img src={groceriesImg} className="w-[20rem] h-[20rem]" />
        </div>
        <div className="flex justify-center gap-20 flex-wrap-reverse mt-10">
          <img src={search_img} className="w-[20rem] h-[20rem]" />
          <div className="pt-10">
            <p className="font-bold text-lg text-dark-cyan">
              Easily get searched
            </p>
            <p className="text-sm text-dark-blue pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
