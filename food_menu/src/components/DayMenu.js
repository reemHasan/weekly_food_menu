import React from 'react';
import { ListGroup,ListGroupItem,Container } from 'reactstrap'

const DayMenu = ()=> {
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }

    return (
        <div class="container">
          <div>
              <h1>Weekly food menu</h1>
          </div>
        <div class="row">
        <div class="col-10">
        <ListGroup>
          
          {days.map((day,index) => {
           return(
            <ListGroupItem action onClick={alertClicked}>{day}</ListGroupItem>
            )
       })
       }
        </ListGroup>
        </div>
        </div>
        </div>
      );
    
    }

export default DayMenu;