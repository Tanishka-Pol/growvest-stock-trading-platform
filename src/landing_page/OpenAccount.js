import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div
      className="container py-5"
      style={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <div className="row text-center">
        <h1
          style={{
            color: "#08264A",
            fontWeight: "700",
            fontSize: "3rem",
          }}
        >
          Start Your Investment Journey Today
        </h1>

        <p
          className="mt-3 mb-4"
          style={{
            color: "#64748B",
            fontSize: "1.1rem",
          }}
        >
          Explore smart investing tools, portfolio tracking, market insights,
          and financial learning resources with GrowVest.
        </p>

        <div>
          <Link
            to="/signup"
            className="btn btn-success btn-lg"
            style={{
              padding: "12px 40px",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;