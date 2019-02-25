import React, { Component } from 'react';
import Station from './Station';
import axios from 'axios';
import './Display.css';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


 class Display extends Component {
  constructor() {
    super();
    this.state = {
        stations: [],
        weatherData: []
    };
  }

componentDidMount() {
    axios.get('/stations',  { headers: { Authorization: apiKey } })
        .then(res => {
            this.setState({ stations: res.data }, function() {
                this.getWeatherData();
            });
        })
        .catch(error => {
            console.error('Server Error', error);
        });
  }

  getWeatherData = () => {
      this.state.stations.map(currentItem => 
        axios.get(`/stations/${currentItem.Station}`,  { headers: { Authorization: apiKey } })
        .then(res => {
            this.setState({ weatherData: [...this.state.weatherData, res.data] });
        })
        .catch(error => {
            console.error('Server Error', error);
        })
      )
  }

  render() {
    return (
      <div>
          {
            this.state.weatherData.length > 0 ?
            <Station weatherData={this.state.weatherData}/> :
            <h1>Loading...</h1>
          }
      </div>
    );
  }
}

export default Display;