// SignupForm.js

import React from "react";

function SignupForm() {
  return (
    <>
    <div
      style={{
        background:
          "linear-gradient(90deg, #051D38 0%, #08264A 50%, #0D3B73 100%)",
        color: "white",
        padding: "80px 0",
      }}
    ></div>
      <h2>Signup now</h2>

      <input
        type="text"
        className="form-control"
        placeholder="Enter your mobile number"
      />

      <button className="btn btn-primary mt-3">
        Get OTP
      </button>
    </>
  );
}

export default SignupForm;