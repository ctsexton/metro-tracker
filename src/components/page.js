import Nav from './nav'
import React from 'react';
import SimpleMap from './simpleMap'
import metro from '../utils/api.js'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line: 704,
      lineValue: 704,
      markers: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateLine = this.updateLine.bind(this);
  }
  handleInput(event) {
    this.setState({lineValue: event.target.value});
    console.log(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({line: this.state.lineValue}, this.updateLine);
  }
  updatePositions(line) {
    metro.getVehicles(line).then(function(vehicles) {
      this.setState(function () {
        return { markers: vehicles}
      });
    }.bind(this));
  }
  updateLine() {
    clearInterval(this.timerID);
    this.updatePositions(this.state.line);
    this.timerID = setInterval(
      () => this.updatePositions(this.state.line),
      10000
    );
  }
  componentDidMount() {
    this.updatePositions(this.state.line);
    this.timerID = setInterval(
      () => this.updatePositions(this.state.line),
      10000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <Nav lineValue={this.state.lineValue} handleChange={this.handleInput} handleSubmit={this.handleSubmit} />
        <SimpleMap center={{ lat: 34.0522, lng: -118.2437 }} markers={this.state.markers}/>
      </div>

    )
  }
}
export default Page;
