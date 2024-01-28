import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Add your authentication logic here
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px", // Added margin at the bottom
      }}
    >
      <div
        style={{
          width: "33%",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{ color: "#333333", marginBottom: "20px", marginTop: "20px" }}
        >
          Login
        </h2>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <label style={{ marginBottom: "10px" }}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #cccccc",
                marginBottom: "15px",
                width: "100%",
              }}
              className=" shadow-md hover:shadow-amber-500"
            />
          </label>
          <label style={{ marginBottom: "10px" }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #cccccc",
                marginBottom: "20px",
                width: "100%",
              }}
              className=" shadow-md hover:shadow-amber-500"
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "#D8B4F8",
              color: "#ffffff",
              padding: "15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
            className=" shadow-md hover:shadow-amber-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
