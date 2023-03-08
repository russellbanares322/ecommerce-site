import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-white h-auto w-full px-[10rem] pb-10 ">
      <div className="pt-15 flex justify-start items-center flex-col">
        <p className="page_header_text mb-10">Subscribe to our Newsletter</p>
        <p className="w-[40rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ullam
          fuga! Quidem commodi incidunt quod harum sapiente minus.
        </p>
        <div className="mt-9">
          <input
            className="bg-light-gray h-10 w-[21rem] mr-1 border-dark-blue border px-5"
            type="text"
            placeholder="Your email here..."
          />
          <button className="bg-dark-blue px-6 py-2 text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
