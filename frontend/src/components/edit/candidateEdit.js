import React from 'react';
import "./candidateEdit.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";



function CandidateEdit(props)
{
  const { id } = useParams();

  const nav =useNavigate();
const [message, setMessage] = React.useState(false);
  const [candidate, setCandidate] = React.useState({
    name: props.name,
    address: props.address,
    dob: props.dob,
    state: props.state,
    age: props.age,
    pincode: props.pincode

  });

  const loadCandidate = async () =>{
      const result = await axios.get(`http://localhost:5000/edit/${id}`);
        setCandidate(result.data);
  }

 React.useEffect(()=>{
    loadCandidate()
  },[])



function update(id){

  axios.post("http://localhost:5000/edit", {id})
.then(res=>{
  setCandidate(res.data.message)
  nav("/")
})
}
  return (
    <div>

    <
    div className = "candidate-edit" >
    <h1 > Edit Candidate < /h1> <
    label className = "label"
    htmlFor = "name_id" > Name < /label > <
    input id = "name_id"
    type = "text"
    name = "name"
    value = { candidate.name }

    placeholder = "Enter Name" /
    >
    <
    label className = "label"
    htmlFor = "address_id" > Address < /label > <
    input id = "address_id"
    type = "text"
    name = "address"
    value = {
        candidate.address
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
        candidate.state
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
          candidate.age
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
        candidate.pincode
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
    value={ candidate.dob}

    /> <
    button >
    <
    a onClick = {
      () => nav("/")
    } > Cancel < /a> <
    /button> <
    button onClick = {
      ()=>update(candidate._id)
    } > Update < /button>

    <
    /div>
    </div>
  );
}

export default CandidateEdit;
