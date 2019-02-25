import React from 'react';


const Station = props => {
    return (
        <div className="display">
            <h1>Weather Report</h1>
            <div className="stations">
                {props.weatherData.map((currentItem, index) => {
                    return (
                    <div className="card" key={index}>
                        <h4>Station: {currentItem.Station}</h4>
                        <ul>
                        <li>Cloud Cover: {currentItem['Cloud-List'][0] ? currentItem['Cloud-List'][0]: 'not available'}</li>
                        <li>Wind Speed: {currentItem['Wind-Speed']} knots</li>
                        <li>Wind Direction: {currentItem['Wind-Direction']} degrees</li>
                        <li>Visibility: {currentItem.Visibility} miles</li>
                        <li>Temperature: {currentItem.Temperature} &#176;C</li>
                        </ul>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}


export default Station;