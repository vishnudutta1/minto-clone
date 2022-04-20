
import {STORE_DATA} from './actionTypes.js'

// initial state

const initState= {
    
    data: []
}

// reducer read the action and according to that will update the state;

const reducer= (state=initState, action)=> {
   switch(action.type){

       case STORE_DATA:

       return {...state, data: action.payload}
       default: 
       return state;

   }
}

export {reducer};