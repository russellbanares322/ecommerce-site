import React from "react";
import testimonialBg from "../../assets/testimonial_bg.jpg";
import person1 from "../../assets/mark_img.jpg";
import person2 from "../../assets/bill_img.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[30rem] bg-contain object-cover opacity-80"
        src={testimonialBg}
        alt="testimonialbg"
      />
      <div className="absolute top-[5rem] left-[5rem]">
        <p className="text-dark-cyan text-[1.1rem]">REVIEWS</p>
        <p className="text-dark-blue text-[1.5rem]">What Clients Say?</p>
      </div>
      <div className="absolute top-[3rem] right-[10rem] flex justify-center items-center gap-10 flex-wrap md:top-[8rem]">
        <div className="w-[18rem] bg-light-cyan px-8 py-5 rounded-md shadow-2xl md:px-8 md:py-5">
          <div className="flex items-center justify-start gap-2">
            <img
              className="w-[5rem] h-[5rem] rounded-[10rem] object-cover bg-center mb-5 border-[0.1rem] border-solid border-dark-blue"
              src={person1}
            />
            <div>
              <p className="text-[0.8rem]">Mark Zuckerberg</p>
              <p className="text-[0.6rem]">Facebook Founder</p>
            </div>
          </div>
          <p className="text-sm flex gap-1">
            <FaQuoteLeft className="text-dark-blue" size={20} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-[18rem] bg-light-cyan px-8 py-5 rounded-md shadow-2xl">
          <div className="flex items-center justify-start gap-2">
            <img
              className="w-[5rem] h-[5rem] rounded-[10rem] object-cover bg-center mb-5 border-[0.1rem] border-solid border-dark-blue"
              src={person2}
            />
            <div>
              <p className="text-[0.8rem]">Bill Gates</p>
              <p className="text-[0.6rem]">Microsoft Founder</p>
            </div>
          </div>
          <p className="text-sm flex gap-1">
            <FaQuoteLeft className="text-dark-blue" size={20} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
