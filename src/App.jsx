import Banner from "./components/banner/Banner";
import FeaturedProduct from "./components/featured/FeaturedProduct";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <FeaturedProduct />
    </div>
  );
}

export default App;
