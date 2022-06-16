import './App.css';
import React from "react";
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import Homepage from './components/homepage/homepage.js';
import CandidateCreate from './components/create/candidateCreate.js';
import CandidateEdit from './components/edit/candidateEdit.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [user, setLoginUser] = React.useState({

  });

  return ( <
    div className = "App" >
    <
    Router >
    <
    Routes >
    <
    Route exact path = "/"
    element = {
      user && user._id ? < Homepage setLoginUser = {
        setLoginUser
      }
      />:<Login setLoginUser={setLoginUser} / >

    }
    /> <
    Route path = "/login"
    element = {
      < Login setLoginUser = {
        setLoginUser
      }
      />} / >
      <
      Route path = "/register"
      element = {
        < Register / >
      }
      /> <
      Route path = "/create"
      element = {
        < CandidateCreate / >
      }
      />
      <Route path="/edit/:id" element ={<CandidateEdit />} />
      </Routes>
      </Router>


      <
      /div>
    );
  }

  export default App;
