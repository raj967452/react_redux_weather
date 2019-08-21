import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import { fetchWeatherInfo } from '../actions/index';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { country: '', region: '' }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState ({
            region: event.target.value
        })
    }
    onFormSubmit(event){
        event.preventDefault();
        // we need to go and fetch the weather data 
        this.props.fetchWeatherInfo(this.state.region, this.state.country);
        this.setState({country: '', region: ''});
    }
    selectCountry(val){
        this.setState({
            country: val
        })
    }
    selectRegion(val){
        this.setState({
            region: val
        })
    }
    /*componentDidMount(){
        this.props.fetchWeatherInfo(this.state.term)
    }*/
    render(){
        const {country, region} = this.state;
        return(
             <Form inline onSubmit={this.onFormSubmit} className="input-grouip">
                <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)}
                defaultOptionLabel="Select Country"
                showDefaultOption={true} />
                <RegionDropdown
                country = {country}
                value = {region}
                onChange={(val) => this.selectRegion(val)}
                blankOptionLabel="No country selected."
                defaultOptionLabel="Now select a region." />                
                <span>
                    <Button type="submit">Submit</Button >
                </span>
            </Form>
        );
    }
}

// Anything returned from this function will end up as props on the BookList Container 
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of our reducer
    return bindActionCreators({fetchWeatherInfo}, dispatch);    
}

// Promote BookList from a component to a container - it needs to know about 
// this new dispatch method, selectBook. Make is available as a props
export default connect(null, mapDispatchToProps)(SearchBar);