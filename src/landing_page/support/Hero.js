import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      style={{
        background:
          "linear-gradient(90deg, #051D38 0%, #08264A 50%, #0D3B73 100%)",
        color: "white",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center p-5"
      >
        <h3>GrowVest Help Center</h3>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact Support
        </a>
      </div>

      <div className="row p-5">

        <div className="col-lg-6">

          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "25px",
            }}
          >
            How can we help you today?
          </h1>

          <input
            className="form-control p-3"
            placeholder="Search for help articles, features, or FAQs..."
            style={{
              borderRadius: "10px",
              border: "none",
            }}
          />

          <div className="mt-4">

            <a
              href="#"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Getting Started
            </a>

            <a
              href="#"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Portfolio Tracking
            </a>

            <a
              href="#"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Market Insights
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Account Settings
            </a>

          </div>

        </div>

        <div className="col-lg-6">

          <h3 className="mb-4">
            Popular Topics
          </h3>

          <ol>

            <li className="mb-3">
              <a
                href="#"
                style={{
                  color: "white",
                }}
              >
                How to create a GrowVest account
              </a>
            </li>

            <li className="mb-3">
              <a
                href="#"
                style={{
                  color: "white",
                }}
              >
                Understanding portfolio tracking
              </a>
            </li>

            <li className="mb-3">
              <a
                href="#"
                style={{
                  color: "white",
                }}
              >
                Exploring investment opportunities
              </a>
            </li>

          </ol>

        </div>

      </div>
    </section>
  );
}

export default Hero;