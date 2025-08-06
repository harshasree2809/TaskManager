import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(){
        super();
        localStorage.removeItem("emailId");
        localStorage.clear();
    }
  render() {
        return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card text-center shadow p-4" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h2 className="card-title text-success mb-3">✅ Logout Successful!</h2>
            <p className="card-text">You have been safely logged out.</p>
            <a href="/login" className="btn btn-primary mt-3">🔐 Login Again</a>
          </div>
        </div>
      </div>
);
  }
}