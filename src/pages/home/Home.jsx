import React from "react";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import FeaturedProduct from "../../components/featured/FeaturedProduct";
import Testimonial from "../../components/testimonial/Testimonial";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <FeaturedProduct />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;
