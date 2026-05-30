import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className=" text-center">People</h1>
      </div>

      <div className="row p-3 ">
        <div className="col-6 p-3 text-center">
          <img
            src="media/pic.jpg"
            style={{ borderRadius: "100%", width: "50%", height:"70%" }}
          />
          <h4 className="mt-5">Gourish Mondal</h4>
          <h6>Founder,CEO</h6>
        </div>

        <div
          className="col-6 p-3 mb-5 mt-5 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <p>
            Gourish bootstrapped and founded TradeSphere in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeSphere has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing Football is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
