import React, { useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = (e) => {
    // 1. CRITICAL: This stops the page from doing a default HTML refresh
    e.preventDefault(); 
    
    console.log("Form submitted successfully!");

    // 2. HARD REDIRECT TEST
    // Switch this to your exact dashboard URL/port (e.g., http://localhost:3001)
    window.location.href = "https://www.google.com"; 
  };

  return (
    <div>
      {/* 3. CRITICAL: Is your onSubmit handler actually placed on the <form> tag? */}
      <form onSubmit={handleCreateAccount}>
        <h3>Create Account</h3>
        
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <button type="submit" className="btn btn-success w-100">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;