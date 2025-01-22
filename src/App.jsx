import React from "react";
import Header from "./components/eshop/Header";
import Test from "./components/eshop/Test";
import Recomendation from "./components/eshop/Recomendation";
import Collection from "./components/eshop/Collection";
import Swiper from "./components/eshop/Swiper";
import Trending from "./components/eshop/Trending";
import Benifit from "./components/eshop/Benifit";
import Testimonial from "./components/eshop/Testimonial";
import Footer from "./components/eshop/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Recomendation />
      <Collection />
      <Swiper />
      <Trending />
      <Benifit />
      <Testimonial />
      {/* <Test /> */}
      <Footer />
    </div>
  );
};

export default App;
