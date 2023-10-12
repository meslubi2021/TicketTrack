import React from "react";

export default function About() {
  return (
    
    <div class="accordion container" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Eventtrek
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>Tickettrek is an innovative ticketing and event management platform</strong> designed to simplify event planning and enhance the ticket purchasing experience. 
      With user-friendly features and robust event management tools, Tickettrek empowers organizers to create, promote, and manage events effortlessly. 
      Attendees can easily discover and purchase tickets to their favorite events, while event organizers benefit from seamless ticket management. 
      Join us on Tickettrek to discover, share, and attend the best events in town.
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Contact Us
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="d-flex">
          <label className="fw-bold fs-6">Email :  </label>
          <label > Tickettrek@host.com</label>
          
          <div className="mx-3">
          <label className="fw-bold fs-6 mx-1"> Contact :  </label>
          <label > +1 820005000</label>
      </div>
      </div>
      </div>
    </div>
  </div>
  
</div>
    
  );
}
