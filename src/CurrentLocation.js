import React from 'react';
import LandOrSea from './LandOrSea';

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      iss_positionLatitude: "",
      iss_positionLongitude: ""
      }
    };
  
  componentDidMount() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          iss_positionLatitude: result.latitude,
          iss_positionLongitude: result.longitude
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, iss_positionLatitude, iss_positionLongitude } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <p>Lat: {iss_positionLatitude} Long: {iss_positionLongitude}</p>
          <LandOrSea latitude={iss_positionLatitude} longitude={iss_positionLongitude} />
        </div>
      );
    }   
  }
}


export default CurrentLocation;
