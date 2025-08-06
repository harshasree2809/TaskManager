import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

export default class Login extends Component {

  constructor() {
    super();

    this.state = {
     
      employees : [
        
        {name: 'Luna', emailId:'luna@gmail.com', password:'123'}, 
        {name: 'Lily', emailId:'lily@gmail.com', password:'123'}, 
        {name: 'Kai', emailId:'kai@gmail.com', password:'123'}, 
        {name: 'Ibuki', emailId:'ibuki@gmail.com', password:'123'}, 
        {name: 'Deepika', emailId:'deepika@gmail.com', password:'123'}, 
        {name: 'Max', emailId:'max@gmail.com', password:'123'} 
      ]
      
    }

    this.emailId = React.createRef();
    this.password = React.createRef();
  }

  loginSubmit = () => {
  let emailId = this.emailId.current.value;
  let password = this.password.current.value;

  let employee = null;
  localStorage.setItem("emailId", emailId); 

  if (emailId === "Admin" && password === "Admin") {
    // alert("Admin Login Success");
    console.log("Admin Authenticated Successfully");
    window.open('home', "_self");
    return;
  }

  this.state.employees.forEach((emp) => {
    if (emp.emailId === emailId && emp.password === password) {
      employee = emp;
    }
  });

  if (employee) {
    // alert("Login Success  Employee ");
    console.log("Authenticated Successfully (Employee)");
    console.log(employee);
    window.open('home', "_self");
    return;
  }

  let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

let matchedUser = storedUsers.find(user => user.emailId === emailId && user.password === password);

if (matchedUser) {
//   alert("Login Success (Local storage)");
  console.log("Login Success (Local storage)");
  localStorage.setItem("emailId", emailId);
  window.open('home', "_self");
  return;
}


  alert("Invalid Credentials");
  console.log("Invalid Credentials");
}


  render() {
    return (

<div
  className="container"
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   minHeight: '80vh',
    overflow: 'hidden',
    backgroundColor: '#f0f4f8',
  }}
>
  <div
    style={{
      width: '350px',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
    }}
  >
    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1f2937',  }}><b>Login</b></h2>

    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>Email</label>
      <input
        type="text"
        ref={this.emailId}
        placeholder="abc@gmail.com"
        style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '0.95rem',
        }}
      />
    </div>

    <div style={{ marginBottom: '1.75rem' }}>
      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>Password</label>
      <input
        type="password"
        ref={this.password}
        placeholder="*********"
        style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '0.95rem',
        }}
      />
    </div>

    <div style={{ textAlign: 'center' }}>
      <button
        onClick={this.loginSubmit}
        style={{
          background: 'linear-gradient(to right, #3b82f6, #2563eb)',
          border: 'none',
          color: 'white',
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 0.3s',
        }}
      >
        Login
      </button>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Don't have an account? <Link to="/signup">Sign up here</Link>
         </p>
    </div>
    
  </div>
  
</div>

    )
  }
}