import React from 'react';
import "./login.css";
import axios from "axios";
import {
  Link
} from "react-router-dom";
import {
  useNavigate
} from "react-router-dom";

function Login({
  setLoginUser
}) {
  const nav = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const {
      name,
      value
    } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value
      }
    });
  }

  function login() {
    axios.post("http://localhost:5000/login", user)
      .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        nav("/");
      })
  }

  return ( <
    div className = "login" >
    <
    h1 > Login < /h1>
    <
    label className = "label"
    htmlFor = "email_id" > Enter Email < /label >
     <
    input type = "text"
    id="email_id"
    name = "email"
    value = {
      user.email
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter email" /
    >

    <
    label className = "label"
    htmlFor = "password_id" > Enter Password < /label >
    <
    input type = "password"
    id="password_id"
    name = "password"
    value = {
      user.password
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter password" />
    <button onClick = {login}> Login < /button>
    
     <Link to = "/register" >
    <button type = "button" > Register < /button>
    </Link>
     </div>
  )
}

export default Login;
