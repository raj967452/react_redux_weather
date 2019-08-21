import React, {Component} from 'react';

class GoogleMap extends Component{

    /*componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
    }*/

    componentDidMount(){
        this.loadMap();
        /*let self = this;
        /*new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });*/
    }
    
    loadMap(){
        debugger;
        if (this.props) {
            // google is available
            //const {google} = this.props;
            const maps = window.google.maps;
            const mapConfig = {
                zoom: 5,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            }
            this.map = new maps.Map(this.refs.map, mapConfig);
        }
    }
    

    render(){
        
        // this.refs.map
        return (<div ref='map'>Loading map...</div>)
    }

}

export default GoogleMap;