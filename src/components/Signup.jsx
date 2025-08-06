import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Signup extends Component {
  constructor() {
    super();

    this.name = React.createRef();
    this.username = React.createRef();
    this.dob = React.createRef();
    this.gender = React.createRef();
    this.emailId = React.createRef();
    this.password = React.createRef();
  }

  registerUser = () => {
    const user = {
      name: this.name.current.value,
      username: this.username.current.value,
      dob: this.dob.current.value,
      gender: this.gender.current.value,
      emailId: this.emailId.current.value,
      password: this.password.current.value
    };

    console.log("User Registered:", user);
    alert("User Registered Successfully!");

    // Store the user data in local storage
   // Get existing users or initialize as empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

// Add the new user
    users.push(user);

// Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

  };

  render() {
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#e9f2f9',
          padding: '2rem'
        }}
      >
        <div 
          style={{
            width: '100%',
            maxWidth: '450px',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <h2 
            style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              color: '#333',
              fontSize: '2rem',
              fontWeight: '700'
            }}
          >
            Sign Up
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: '600', color: '#555' }}>Name</label>
              <input 
                type="text" 
                id="name"
                ref={this.name} 
                placeholder="Luna" 
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="username" style={{ fontWeight: '600', color: '#555' }}>Username</label>
              <input 
                type="text" 
                id="username"
                ref={this.username} 
                placeholder="Luna_28" 
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="dob" style={{ fontWeight: '600', color: '#555' }}>Date of Birth</label>
              <input 
                type="date" 
                id="dob"
                ref={this.dob} 
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="gender" style={{ fontWeight: '600', color: '#555' }}>Gender</label>
              <select id="gender" ref={this.gender} style={inputStyle}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '600', color: '#555' }}>Email</label>
              <input 
                type="email" 
                id="email"
                ref={this.emailId} 
                placeholder="example@email.com" 
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="password" style={{ fontWeight: '600', color: '#555' }}>Password</label>
              <input 
                type="password" 
                id="password"
                ref={this.password} 
                placeholder="******" 
                style={inputStyle}
              />
            </div>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button 
              onClick={this.registerUser} 
              style={buttonStyle}
            >
              Sign Up
            </button>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
            Already have an account? <NavLink to="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Sign In</NavLink>
          </p>
        </div>
      </div>
    );
  }
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '1rem',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};