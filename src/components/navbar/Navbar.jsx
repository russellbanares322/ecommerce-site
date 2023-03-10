import React, { useState } from "react";
import { TbChessBishopFilled } from "react-icons/tb";
import { HiMenuAlt3, HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex justify-between items-center h-24 text-light-gray max-w-[1240px] mx-auto px-4">
      <h1 className="flex items-center justify-center text-xl cursor-pointer mr-auto">
        <TbChessBishopFilled className="mr-1" /> Shopperuss
      </h1>
      <ul className="hidden md:flex items-center justify-center">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Products</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
        <li>
          <button className="bg-dark-blue px-6 py-2 rounded-sm">Login</button>
        </li>
      </ul>
      <div>
        {!isNavOpen && (
          <HiMenuAlt3
            onClick={handleToggleNavbar}
            className="cursor-pointer block md:hidden"
            size={25}
          />
        )}
      </div>
      <div
        className={
          isNavOpen
            ? "fixed right-0 top-0 w-[100%] h-full bg-dark-cyan ease-in-out duration-500 z-20 md:hidden"
            : "fixed right-[-100%] ease-in-out duration-500 top-0 w-[100%] h-full z-20"
        }
      >
        <div className="flex justify-between items-center px-4 py-8 ">
          <h1 className="flex items-center justify-center text-xl cursor-pointer">
            <TbChessBishopFilled className="mr-1" /> Shopperuss
          </h1>
          <div>
            {isNavOpen && (
              <HiMenuAlt4
                onClick={handleToggleNavbar}
                className="cursor-pointer block md:hidden"
                size={25}
              />
            )}
          </div>
        </div>
        <ul className=" pt-24 flex items-center justify-center flex-col">
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">Products</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
          <li>
            <button className="bg-dark-blue px-6 py-2 rounded-sm">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
