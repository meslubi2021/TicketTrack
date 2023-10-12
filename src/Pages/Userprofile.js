import React from 'react'

export default function Userprofile() {
  return (
    <div className="w-50 container my-5   ">
      <form className="form-control ">
        <label className="d-flex justify-content-center fs-2 fw-semibold ">
          Profile
        </label>

        <div className="container my-2 ">
          <label>Username</label>
          <input className="form-control " placeholder="Enter Username"></input>
        </div>
        <div className="container my-2 ">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="container my-2">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="container my-2">
          <label>Mobile(optional)</label>
          <input
            className="form-control"
            type="tel"
            id="password"
            placeholder="Mobile Number"
          ></input>
        </div>
        
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary my-3">
            
            Edit Profile
          </button>
        </div>
      </form>
    </div>
  )
}
