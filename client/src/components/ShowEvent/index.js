// 053120 GCM - I don't think this is being used anywhere so we can probably delete this.

import React from 'react';

function ShowEvent() {
  return(
    <div>
      <h1>USER NAME'S EVENTS PAGE (THE USER NAME SHOULD GO HERE)</h1>
    </div>
  );
}

export default ShowEvent;


// NOTES:
// 1.  When a user clicks on the "See All Events" button, a query should be made to the database for all the events
// once those are retrieved, they will be rendered here.
// 2.  For every event in the database display it as a list.
// 3.  User's name will be retrieved from the backend and be rendered here.