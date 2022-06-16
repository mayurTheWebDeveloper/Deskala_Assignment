import React from 'react';
import "./candidateCreate.css";
import axios from "axios";
import {  useNavigate} from "react-router-dom";

function CandidateCreate() {
  const nav = useNavigate();
  const [newCandidate, setNewCandidate] = React.useState({
    name: "",
    address: "",
    dob: "",
    state: "",
    age: "",
    pincode: ""
  });
  const [message, setMessage] = React.useState(false);

  function handleChange(event) {
    const {
      name,
      value
    } = event.target;

    setNewCandidate((prevCandidate) => {
      return {
        ...prevCandidate,
        [name]: value
      }
    })
  }

  function create() {
  
    const {
      name,
      address,
      state,
      age,
      dob,
      pincode
    } = newCandidate;
    if (name && address && state && age && dob && pincode) {

      axios.post("http://localhost:5000/create", newCandidate)
        .then(res => {
          alert(res.data.message)
          nav("/");
        })
    } else {
      alert("Enter all details")
    }
  }

  return (

    <
    div className = "candidate-create" >
    <
    h1 > Create Candidate < /h1> <
    label className = "label"
    htmlFor = "name_id" > Name < /label > <
    input id = "name_id"
    type = "text"
    name = "name"
    value = {
      newCandidate.name
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter Name" /
    >
    <
    label className = "label"
    htmlFor = "address_id" > Address < /label > <
    input id = "address_id"
    type = "text"
    name = "address"
    value = {
      newCandidate.address
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter Address" /
    >
    <
    label className = "label"
    htmlFor = "state_id" > State < /label > <
    input id = "state_id"
    type = "text"
    name = "state"
    value = {
      newCandidate.state
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter State" /
    >
    <
    label className = "label"
    htmlFor = "age_id" > Age < /label > <
    input id = "age_id"
    type = "number"
    name = "age"
    value = {
      newCandidate.age
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter Age" /
    >
    <
    label className = "label"
    htmlFor = "pincode_id" > Pincode < /label > <
    input id = "pincode_id"
    type = "number"
    name = "pincode"
    value = {
      newCandidate.pincode
    }
    onChange = {
      handleChange
    }
    placeholder = "Enter Pincode" /
    >
    <
    label className = "label"
    htmlFor = "dob_id" > Date of Birth < /label > <
    input id = "dob_id"
    type = "date"
    max = "2022-01-01"
    name = "dob"
    value = {
      newCandidate.dob
    }
    onChange = {
      handleChange
    }
    /> <
    button >
    <
    a onClick = {
      () => nav("/")
    } > Cancel < /a> <
    /button> <
    button onClick = {
      create
    } > Create < /button>

    <
    /div>

  )

}
export default CandidateCreate;
