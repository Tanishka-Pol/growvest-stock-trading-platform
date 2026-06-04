import React from "react";

function Awards() {
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, #051D38 0%, #08264A 50%, #0D3B73 100%)",
        color: "white",
        padding: "100px 0",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 text-center mb-5 mb-lg-0">
            <img
              src="media/images/largestBroker.svg"
              alt="GrowVest"
              className="img-fluid"
              style={{
                maxWidth: "450px",
                borderRadius: "12px",
              }}
            />
          </div>

          <div className="col-lg-6">

            <h1
              style={{
                fontSize: "2.8rem",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              India's Trusted Investment Platform
            </h1>

            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "35px",
              }}
            >
              GrowVest empowers investors with smart tools, portfolio tracking,
              real-time market insights, and seamless wealth management.
            </p>

            <div className="row">

              <div className="col-md-6">
                <ul style={{ lineHeight: "2.2" }}>
                  <li>Stocks & ETFs</li>
                  <li>Mutual Funds</li>
                  <li>Market Insights</li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul style={{ lineHeight: "2.2" }}>
                  <li>Portfolio Tracking</li>
                  <li>IPO Investments</li>
                  <li>Goal-Based Investing</li>
                </ul>
              </div>

            </div>

            <div className="mt-4">
              <img
                src="media/images/pressLogos.png"
                alt="Partners"
                style={{
                  width: "80%",
                  opacity: "0.9",
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Awards;