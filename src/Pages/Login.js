import React from "react";

export default function Login() {
  return (
    <div className="w-50 container my-5   ">
      <form className="form-control ">
        <label className="d-flex justify-content-center fs-2 fw-semibold ">
          Login
        </label>

        <div className="container my-2 ">
          <label>Email</label>
          <input
            className="form-control "
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="container my-2">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary my-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
