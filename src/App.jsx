import Banner from "./components/banner/Banner";
import FeaturedProduct from "./components/featured/FeaturedProduct";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewsLetter from "./components/newsletter/NewsLetter";
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
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
