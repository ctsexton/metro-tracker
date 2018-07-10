import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const SchoolBus = () => (
  <img src='schoolBus.svg' style={{ 
    width: '40px',
    height: '40px',
    display: 'inline-flex',
    transform: 'translate(-50%, -50%)'
  }} alt=""/>
);
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <div className="map">
          <GoogleMapReact
            // Be sure to lock down API Key
            bootstrapURLKeys={{ key: 'AIzaSyCSFsLjVecfTD052z4w-944bzBDtzY_afo'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
        {this.props.markers.map(function(mark) {
          return (
            <SchoolBus
              key={mark.attributes.id}
              lat={mark.attributes.lat}
              lng={mark.attributes.lon}
            />
          )
        })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
 
export default SimpleMap;
