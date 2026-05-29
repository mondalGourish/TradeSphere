import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-3">
          <h1>Support Portal</h1>
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <button
            className="p-2 btn btn-primary fs-6 mt-3"
            style={{ width: "45%", margin: "0 auto" }}
          >
            My tickets
          </button>
        </div>
        <div className="input-group shadow-sm mt-5" style={{width: "90%"}}>
          <span className="input-group-text bg-white border-end-0">
            <i className="fa fa-search text-muted"></i>
          </span>

          <input
            type="text"
            className="form-control border-start-0 py-3"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
