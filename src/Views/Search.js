import React from 'react';
import '../App.css';

export default function Search() {
  return (
    <center>
      <div className='mt-2 p-5 search rounded-4 w-50'>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 border-primary ph"
            type="search"
            placeholder="Search Name or Place of Event"
            aria-label="Search"
            style={{ color: 'blue' }} // Adding inline style to change placeholder text color
          />
        </form>
      </div>
    </center>
  );
}
