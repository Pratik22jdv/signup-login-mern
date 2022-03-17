import React, { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
//import "bootstrap/dist/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profile.css";

function Profile() {
  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <div>
    <div style={{margin: "20px"}}>
    <div style={{border:"2px solid black"}}>
    <div style={{margin: "20px"}}>
    <bold>Name</bold>: {user.name} <br/>
    Employee Id: {user.employeeid}<br/>
    DOB: {user.dob}<br/>
    Contact: {user.contact}<br/>
    Job Role: {user.jobRole}<br/>
    Salary (Monthly): ${user.monthly_salary}<br/>
    Yearly Bonus: ${user.yearly_bonus}<br/>
    Total Salary: ${user.monthly_salary*12+user.yearly_bonus}
</div>
</div>
    </div>
    </div>
  );
}

export default Profile;
