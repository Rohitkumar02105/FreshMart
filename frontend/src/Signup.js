import { Link } from "react-router-dom";
import "./App.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;