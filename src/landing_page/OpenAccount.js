import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h2 className="mb-3">Open a Zerodha account</h2>
        <p className="text-muted mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
