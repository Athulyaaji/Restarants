import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from './Actions/restAction'
import restStore from './Store/store'







function Home() {

  const  dispatch=useDispatch()

  // import a state to store the data
  // const [restaurants, setMenu] = useState([])

  // // api to get all the restaurant from db.json(step1)
  // const fetchMenu = async () => {
  //   var result = await fetch('/restaurants.json')
  //   // convert to json
  //   result.json().then(data => setMenu(data.restaurants));
  // }

  // step2
  useEffect(() => {

    dispatch(getRestaurants)
    // fetchMenu()
  }, [])

  const restaurants=useSelector(state=>state.restReducer.restLis)

  // console.log(restaurants);

  return (

    <div>
      {/* step 4 to access the details the go to menu.js and insert data to the function */}
     
          <Menu data={restaurants}></Menu>

        
    </div>
  )
}

export default Home