import React, { useState } from "react";

function SignupForm() {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    
    // 1. Perform your signup logic / OTP verification here...
    console.log("Processing signup for:", mobileNumber);

    // 2. Hard redirect to your dashboard's URL
    // In development, this might be 'http://localhost:3001'
    window.location.href = "http://localhost:3001/dashboard"; 
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-3">
        Get OTP
      </button>
    </form>
  );
}

export default SignupForm;