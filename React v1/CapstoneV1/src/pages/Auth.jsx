import { useState } from "react";
import { registerUser, loginUser } from "../api/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    if (isLogin) {
      response = await loginUser(email, password);
    } else {
      response = await registerUser(email, password);
    }

    if (response?.msg) {
      setMessage(response.msg);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
    } else if (response?.error) {
      setMessage(response.error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
      {message && (
        <p style={{ marginTop: "10px", color: "green" }}>{message}</p>
      )}
    </div>
  );
};

export default Auth;
