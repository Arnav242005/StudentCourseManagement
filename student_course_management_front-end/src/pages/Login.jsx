import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", data);
      dispatch({ type: "LOGIN", payload: { username: res.data.username } });
      navigate("/", { replace: true });
    } catch (error) {
      setError("root", { type: "manual", message: "Invalid username or password" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Student Course Management</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <label>Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            placeholder="Enter username"
          />
          {errors.username && <p className="error">{errors.username.message}</p>}

          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter password"
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit" className="login-btn">Login</button>
          {errors.root && <p className="error">{errors.root.message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
