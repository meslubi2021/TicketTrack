import React, { useState } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketCount, setTicketCount] = useState(0); // Initialize ticket count to 0

  const handleViewEvent = (event) => {
    const eventId = event.target.getAttribute('data-event-id');
    const selectedEventData = data.find((item) => item.id === eventId);
    setSelectedEvent(selectedEventData);
    setTicketCount(0); // Reset ticket count when opening the modal
  };

  const incrementTicketCount = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const decrementTicketCount = () => {
    setTicketCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="container my-1">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3 my-3" key={item.id}>
            <div className="card shadow-lg bg border-info rounded-5" style={{ width: '18rem' }}>
              <img src={window.location.origin + '/img/' + item.Imgname + '.jpg'} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <div>
                  <h5 className="card-title fs-5">{item.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="p-1 fixed mx-3 border rounded border-info">
                      {item.date_time}
                    </div>
                    <p className="fs-6 d-inline-block ">
                      {item.description}<br />
                      <span className=''>Price: {item.price}</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-event-id={item.id}
                    onClick={handleViewEvent}
                  >
                    View Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedEvent ? selectedEvent.title : ''}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Display selected event details here */}
              {selectedEvent && (
                <>
                  <p>{selectedEvent.description}</p>
                  <p>Location: {selectedEvent.location}</p>
                  <p>Date And Time: {selectedEvent.date_time}</p>
                  <p>Price: {selectedEvent.price}</p>
                  <div className="form-group">
                    <label htmlFor="ticketCount">Tickets</label>
                    <div className="input-group ">
                      <button className="btn btn-outline-secondary" type="button" onClick={decrementTicketCount}>
                        -
                      </button>
                      <input
                        type="number"
                        style={{ maxWidth: '60px' }}
                        className="form-control text-center "
                        id="ticketCount"
                        value={ticketCount}
                        readOnly
                      />
                      <button className="btn btn-outline-secondary" type="button" onClick={incrementTicketCount}>
                        +
                      </button>
                    </div>
                  </div>
                  {/* Add more event details as needed */}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button"className='border border-0' data-bs-dismiss="modal">
                
                
                <Link to='/mycart' className="btn btn-primary" >Book Ticket</Link>
                </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}