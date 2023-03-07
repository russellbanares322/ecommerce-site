import React from "react";
import testimonialBg from "../../assets/testimonial_bg.jpg";

const Testimonial = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[30rem] bg-contain object-cover"
        src={testimonialBg}
      />
      <div className="absolute top-[5rem]  left-[5rem]">
        <p>REVIEWS</p>
        <p>What Clients Say?</p>
      </div>
    </div>
  );
};

export default Testimonial;
