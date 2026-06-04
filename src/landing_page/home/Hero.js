import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #051D38 0%, #08264A 50%, #0D3B73 100%)",
        color: "white",
        padding: "80px 0 120px 0",
      }}
    >
      <div className="container">

        <div className="row justify-content-center text-center">

          <div className="col-lg-10">

            <img
              src="media/images/Screenshot 2026-06-03 202734.png"
              alt="GrowVest Dashboard"
              className="img-fluid mb-5"
              style={{
                maxWidth: "1000px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />

            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
              }}
            >
              Invest smarter. Grow faster.
            </h1>

            <p
              className="mt-4 mb-5"
              style={{
                fontSize: "1.2rem",
                color: "#d1d5db",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Grow your wealth with smart investing, real-time market insights,
              portfolio tracking, and powerful financial tools.
            </p>

            <Link
              to="/signup"
              className="btn btn-success btn-lg"
              style={{
                padding: "12px 40px",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              Start Investing
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;