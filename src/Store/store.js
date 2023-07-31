import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "../Reducer/reducer";



// combine all the reducers into a single variable
const reducers=combineReducers({
    restReducer
})

// middleware
const middleware=[thunk]

// create store
const restStore=createStore(reducers,applyMiddleware(...middleware))


// export
export default restStore