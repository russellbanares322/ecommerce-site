import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-auto pb-5">
      <div className="px-[4rem] pb-10">
        <div className="flex justify-between items-center pt-11">
          <p className="text-2xl text-light-gray">Shopperuss</p>
          <div className="flex gap-5">
            <FaFacebookF className="footer_icon" />
            <FaTwitter className="footer_icon" />
            <FaInstagram className="footer_icon" />
            <FaLinkedinIn className="footer_icon" />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-6">
          <div className="text-light-gray cursor-pointer">
            <p className="my-5 text-lg">Resources</p>
            <div className="text-sm flex flex-col gap-2 font-light">
              <p>Application</p>
              <p>Documentation</p>
              <p>Systems</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="text-light-gray">
            <p className="my-5 text-lg">Offers</p>
            <div className="text-sm flex flex-col gap-2 font-light">
              <p>Overview</p>
              <p>Pro Plans</p>
              <p>Affiliate Sessions</p>
              <p>Monetization</p>
            </div>
          </div>
          <div className="text-light-gray">
            <p className="my-5 text-lg">Company</p>
            <div className="text-sm flex flex-col gap-2 font-light">
              <p>About Us</p>
              <p>Blog</p>
              <p>Partnerships</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
          </div>
          <div className="text-light-gray">
            <p className="my-5 text-lg">Need Help?</p>
            <div className="text-sm flex flex-col gap-2 font-light">
              <p>Customer Service</p>
              <p>Group Sales</p>
              <p>Product Reviews</p>
              <p>Price Taxes</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-5 px-[4rem] pt-5 text-light-gray font-normal">
        <p>&copy; {currentYear} Shopperuss</p>
        <p>Terms</p>
        <p>Policy</p>
      </div>
    </div>
  );
};

export default Footer;
