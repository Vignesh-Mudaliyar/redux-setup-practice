
import React from "react";
import {  BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Register from './Pages/RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import Dashboard  from "./Pages/Dashboard";

function App() {
  const {isLogin} = useSelector(state => state.auth);
  const state = useSelector(state => state);
 console.log(state);
  return (
   <Router>
      <Routes>
        <Route path="/" element={isLogin ? <Dashboard /> : <Navigate to="/login" />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </Router>
  );
}

export default App;
