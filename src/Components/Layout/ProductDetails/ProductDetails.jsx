import React from "react";
// components
import { Breadcrumb } from "../../Breadcrumb/Breadcrumb";
import { Button } from "../../Shared/Button/Button";
// images
import mainImage from "./../../../Assets/images/image 55.jpg";
import subImage1 from "./../../../Assets/images/image 6.jpg";
import subImage2 from "./../../../Assets/images/image 7.jpg";
import subImage3 from "./../../../Assets/images/image 8.jpg";
import star from "./../../../Assets/images/Star.jpg";
import red from "./../../../Assets/images/image 9-1.png";
import green from "./../../../Assets/images/image 9-2.png";
import black from "./../../../Assets/images/image 9.png";
import plus from "./../../../Assets/images/Union.png";
import subs from "./../../../Assets/images/subs.png";
import phone from "./../../../Assets/images/tabler_phone-calling.png";



export const ProductDetails = () => {
  return (
    <div className="container">
      
   <div className="breadcrumb mt-3">
   <Breadcrumb />
   </div>
      <div className="d-flex wrap mt-3">
        <div className="col-md-6 flex-column">
          <div className="card-image text-center width-75">
            <img src={mainImage} className="p-4 w-100" alt="productimage" />
          </div>
          <div className=" row justify-content-center imgbar">
            <img src={subImage1} alt="" className="col-3 p-3 rounded " />
            <img src={subImage2} alt="" className="col-3 p-3 rounded " />
            <img src={subImage3} alt="" className="col-3 p-3 rounded" />
          </div>
        </div>
        <div className="col-md-6">
          <h2>
            Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone
            Wholesale
          </h2>
          <div className="product-rating d-flex  mt-3">
            <p className="text-light-gray" >
              Product Code: 578902-00
            </p>
            <div className="rating d-flex ">
              <span className="rating-star mx-1">
                <img src={star} className=" " alt="" />
                <img src={star} className=" " alt="" />
                <img src={star} className=" " alt="" />
                <img src={star} className=" " alt="" />
                <img src={star} className=" " alt="" />
              </span>
              <span className="rating-numbers ">
                <p>
                  4.6 <span className="text-light-gray ">(200)</span>
                </p>
              </span>
            </div>
          </div>
          <div className="product-price d-flex  mt-3">
            <div className="mr-2">
              <small> 10- 25 Pieces</small>
              <h3 className="">AED 1,150,50.00</h3>
            </div>
            <div className="mr-2">
              <small> 10- 19 Pieces</small>
              <h3 className="">$1,145.00</h3>
            </div>
            <div className="mr-2">
              <small> 50+ Pieces</small>
              <h3 className="">$1,145.00</h3>
            </div>
          </div>
          <div className="product-color mt-4">
            <h3 className="">Avalible color </h3>
            <div className="d-flex align-items-center  mt-3">
              <div className="mx-1">
                <div className="d-flex align-items-center bg-light  ">
                  <img src={black} alt="" className=" mx-1" />
                  <strong>Black</strong>
                </div>
              </div>
              <div className="mx-1">
                <div className="d-flex align-items-center ">
                  <img src={red} alt="" className="mx-1" />
                  <strong>Red</strong>
                </div>
              </div>
              <div className="mx-1">
                <div className="d-flex align-items-center">
                  <img src={green} alt="" className=" mx-1" />
                  <strong>Green</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="product-capacity mt-4">
            <h3 className="">
            Storage capacity
            </h3>
            <div className="d-flex align-items-center  mt-3">
              <div className="mx-3 mx-1">
                <p className="fs-1 fw-semiBold ">
                  128 <sub style={{ fontSize: "12px" }}>GB</sub>
                </p>
              </div>
              <div className="mx-3 mx-1">
                <p className="fs-1 fw-semiBold ">
                  216 <sub style={{ fontSize: "12px" }}>GB</sub>
                </p>
              </div>
              <div className=" mx-1">
                <div className="d-flex  bg-light  ">
                  <span className="fs-1 fw-semiBold ">
                    216
                    <sub style={{ fontSize: "12px" }}>GB</sub>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-quantity mt-4">
            <h3 className="">
              Quantity <span className="text-danger fw-mediume">$12,000</span>
            </h3>
            <div className="d-flex align-items-center  mt-3 mx-3">
              <div className="controller d-flex align-items-center justify-content-center   bg-light rounded ">
                <img src={subs} alt="subs" className="mr-3" />
                <img src={plus} alt="plus" />
              </div>
              <div className="mx-3">
                <p className="">15 Pieces</p>
              </div>
            </div>
          </div>
          <div className="product-shipping mt-4">
            <h3 className="">
              Shipping <span className="text-danger fw-mediume"> $100</span>
            </h3>
            <div className="">
              <div className="d-flex align-items-center mx-3 wrap mt-3">
                <div className="mr-1 mt-1 ">
                  <span className="fw-mediume">Free</span>
                  <small className="text-gray  mx-1">
                    Estimated 15 - 30 days
                  </small>
                </div>
                <div className="w-50 bg-light  mt-1">
                  <span className="fw-mediume">Fast</span>
                  <small className="text-gray mx-1">Estimated 5 - 7 days</small>
                </div>
                <div className=" mt-1 w-75">
                  <span className="fw-mediume">Rocket</span>
                  <small className="text-gray  mx-1">
                    Estimated 2 - 5 days
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="total mt-4 mb-3">
            <h3 className="">
              Total <span className="text-green ">$12,000</span>
            </h3>
            <div className="d-flex align-items-center wrap mx-3">
              <Button
                btnStyle="bg-green text-white fw-semiBold "
                btnText="Please order now"
              />
              <Button
                btnStyle="bg-dark text-white fw-semiBold  mx-1"
                btnText="call us"
                btnImg={phone}
              />
              <small className="mt-4 text-gray ">
                We are 24/7 available
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
