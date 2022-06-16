import React from 'react';
import "./homepage.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {FaPen} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";
import {Link} from "react-router-dom";



function Homepage({setLoginUser}){
const nav = useNavigate();
const [candidate, setCandidate] = React.useState([]);
const [message, setMessage] = React.useState(false);

  React.useEffect(()=>{
    axios.get("http://localhost:5000/")
    .then(res=>setCandidate(res.data))
  },[])

function deleteRecord(id){
    axios.post("http://localhost:5000/delete", {id})
  .then(res=>{
    setCandidate(res.data)
    nav("/")
})
}


return(
      <div className="homepage">
          <p>Candidates List: {candidate.length}</p>
          <div>
            {candidate.length>0 && <table className="candidates">
              <thead>
              <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Result</th>
              <th> Options</th>
              </tr>
              </thead>
              <tbody>
            {candidate.map((data)=>(
              <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.dob.substring(0, 10)}</td>
              <td>{data.age}</td>
            <td><select><option>Shortlist</option><option>Reject</option></select></td>
              <td>
              <button onClick={()=>nav(`/edit/${data._id}`)}><FaPen/></button><button onClick={()=>deleteRecord(data._id)}><FaTrash/></button></td>
              </tr>
            ))}
            </tbody>
            </table>
          }
            </div>
          <button onClick={()=>nav("/create")}>Create Candidate</button>
          <button onClick={()=>setLoginUser({})}>Logout</button>
      </div>
    )
}

export default Homepage;
