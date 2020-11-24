import React, { useEffect }  from "react";
import "./food.css";
const Food = (props) => {
   const barCode=props.barCode
   const [foodName, setFoodName]=React.useState("")
   const url="https://world.openfoodfacts.org/api/v0/product/"+barCode+".json"
   /* Hook of effect */
    
   React.useEffect(() =>{
    fetch(url)
        .then(function(response){ return response.json(); })
        .then(function(data) {
            data.product !== undefined ? setFoodName(data.product.product_name_fr) : setFoodName("Meal not found")
        })
},[])
   return(
      <>
          <h5 class='food_title'>{foodName} </h5>
      </> 
   );
}
    
export default Food
