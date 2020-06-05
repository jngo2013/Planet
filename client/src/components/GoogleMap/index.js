import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './googlemap.css'

const mapStyles = {
  width: "300px",
  height: "450px",
  margin: "10px",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    latit: 0,
    lngtude: 0,
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      coordinates: {},
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  fetchPlaces(mapProps, map) {
    if (mapProps.location == null) {
    }
  }
  render() {
    if(this.props.location.lan === undefined && this.props.location.lng === undefined){
      return (
        <h2 className='google-spinner'>You map is being made</h2>
      )

    } else {
      return (
        <Map
          google={this.props.google}
          onReady={this.fetchPlaces(this.props)}
          zoom={14}
          style={mapStyles}
          initialCenter={this.props.location}
        >
          <Marker onClick={this.onMarkerClick} name={`Event Location`} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYEQBxCNDP4ES5FEsblaj4I9ysK47F8iU",
})(MapContainer);
