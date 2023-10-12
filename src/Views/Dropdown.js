import React from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  return (
    <div>
      <div className="btn-group">
        <label
          className="dropdown-toggle fs-5 text-decoration-none btn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          User
        </label>
        <ul className="dropdown-menu">
          <li>
          <Link className="dropdown-item" to="/userprofile">
              Profile
            </Link>

          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
            Create Event
            </button>
          </li>
        </ul>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Create event
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
            <form>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"> Name</span>
                <input type="text" class="form-control" placeholder="Event Name" aria-label="eventname" aria-describedby="basic-addon1" />
             </div>
              <div class="input-group">
        <span class="input-group-text">Description</span>
        <textarea class="form-control" placeholder='Description About Event' aria-label="With textarea"></textarea>
          </div>
          <div class="input-group mb-3 my-2">
              <span class="input-group-text" id="basic-addon1">Location</span>
              <input type="text" class="form-control" placeholder="Location Of Event" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3 my-2">
              <span class="input-group-text" id="basic-addon1">Date And Time</span>
              <input type="datetime-local" class="form-control" placeholder="DD:MM:YYYY HH:MM" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
      <span for="phoneInput" class="input-group-text">Phone Number</span>
      <input type="tel" class="form-control" id="phoneInput" placeholder="Enter your phone number"/>
    </div>
          <div class="input-group mb-3 my-2">
              <span class="input-group-text" id="basic-addon1">Price</span>
              <input type="number" class="form-control" placeholder="Price of Event Pass" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          
              
            </form>

              </div>
            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" 
              className="btn btn-primary"
              data-bs-dismiss="modal"
              
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
