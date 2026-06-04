import React from "react";

function Hero() {
  return (
    <div className="container">

      <div className="row py-5 mt-5 mb-5">

        <h1
          className="text-center"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#08264A",
            lineHeight: "1.4",
          }}
        >
          Making investing simple and accessible for everyone.
        </h1>

      </div>

      <div
        className="row py-5 border-top"
        style={{
          lineHeight: "2",
          fontSize: "1.1rem",
        }}
      >

        <div className="col-lg-6 pe-lg-5">

          <p className="text-muted">
            GrowVest is a stock market platform project developed to help users
            learn about investing and portfolio management in a simple way.
          </p>

          <p className="text-muted">
            The platform allows users to explore investment options, track
            market information, and understand how modern trading applications
            work.
          </p>

          <p className="text-muted">
            Our goal is to create a user-friendly experience that makes
            investing easier for beginners.
          </p>

        </div>

        <div className="col-lg-6 ps-lg-5">

          <p className="text-muted">
            GrowVest focuses on clean design, simple navigation, and useful
            investment tools for users.
          </p>

          <p className="text-muted">
            Features such as portfolio tracking, market insights, and
            investment resources are designed to help users make informed
            decisions.
          </p>

          <p className="text-muted">
            This project was built as a learning experience to understand
            full-stack web development and financial technology platforms.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;