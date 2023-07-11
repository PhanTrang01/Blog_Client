import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.scss";
import { AuthContext } from "../context/authContext";

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState("");

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(loginForm);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/auth/login", loginForm)
  //     .then((response) => {
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       if (error && error.response && error.response.data) {
  //         setError(error.response.data);
  //       } else {
  //         setError("An error occurred");
  //       }
  //     });
  // };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        {err && <p>{err}</p>}
        <button onClick={handleSubmit}>Login</button>

        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
