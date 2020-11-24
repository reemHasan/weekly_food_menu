import React from "react";
import Day from "./day";
import "./WeekMenu.css";

const WeekMenu = (props) => {
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return(
       <>
       <div class="menu">
       <h1>Weekly food menu</h1>
       {days.map((day,index) => {
           return(
       <ul>
       <Day title={day} listBarCode={['3454681006511', '737628064502', '3250392392277', '3700009252567', '3564707109888',  '8411555100404',  '5449000000996']}/>
       </ul>)
       })
       }
       </div>
       </> 
    )
 
 }    
 export default WeekMenu