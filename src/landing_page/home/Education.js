import React from "react";
function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" />
        </div>
        <div className="col-6">
          <h3 className="mb-4">Free and open market education</h3>
          <p className="mb-4 fs-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "1.2rem" }} className="mb-4">
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mb-3 fs-6 mt-5">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "1.2rem" }} className="mb-4">
            TradingQ&A  <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
