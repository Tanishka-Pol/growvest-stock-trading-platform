import React from "react";

function Hero() {
  return (
    <>
      <div className="container py-5">

        <div className="text-center">

          <h1
            style={{
              color: "#08264A",
              fontWeight: "700",
              fontSize: "3rem",
            }}
          >
            Start Your Investment Journey
          </h1>

          <h4
            className="mt-3"
            style={{
              fontWeight: "300",
              color: "#64748B",
            }}
          >
            Create your GrowVest account and explore smart investing tools.
          </h4>

        </div>

        <div className="row align-items-center mt-5">

          <div className="col-lg-6 text-center">

            <img
              src="media/images/signup.png"
              alt="Signup"
              className="img-fluid"
              style={{
                maxWidth: "90%",
              }}
            />

          </div>

          <div className="col-lg-6">

            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "40px",
                borderRadius: "15px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >

              <h2
                style={{
                  color: "#08264A",
                  fontWeight: "600",
                }}
              >
                Create Account
              </h2>

              <p className="text-muted mb-4">
                Join GrowVest and start exploring investment opportunities.
              </p>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your full name"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Create a password"
              />

              <button
                className="btn btn-success w-100"
                style={{
                  padding: "12px",
                  fontWeight: "600",
                }}
              >
                Create Account
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Hero;