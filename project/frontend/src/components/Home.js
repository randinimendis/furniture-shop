import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import MainImage from "../img/second.jpg";
import storeImage from "../img/main1.jpg";
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
          Imagine , Innovaate 
            <br />  & Inspire
          </h2>
          <p className="main-para">
          Total Furniture Solutions for Hotels, 
          Apartments, Residences and Commercial Office Spaces.
          
          Today we are known as a reputed furniture manufacturer who
           delivers excellence, keeping in mind cost, quality and speed. 
           We work closely with residences, 
          hotels, apartment complexes and offices.{" "}
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
                src={storeImage}
                alt={"store"}
                className="img-fluid mx-auto d-block"
              />
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
                  furniture. Crafted with precision and designed to elevate your space,
                   each piece embodies elegance, functionality, and timeless appeal.
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
                  Choose our "Fast Delivery" option and embark on your 
                  home transformation journey without delay!
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
                  Our 20% Cashback Reward on furniture purchases provides a 
                  stylish and comfortable solution for elevating living spaces with sleek sofas, 
                  dining sets, and cozy beds.
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
                  Shop confidently for the perfect pieces to enhance your space,
                   knowing that our secure payment system prioritizes your security and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="arrival-container text-center">
        <div className="header mb-5 mt-5">Our Project</div>
        <div className="row mt-5">
          <div className="col-md-3 arrival-img">
            <img
              src="https://www.furnitureplus.lk/wp-content/uploads/2019/11/4-504x378.jpg"
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5 className="mt-3">Apartments</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 400,000</p>
          </div>
          <div className="col-md-3 arrival-img">
            <img
              src="https://www.furnitureplus.lk/wp-content/uploads/2019/11/IMG-20181123-WA0003-504x378.jpg"
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5 className="mt-3">Residence and Bungalows</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 430,000</p>
          </div>
          <div className="col-md-3 arrival-img">
            <img
              src="https://www.furnitureplus.lk/wp-content/uploads/2019/11/DSC02568-HDR-Edit-504x378.jpg"
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5 className="mt-3">Hotels, Pubs & Bars</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 350,000</p>
          </div>
          <div className="col-md-3 arrival-img">
            <img
              src="https://www.furnitureplus.lk/wp-content/uploads/2019/03/SDC10413-768x576.jpg"
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5 className="mt-3">Office & Commercial Interiors</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 400,000</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="summer-container"></div>
        <div className="header mb-5"> Our Products</div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.m1MSaKCGCNdBwX_XgdOT-AHaFQ?rs=1&pid=ImgDetMain"
              alt={"atrrival "}
              className="img-fluid"
            />

<h5 className="mt-3">Living Area</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 290,000</p>
            <Link
              to="#"
              className="text-decoration-none"
            >
              <button className="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                Add to Cart
              </button>
            </Link>

          </div>
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.jV5-L3pFBfKbKjaJ4KDszAHaE8?w=990&h=660&rs=1&pid=ImgDetMain"
              alt={"atrrival "}
              className="img-fluid mt-5"
            />

<h5 className="mt-3">Studying Area</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 290,000</p>
            <Link
              to="#"
              className="text-decoration-none"
            >
              <button className="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                Add to Cart
              </button>
            </Link>

          </div>
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.Cp8brCezshsbxBnOrXFG6gAAAA?rs=1&pid=ImgDetMain"
              alt={"atrrival "}
              className="img-fluid"
            />

<h5 className="mt-3">Dining Area</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 290,000</p>
            <Link
              to="#"
              className="text-decoration-none"
            >
              <button className="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                Add to Cart
              </button>
            </Link>

          </div>

          <div className="col-md-4">
            <img 
              src="https://th.bing.com/th/id/OIP.2giwiaeheIw1lS6dbeSnNwHaHa?rs=1&pid=ImgDetMain"
              alt={"atrrival "}
              className="img-fluid"
            />

<h5 className="mt-3">Entertaining Area </h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 300,000</p>
            <Link
              to="#"
              className="text-decoration-none"
            >
              <button className="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                Add to Cart
              </button>
            </Link>

          </div>
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.6I1jXhXuHKgmtL2igRg8BAHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
              alt={"atrrival "}
              className="img-fluid mt-5"
            />

<h5 className="mt-3">pantry & Kitchens</h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 900,000</p>
            <Link
              to="#"
              className="text-decoration-none"
            >
              <button className="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                Add to Cart
              </button>
            </Link>

          </div>
          <div className="col-md-4">
            <img
              src="https://m.media-amazon.com/images/I/71ninkDrfnL.jpg"
              alt={"atrrival "}
              className="img-fluid"
            />

<h5 className="mt-3">Dressing </h5>
            <p className="mb-5 mt-3 fw-bold home-price">Rs 200,000</p>
            <Link
              to="#" ///product/64400e3f8a0c5284c812c7ed
              className="text-decoration-none"
            >
              <button className="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                Add to Cart
              </button>
            </Link>
          </div>


        </div>
      </div>
      
    </div>
  );
}

export default Home;
