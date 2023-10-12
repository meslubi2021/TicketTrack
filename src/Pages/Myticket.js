import React from 'react';

export default function Myticket() {
  let event = { name: 'meet', id: '5412', price: '499', Tickets: '5' };
  const eventName = 'Sample Event';
  const eventLocation = 'Sample Event Location';
  const eventDateTime = 'September 10, 2023, 3:00 PM';
  const NumberofTickets = '5';
  const eventDate = new Date(eventDateTime).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const eventTime = new Date(eventDateTime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='container  ticket-outer'>
      <div className='card custom-horizontal-card mx-auto'>
        <div className='custom-horizontal-card-content'>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data= Id : ${event.id}%0A Name : ${event.name}%0A Date : ${eventDateTime}%0A Location : ${eventLocation}%0A Tickets : ${event.Tickets}%0A Price:${event.price}&size=200x200`}
            alt=''
            className='custom-horizontal-card-img'
            title=''
          />
          <div className='custom-horizontal-card-details'>
            <h2 className='custom-card-title'>{eventName}</h2>
            <div className='custom-card-location-time'>
              <p className='custom-card-text'>{eventDate} | {eventTime}</p>
              <p className='custom-card-text'>{eventLocation}</p>
              <p className='custom-card-text'><strong>Tickets :</strong> {NumberofTickets}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
