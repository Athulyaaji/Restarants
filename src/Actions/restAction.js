import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restConstants";





// logic to update store data
// api call - dispatable is used to create
 export const getRestaurants=async(dispatch)=>{
 try{
    const {data}=await axios.get('/restaurants.json')
   console.log(data.restaurants);
//    dipatch the expected output payroll to reduer
     dispatch(
        {
            payload:data.restaurants,
            type:SUCCESS
        }
     )
 }
 catch(er){
    dispatch(
        {
          payload:er,
          type:FAIL 
        })
 }

}


