import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container py-5">

      <div className="row text-center">

        <h1
          style={{
            color: "#08264A",
            fontWeight: "700",
          }}
        >
          The GrowVest Ecosystem
        </h1>

        <p
          className="text-muted mt-3"
          style={{
            fontSize: "1.1rem",
          }}
        >
          Everything you need to learn, invest, track, and grow your wealth in one platform.
        </p>

        <div className="col-md-4 p-4 mt-4">
          <h4 style={{ color: "#08264A" }}>📊 Portfolio Tracker</h4>
          <p className="text-muted">
            Monitor your investments and track portfolio performance.
          </p>
        </div>

        <div className="col-md-4 p-4 mt-4">
          <h4 style={{ color: "#08264A" }}>📈 Market Insights</h4>
          <p className="text-muted">
            Stay updated with market trends and investment opportunities.
          </p>
        </div>

        <div className="col-md-4 p-4 mt-4">
          <h4 style={{ color: "#08264A" }}>💰 Smart Investing</h4>
          <p className="text-muted">
            Explore stocks, mutual funds, ETFs, and long-term investments.
          </p>
        </div>

        <div className="col-md-4 p-4 mt-4">
          <h4 style={{ color: "#08264A" }}>🎯 Goal Planning</h4>
          <p className="text-muted">
            Set financial goals and track your progress over time.
          </p>
        </div>

        <div className="col-md-4 p-4 mt-4">
          <h4 style={{ color: "#08264A" }}>📚 Learning Hub</h4>
          <p className="text-muted">
            Learn investing concepts through beginner-friendly resources.
          </p>
        </div>

        <div className="col-md-4 p-4 mt-4">
          <h4 style={{ color: "#08264A" }}>🔒 Secure Platform</h4>
          <p className="text-muted">
            Built with modern technologies to provide a reliable experience.
          </p>
        </div>

        <div className="mt-5">
          <Link
            to="/signup"
            className="btn btn-success btn-lg"
            style={{
              padding: "12px 35px",
              borderRadius: "10px",
            }}
          >
            Start Your Journey
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Universe;