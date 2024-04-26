import React, { useState } from "react";
import "./loginUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "./usersSlice";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      await axios.post(
        "https://techx-backend.onrender.com/api/v1/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(
        login({
          email: email,
          // password: password,
          loggedIn: true,
        })
      );

      console.log("success");
      toast.success(`login Successfull`);
      navigate("/");
    } catch (err) {
      // console.error(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  return (
    <section className="form-Content">
      <header className="form-header">Login</header>
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="form-fields"></div>
        <div className="form-fields">
          <input
            type="text"
            placeholder="email"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-fields">
          <input
            type="password"
            placeholder="password"
            className="password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-fields">
          <button>login</button>
        </div>
      </form>
      <div className="switch-msg">
        Don't have an Account?<Link to="/signup"> Register</Link>
      </div>
    </section>
  );
};

export default LoginUser;
