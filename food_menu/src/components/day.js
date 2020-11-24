import React, { useEffect }  from "react";
import "./day.css";
import Food from './food';
const Day = (props) => {
   const title =props.title
   const listBarCode = props.listBarCode 
   /*const [count, setCount]=React.useState(0)*/

   const [nameElement, setNameElement]=React.useState("")
   /*const url = "https://world.openfoodfacts.org/api/v0/product/3042061712017.json"*/
   /* Hook of effect */
   /*React.useEffect(()=>{
        fetch(url)
            .then(function(response){ return response.json(); })
            .then(function(data) {
                if(data.product !== undefined){
                    setNameElement(data.product.product_name_fr) 
                }else{
                    setNameElement("meal not found ")
                }
            })
    },[])*/
   return(
      <>
      <li >
          <h2  class='day_title'>{title}</h2>
             {
                    listBarCode.map(barCode =>(
                        /*<h5>{barCode}</h5>*/
                        <Food barCode={barCode} />
                    ))
                }
          {/*<p class='clickNumber'>number of clicks = {count}</p>
          <button onClick={()=> setCount( count+ 1 )}>Click </button>*/}
      </li>
      
      </> 
   );


}
    
export default Day

