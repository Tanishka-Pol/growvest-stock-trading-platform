import React, { useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="container mt-5 mb-5">
      <div
        className="card p-4 mx-auto shadow"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4">
          Create Account
        </h3>

        <form onSubmit={handleCreateAccount}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;