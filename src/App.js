import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {

  state = {
    events: [],
    locations: [],
    locationSelected: 'all',
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  }

  componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        offlineAlert: 'You are offline. The data has been loaded from the cache.'
      });
    } else {
      this.setState({
        offlineAlert: ''
      });
    }
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
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />
    }
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineAlert} />
        <h1 className="main-header">Meet App</h1>
        <strong>Choose your nearest city</strong>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <p>Number of Events:</p>
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;