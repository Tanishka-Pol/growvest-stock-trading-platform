import React from "react";

function Hero() {
  return (
    <div
      className="container border-bottom"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="text-center">

        <h1
          style={{
            color: "#08264A",
            fontWeight: "700",
            fontSize: "3rem",
          }}
        >
          Investment Tools & Technology
        </h1>

        <h3
          className="mt-4"
          style={{
            color: "#64748B",
            fontWeight: "400",
            fontSize: "1.5rem",
          }}
        >
          Simple, modern, and powerful tools designed for smart investing.
        </h3>

        <p
          className="mt-4"
          style={{
            color: "#64748B",
            fontSize: "1.1rem",
          }}
        >
          Explore portfolio tracking, market insights, investment planning,
          and financial tools built to help you grow with confidence.
        </p>

        <a
          href="/pricing"
          style={{
            textDecoration: "none",
            color: "#22C55E",
            fontWeight: "600",
          }}
        >
          Explore our features
          <i
            className="fa fa-long-arrow-right ms-2"
            aria-hidden="true"
          ></i>
        </a>

      </div>
    </div>
  );
}

export default Hero;