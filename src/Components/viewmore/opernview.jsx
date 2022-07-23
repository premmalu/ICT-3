import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../services/services";

export default function Login() {
  let navigate = useNavigate();
  const takeToRegistration = () => {
    navigate("register");
  };
  const initialValues = { username: "", password: "" };
  const [data, checkData] = useState();

  const [userInfo, setUserInfo] = useState(initialValues);

  const handleLoginInputs = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    getData()
      .then((response) => checkData(response.data))
      .catch((error) => console.log("Errorwhile loading data"));
    const email = data.filter((userr) =>
      userr.email.includes(userInfo.username)
    );

    if (
      email[0].email === userInfo.email ||
      email[0].password === userInfo.password
    ) {
      navigate("/");
    } else {
      alert("please enter valid credential");
    }
  };

  return (
    <div>
      <form className="login-form">
        <div className="text-center mb-5">
          <h1 className="display-4">Login</h1>
        </div>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            name="username"
            onChange={handleLoginInputs}
            value={userInfo.username}
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            name="password"
            onChange={handleLoginInputs}
            value={userInfo.password}
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div className="text-center">
          <button
            type="button"
            class="btn btn-primary btn-block mb-4"
            onClick={loginUser}
          >
            Sign in
          </button>
        </div>

        <div class="text-center">
          <p>
            Not a member?{" "}
            <Link to="/register" onClick={takeToRegistration}>
              Register for New user
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
