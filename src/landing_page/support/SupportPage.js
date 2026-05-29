import React from "react";
import Hero from "./Hero";
import SupportSection from "./SupportSection";
function SupportPage() {
  return (
    <>
      <Hero />
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <div className="accordion ">
              <SupportSection
                id="accountOpening"
                icon=""
                title="Account Opening"
                option1="Online Account Opening"
                option2="Offline Account Opening"
                option3="Charges"
              />

              <SupportSection
                id="TradeSphere Account"
                icon=""
                title="Your TradeSphere Account"
                option1="Profile Update"
                option2="Change Mobile Number"
                option3="Bank Details"
              />
              <SupportSection
                id="Kite"
                icon=""
                title="Kite"
                option1="Orders"
                option2="Margins"
                option3="Charts"
              />

              <SupportSection
                id="Funds"
                icon=""
                title="Funds"
                option1="Orders"
                option2="Margins"
                option3="Charts"
              />
              <SupportSection
                id="Console"
                icon=""
                title="Console"
                option1="Orders"
                option2="Margins"
                option3="Charts"
              />
              <SupportSection
                id="Coin"
                icon=""
                title="Coin"
                option1="Orders"
                option2="Margins"
                option3="Charts"
              />
            </div>
          </div>

          <div className="col-4">
            <div className="p-4 border-start border-4 border-warning bg-light">
              <ul >
                <li>
                  <a href="" style={{textDecoration: "none"}}>
                    Additional exposure margin on securities under MWPL
                  </a>
                </li>

                <li className="mt-3">
                  <a href="" style={{textDecoration: "none"}}>
                    Additional exposure margin on securities under MWPL
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul >
                <li>
                  <a href="" style={{textDecoration: "none"}}>Track account opening</a>
                </li>

                <li className="mt-3">
                  <a href="" style={{textDecoration: "none"}}>Intraday margins</a>
                </li>
                <li>
                  <a href="" style={{textDecoration: "none"}}>Track segment activation</a>
                </li>

                <li className="mt-3">
                  <a href="" style={{textDecoration: "none"}}>Kite user manual</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
