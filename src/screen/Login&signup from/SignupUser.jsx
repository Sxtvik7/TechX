import React, { useState } from "react";
import "./signupUser.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "./usersSlice";

const SignupUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all the fields");
      return;
    }
    try {
      await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(
        login({
          name: name,
          email: email,
          password: password,
          loggedIn: true,
        })
      );

      toast.success("Signup Successfull");
      navigate("/");
    } catch (err) {
      // console.error(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  return (
    <section className="form-Content">
      <header className="form-header">Signup</header>
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="form-fields">
          <input
            type="text"
            placeholder="name"
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <button>Sign up</button>
        </div>
      </form>
      <div className="switch-msg">
        Already have an account<Link to="/login"> Login</Link>?
      </div>
    </section>
  );
};

export default SignupUser;
