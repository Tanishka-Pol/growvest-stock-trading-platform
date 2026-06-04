import React from "react";

function Brokerage() {
  return (
    <div className="container">

      <div className="row py-5 mt-5 border-top">

        <div className="col-lg-8">

          <h3
            style={{
              color: "#08264A",
              fontWeight: "600",
              marginBottom: "25px",
            }}
          >
            Why Choose GrowVest?
          </h3>

          <ul
            className="text-muted"
            style={{
              lineHeight: "2.5",
              fontSize: "16px",
            }}
          >
            <li>
              Easy-to-use interface designed for beginners and investors.
            </li>

            <li>
              Portfolio tracking to monitor investments in one place.
            </li>

            <li>
              Market insights and educational resources for smarter decisions.
            </li>

            <li>
              Responsive design that works across desktop and mobile devices.
            </li>

            <li>
              Clean dashboard with investment summaries and analytics.
            </li>

            <li>
              Built using modern web technologies such as React.js and Bootstrap.
            </li>
          </ul>

        </div>

        <div className="col-lg-4 text-center">

          <div
            style={{
              backgroundColor: "#F8FAFC",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#08264A",
                fontWeight: "600",
              }}
            >
              GrowVest Features
            </h3>

            <p className="text-muted mt-3">
              Portfolio Tracking
            </p>

            <p className="text-muted">
              Market Insights
            </p>

            <p className="text-muted">
              Investment Learning Hub
            </p>

            <p className="text-muted">
              Goal-Based Planning
            </p>

            <p className="text-muted">
              Responsive Dashboard
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Brokerage;