import React, { useState } from "react";
import { TbChessBishopFilled } from "react-icons/tb";
import { HiMenuAlt3, HiMenuAlt4 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex justify-between items-center h-24 text-light-gray max-w-[1240px] mx-auto px-4">
      <h1
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-xl cursor-pointer mr-auto"
      >
        <TbChessBishopFilled className="mr-1" /> Shopperuss
      </h1>
      <ul className="hidden md:flex items-center justify-center">
        <li onClick={() => navigate("/")} className="nav_link">
          Home
        </li>
        <li
          onClick={() => {
            navigate("/products");
          }}
          className="nav_link"
        >
          Products
        </li>
        <li className="nav_link">About</li>
        <li className="nav_link">Contact</li>
        <li onClick={() => navigate("/cart")} className="cursor-pointer">
          {/* <button className="bg-dark-blue px-6 py-2 rounded-sm">Login</button> */}
          Cart
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
          <h1
            onClick={() => navigate("/")}
            className="flex items-center justify-center text-xl cursor-pointer"
          >
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
          <li onClick={() => navigate("/")} className="nav_link">
            Home
          </li>
          <li onClick={() => navigate("/products")} className="nav_link">
            Products
          </li>
          <li className="nav_link">About</li>
          <li className="nav_link">Contact</li>
          <li>
            <button className="bg-dark-blue px-6 py-2 rounded-sm">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
