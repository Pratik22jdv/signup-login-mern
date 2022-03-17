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
    <bold>Name</bold>: Pratik Jadhav <br/>
    Employee Id: 1001<br/>
    DOB: 02-08-2000<br/>
    Contact: 987654321<br/>
    Job Role: Software Developer<br/>
    Salary (Monthly): $7000<br/>
    Yearly Bonus: $200<br/>
    Total Salary: $84200
</div>
</div>
    </div>
    </div>
  );
}

export default Profile;
