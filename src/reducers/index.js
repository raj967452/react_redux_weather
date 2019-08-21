import { combineReducers } from 'redux';
//import thunk from 'redux-thunk';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

//const store = createStore( rootReducer, applyMiddleware( thunk ));

export default rootReducer;