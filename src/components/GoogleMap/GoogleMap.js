import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

export const GooglePddMap = withGoogleMap(props => (
    <GoogleMap
        defaultCenter = { { lat : 48.464717, lng : 35.046183 } }
        defaultZoom = { 10 }>
        <Marker
            position={{ lat: 48.434345, lng: 35.045201 }}
        />
    </GoogleMap>)
)