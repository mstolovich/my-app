import React, {useEffect} from 'react';
import { GooglePddMap } from './components/GoogleMap/GoogleMap'

import './App.css';

function App() {
    /*let map;
    const initMap = function() {
        // eslint-disable-next-line no-undef
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });    };
    useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbnY9AdWOe-qMJ7Y_o71mXRQTKrNxjgrY&callback=initMap";
    script.async = true;
    script.defer = true;
    //script.onload = () => this.scriptLoaded();


    console.log(map)
    console.log(map)
    document.head.appendChild(script);
  })*/
    useEffect(() => console.log())
  return (
    <div >
      <header className="App-header">
      <h1>Карта камер ПДД Днепр</h1>
      </header>
      <h3>Камеры наблюдения ПДД Днепр</h3>
      <GooglePddMap
          containerElement = {<div style={{height: `1000px`, width: '1000px' }}/>}
          mapElement = {<div style={{height: '100%'}}/>}
      />
    </div>
  );
}

export default App;
