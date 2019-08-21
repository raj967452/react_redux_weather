import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import Chart from '../components/Chart';

import GoogleMap from '../components/Google_map';

class WeatherList extends Component{
    /*constructor(props){
        super(props);
    }*/
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressureData = cityData.list.map(weather => weather.main.pressure);
        const humidityData = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        

        return(
            <tr key={cityName}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td><Chart data={temps} color='orange' units="K"/></td>
                <td><Chart data={pressureData} color='green' units="hPa"/></td>
                <td><Chart data={humidityData} color='bloack' units="%" /></td> 
            </tr>
        )
    }
    render(){
        return (

            <Table responsive>
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature (K)</td>
                        <td>Pressure (hPa)</td>
                        <td>Humidity (%)</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </Table>
        )
    }
}

function mapStateToProps({weather}){
    //Whenever selectBook is called, the result should be passed to all of our reducer

    return { weather: weather }; 
    //return { weather: state.weather } // {weather} === {weather:weather }
    
}

/*const GoogleMapConfig = GoogleApiWrapper({
    apiKey: 'AIzaSyBqYc2rfHOTxNKRZYoippE1W4nGsuG0lAE'
 });*/


export default connect(mapStateToProps)(WeatherList);
//<GoogleMap lon={lon} lat={lat} />