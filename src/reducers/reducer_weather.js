import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER: 
            return [action.payload, ...state]; //we can use ...state in place of state.concat
            //return [action.payload.data, ...state]; // [city, city, city ]
        default: return state;
    }    
}