import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";
import MainImage from "../img/main.jpg";
import secondImage from "../img/second.jpg"
import cashImage from "../img/cashback.png";
import deliveryImage from "../img/delivery.png";
import paymentImage from "../img/payment.png";
import qualityImage from "../img/quality.png";
// import Footer from './inc/footer'

function Home() {
  return (
    <div className="container">
    <div className="row mb-5">
      <div className="col-md-6 order-md-2 main-image-container">
        <img src={MainImage} alt={"main"} className="img-fluid main-image" />
      </div>
      <div className="col-md-6 order-md-1">
        <h2 className="main-header">
          Wrap your body nicely
          <br /> and comfy
        </h2>
        <p className="main-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          velit a est sagittis blandit. Mauris consectetur mollis sem, sed
          lobortis leo eleifend eu. Ut sit amet ipsum nulla. Nulla vel est
          quis mi congue egestas.{" "}
        </p>

        <div className="btn-container d-flex justify-content-center align-items-center">
          <Link to="/products">
            <button className="shop-btn">SHOP NOW</button>
          </Link>
          <Link to="/about">
            <button className="about-btn">ABOUT US</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="content container-fluid mb-5">
      <div className="container mt-5 mb-5 store-container">
        <div className="row mt-4">
          <div className="col-md-6">
            <img
              src={secondImage}
              alt={"store"}
              className="img-fluid mx-auto d-block"/>
          </div>
          <div className="col-md-6 mb-5">
              <h2 className="text-center store-header mb-5">
                Why Choosing Us{" "}
              </h2>
              <div className="row row-cols-2">
                <div className="col mb-5 ml-5">
                  <img
                    src={qualityImage}
                    alt={"store"}
                    className="img-fluid d-block col-md-3 float-left"
                  />
                  <h5 className="text-left">Top Quality</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut la
                  </p>
                </div>
                <div className="col">
                  <img
                    src={deliveryImage}
                    alt={"store"}
                    className="img-fluid d-block col-md-3"
                  />
                  <h5 className="text-left">Fast Delivery</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut la
                  </p>
                </div>
                <div className="col mb-5">
                  <img
                    src={cashImage}
                    alt={"store"}
                    className="img-fluid d-block col-md-3 float-left"
                  />
                  <h5 className="text-left">Cashback Reward</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut la
                  </p>
                </div>
                <div className="col">
                  <img
                    src={paymentImage}
                    alt={"store"}
                    className="img-fluid d-block col-md-3"
                  />
                  <h5 className="text-left">Secure Payment</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut la
                  </p>
                </div>
              </div>
            </div>



          </div>
          </div>
          </div>
          </div>

  );
}

export default Home;
