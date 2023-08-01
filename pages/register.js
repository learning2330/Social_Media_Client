import axios from "axios";
import React, { useState } from "react";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, secret);
    axios
      .post("http://localhost:8000/api/register", {
        name,
        email,
        password,
        secret,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-flux">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your Name</label>
              </small>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                text="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email</label>
              </small>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                text="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Password</label>
              </small>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                text="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Pick a Question</label>
              </small>
              <select className="form-control">
                <option>What is your favourit color?</option>
                <option>What is your best friend's name?</option>
                <option>What city you were born?</option>
              </select>
              <small className="form-text text-muted">
                You can use this to reset your password if forgotten
              </small>
            </div>
            <div className="form-group p-2">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write yourr answer"
              />
            </div>
            <div className="form-group p-2">
              <button className="btn btn-primary col-12">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
