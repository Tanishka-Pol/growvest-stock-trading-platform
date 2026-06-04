import React from "react";

function InvestmentOptions() {
  return (
    <div className="container py-5">

      <h1
        className="text-center mb-5"
        style={{
          color: "#08264A",
          fontWeight: "700",
        }}
      >
        Explore Investment Opportunities
      </h1>

      <div className="row">

        <div className="col-md-6 mb-5">
          <div className="d-flex align-items-center">

            <img
              src="media/images/stocks-acop.svg"
              alt="Stocks"
              style={{
                width: "110px",
                marginRight: "25px",
              }}
            />

            <div>
              <h3 style={{ color: "#08264A" }}>
                Stocks
              </h3>

              <p className="text-muted">
                Discover and track stocks from various sectors and industries.
              </p>
            </div>

          </div>
        </div>

        <div className="col-md-6 mb-5">
          <div className="d-flex align-items-center">

            <img
              src="media/images/mf-acop.svg"
              alt="Mutual Funds"
              style={{
                width: "110px",
                marginRight: "25px",
              }}
            />

            <div>
              <h3 style={{ color: "#08264A" }}>
                Mutual Funds
              </h3>

              <p className="text-muted">
                Learn about diversified investment options for long-term growth.
              </p>
            </div>

          </div>
        </div>

        <div className="col-md-6 mb-5">
          <div className="d-flex align-items-center">

            <img
              src="media/images/ipo-acop.svg"
              alt="Portfolio"
              style={{
                width: "110px",
                marginRight: "25px",
              }}
            />

            <div>
              <h3 style={{ color: "#08264A" }}>
                Portfolio Tracking
              </h3>

              <p className="text-muted">
                Monitor your investments and track performance over time.
              </p>
            </div>

          </div>
        </div>

        <div className="col-md-6 mb-5">
          <div className="d-flex align-items-center">

            <img
              src="media/images/fo-acop.svg"
              alt="Market Insights"
              style={{
                width: "110px",
                marginRight: "25px",
              }}
            />

            <div>
              <h3 style={{ color: "#08264A" }}>
                Market Insights
              </h3>

              <p className="text-muted">
                Stay updated with market trends and investment opportunities.
              </p>
            </div>

          </div>
        </div>

      </div>

      <div className="text-center mt-4">

        <button
          className="btn btn-success btn-lg"
          style={{
            padding: "12px 35px",
            borderRadius: "10px",
          }}
        >
          Start Exploring
        </button>

      </div>

    </div>
  );
}

export default InvestmentOptions;