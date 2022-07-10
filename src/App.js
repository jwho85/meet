import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class App extends Component {

  state = {
    events: [],
    locations: [],
    locationSelected: 'all',
    numberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else {
      this.setState({ numberOfEvents: eventCount })
    }
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        locationSelected: location,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-header">Meet App</h1>
        <strong>Choose your nearest city</strong>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <p>Number of Events:</p>
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;