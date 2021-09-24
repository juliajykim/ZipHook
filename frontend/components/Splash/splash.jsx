import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import SearchBar from "../Search/search_bar";

const Splash = (props) => {
  return (
    <div className=" main-search-wrapper">
      <img src={window.searchBgUrl} className="search-background" />
      <div className="main-search">
        <div className="search-slogan"> Change starts here </div>
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </div>

      <div className="main-content-slogan-container">
        <span> Whether you’re buying, selling or renting,</span>
        <span>we can help you move forward.</span>
      </div>

      <div className="options-wrapper">
        <Link to="/buy">
          <img src={window.buyimgURL} className="options-img" />
          <h4>Buy a home</h4>
          <p className="splash-card-content">
            Find your place with an immersive photo experience with Zip{" "}
          </p>
          <div>
            <button className="options-btn">Search Homes</button>
          </div>
        </Link>
        <Link to="/sell">
          <img src={window.sellimgURL} className="options-img" />
          <h4>Sell a home</h4>
          <p className="splash-card-content">
            Sell your home with confidence Zillow is making it simpler to sell
            your home and move forward.
          </p>
          <div>
            <button className="options-btn">See your options</button>
          </div>
        </Link>
        <Link to="/zips">
          <img src={window.rentimgURL} className="options-img" />
          <h4>Rent a home</h4>
          <p className="splash-card-content">
            We’re creating a seamless online experience – from shopping on the
            largest rental network
          </p>
          <div>
            <button className="options-btn">Find Rentals</button>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Splash;
