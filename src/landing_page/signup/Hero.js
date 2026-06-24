import React, { useState } from "react";

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    alert("Account Created Successfully!");

    // Redirect to Dashboard
    window.location.href = "http://localhost:3001";
  };

  return (
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
        {/* Left Image */}
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

        {/* Signup Form */}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn btn-success w-100"
              style={{
                padding: "12px",
                fontWeight: "600",
              }}
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;