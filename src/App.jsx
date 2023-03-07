import Banner from "./components/banner/Banner";
import FeaturedProduct from "./components/featured/FeaturedProduct";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <FeaturedProduct />
      <Testimonial />
    </div>
  );
}

export default App;
