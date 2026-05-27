import React from "react";
function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6">
          <h3 className="mb-3">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                src="media/pricing0.svg"
                alt="pricing"
                style={{ width: "120px" }}
              />
              <p className="ms-3 text-start">Free account opening</p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                src="media/pricing0.svg"
                alt="pricing"
                style={{ width: "120px" }}
              />
              <p className="ms-3 text-start">
                Free equity delivery 
              </p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                src="media/other-trades_pricing.svg"
                alt="pricing"
                style={{ width: "120px" }}
              />
              <p className="ms-3 text-start">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
