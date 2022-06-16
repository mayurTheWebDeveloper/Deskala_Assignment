import React from 'react';
import "./register.css";
import axios from "axios";
import {  Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    phone: "",
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

  function register() {
    var regularexpEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var regularexpPassword = /^(?=.{6,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
    const {
      email,
      phone,
      password
    } = user;


    if(user.phone.length>10){

        alert("Enter valid mobile number");
    }else {
      if(!regularexpPassword.test(user.password)){
        alert("Password must contain 1 capital letter, 1 small letter, 1 number and 1 special character");
        return false;
      }
      if(!regularexpEmail.test(user.email)){
        alert("Please enter valid email id")
        return false;
      }

    if (email && phone && password) {
      axios.post("http://localhost:5000/register", user)
        .then(res => {
          alert(res.data.message)
          nav("/login");
        })
    } else {
      alert("Enter all fields");
    }
    }
  }

  return ( <
    div className = "register" >
    <
    h1 > SignUp < /h1>
    <
    label className = "label"
    htmlFor = "email_id" > Enter Email < /label > <
    input type = "text"
    name = "email"
    id="email_id"
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
    htmlFor = "number_id" > Enter Number < /label >
    <
    input type = "number"
    id="number_id"
    name = "phone"
    value = {
      user.phone
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter mobile number" /
    >

    <
    label className = "label"
    htmlFor = "password_id" > Enter Password < /label >
    <
    input type = "password"
    name = "password"
    value = {
      user.password
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter password" /
    >
    <
    button onClick = {
      register
    } > Register < /button> <
    Link to = "/login" >
    <
    button > Login < /button> <
    /Link> <
    /div>
  )
}

export default Register;
