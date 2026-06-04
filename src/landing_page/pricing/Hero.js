import React from "react";

function Hero() {
  return (
    <div className="container">

      <div className="row py-5 mt-5 border-bottom text-center">

        <h1
          style={{
            color: "#08264A",
            fontWeight: "700",
            fontSize: "3rem",
          }}
        >
          Simple & Transparent Pricing
        </h1>

        <h3
          className="mt-3"
          style={{
            color: "#64748B",
            fontWeight: "400",
          }}
        >
          Designed to make investing accessible and affordable for everyone.
        </h3>

      </div>

      <div className="row py-5 text-center">

        <div className="col-lg-4 p-4">

          <img
            src="media/images/pricingEquity.svg"
            alt="Investment Tools"
            style={{ width: "120px" }}
          />

          <h2
            className="mt-4"
            style={{
              color: "#08264A",
              fontWeight: "600",
            }}
          >
            Free Investment Tools
          </h2>

          <p className="text-muted">
            Access portfolio tracking, watchlists, and market insights
            without additional charges.
          </p>

        </div>

        <div className="col-lg-4 p-4">

          <img
            src="media/images/intradayTrades.svg"
            alt="Trading Features"
            style={{ width: "120px" }}
          />

          <h2
            className="mt-4"
            style={{
              color: "#08264A",
              fontWeight: "600",
            }}
          >
            Affordable Trading
          </h2>

          <p className="text-muted">
            Experience a simple pricing structure designed to make
            investing and trading more accessible.
          </p>

        </div>

        <div className="col-lg-4 p-4">

          <img
            src="media/images/pricingEquity.svg"
            alt="Learning Resources"
            style={{ width: "120px" }}
          />

          <h2
            className="mt-4"
            style={{
              color: "#08264A",
              fontWeight: "600",
            }}
          >
            Learning Resources
          </h2>

          <p className="text-muted">
            Explore educational content, investment guides, and
            beginner-friendly resources at no extra cost.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;