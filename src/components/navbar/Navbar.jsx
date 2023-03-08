import React from "react";
import { TbChessBishopFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <nav className="w-100 flex justify-between px-10 py-5 bg-dark-cyan text-white items-center font-light">
        <div>
          <p className="cursor-pointer flex items-center justify-center font-normal">
            <TbChessBishopFilled className="mr-1" />
            Shopperuss
          </p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Contact</p>
          <button className="bg-dark-blue px-6 py-2 rounded-[1.3rem]">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
