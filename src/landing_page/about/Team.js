import React from "react";

function Team() {
  return (
    <div className="container">

      <div className="row p-3 mt-5 border-top">
        <h1
          className="text-center"
          style={{
            color: "#08264A",
            fontWeight: "700",
          }}
        >
          About GrowVest
        </h1>
      </div>

      <div
        className="row justify-content-center text-center p-4"
        style={{
          lineHeight: "1.9",
          fontSize: "1.1rem",
        }}
      >

        <div className="col-lg-8">

          <p className="text-muted">
            GrowVest is a stock market and portfolio management platform
            developed as a learning project to understand how modern
            investment applications work.
          </p>

          <p className="text-muted">
            The platform focuses on providing a simple and user-friendly
            experience for exploring investment opportunities, tracking
            portfolios, and learning about financial markets.
          </p>

          <p className="text-muted">
            Through this project, various frontend development concepts
            such as React.js, component-based architecture, routing,
            responsive design, and modern UI development have been explored.
          </p>

          <p className="text-muted">
            GrowVest aims to make investing easier to understand while
            providing users with a clean and professional platform
            experience.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Team;