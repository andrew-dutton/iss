import React from 'react';
import './App.css';
class LandOrSea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      apikey: "c9597587d1e74ab99e30bca952e19834",
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      name: "",
      sea: "",
      url: "https://api.opencagedata.com/geocode/v1/json?key=",
      key: "c9597587d1e74ab99e30bca952e19834&q=",
      joiner: "%2C",
      urlEnd: "&pretty=1",
      noData: ""
    }
  }
  componentDidMount() {
    fetch(this.state.url 
      + this.state.key 
      + this.state.latitude 
      + this.state.joiner 
      + this.state.longitude 
      + this.state.urlEnd
    )
    .then(res => res.json())
    .then(
      (result) => {
        if (result.total_results === 0) {
          this.setState({
              isLoaded: true,
              sea: "",
              name: "",
              noData: "Above International Waters"
          })
        } else if (!!result.results[0].components.country) {
            this.setState({
              isLoaded: true,
              name: result.results[0].components.country
           })
         } else {
            this.setState({
              isLoaded: true,
              sea: result.results[0].components.body_of_water
            })
          }
      })
  }
  render() {
    const { error, isLoaded, name, sea, noData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div>
          <h1 id="output-land">{name}</h1>
          <h1 id="output-sea">{sea}</h1>
          <h3 id="no-data">{noData}</h3>
        </div>
      )
    }
  }
};

export default LandOrSea;
