import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { Link } from "react-router-dom";
import Notification from '../Views/Notification';
export default function Mycart() {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };
  return (
    <>
    <center>
      <div className="card w-50 h-50">
      <h5 className="card-header">Buy Ticket</h5>
      <div className="card-body text-truncate">
      <h5 className="card-title mx-3">Event Name </h5>
      <h5 className='float-end'>Ticket x 5</h5>
      <table className="table table-white text-center table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Dishant Patel</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>Gujarat</td>
    </tr>
    <tr>
      <td>Ticket Price</td>
      <td>499</td>
    </tr>
    <tr>
      <td>Convenience fees</td>
      <td>59</td>
    </tr>
    <tr>
      <td>Total Cost</td>
      <td>5 x 499 ={5*499} </td>
    </tr>
    <tr>
      <td colSpan="2 "><h6>Contact Details</h6></td>
    </tr>
    <tr>
      <td>Email</td>
      <td>FakeEmail@gmail.com</td>
    </tr>
    <tr>
      <td>Contact</td>
      <td>9156824499</td>
    </tr>
    <tr>
      <td colSpan="2 "><h6>Choose Payment Method</h6></td>
    </tr>
    <tr>
      <td>UPI</td>
      <td> <input className=" form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></td>
    </tr>
    <tr>
      <td>Debit / Credit Card</td>
      <td> <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" value="" aria-label="..."/></td>
    </tr>
  </tbody>
</table>
          
      <Link to='/home' className="btn btn-primary" >cancel</Link>
               
      <Link to="/home" className='btn btn-primary mx-2' onClick={toggleToast}>Buy</Link>
  </div>

</div>


  </center>  
  {/* toast */}

  <div className="d-flex justify-content-end">
      

      <Toast
        show={showToast}
        onClose={toggleToast}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Toast Example</strong>
        </Toast.Header>
        <Toast.Body>This is a bottom-end toast message.</Toast.Body>
      </Toast>
    </div>

  {/* end */}
    </>
    
  )
}
