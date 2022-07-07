import React, { Component } from "react";

class Event extends Component {

    state = {
        buttonOpen: false,
        buttonText: 'show details',
        aboutEvent: '',
        googleCalendarLink: '',
        eventDescription: ''
    }

    buttonToggle = () => {
        if (buttonOpen == false) {
            this.setState({ buttonOpen: true });
            this.setState({ buttonText: 'hide details' });
            this.setState({ aboutEvent: 'About event' });
            this.setState({ googleCalendarLink: 'See details on Google Calendar' });
            this.setState({ eventDescription: 'Event Description' });
        } else {
            this.setState({ buttonOpen: false });
            this.setState({ buttonText: 'show details' });
            this.setState({ aboutEvent: '' });
            this.setState({ googleCalendarLink: '' });
            this.setState({ eventDescription: '' });
        }
    }

    render() {
        return (
            <div className="event-box">
                <div className="title">Title</div>
                <div className="date">Date</div>
                <div className="location">Location</div>
                <div className="about-event">{this.state.aboutEvent}</div>
                <div className="google-calendar-link">{this.state.googleCalendarLink}</div>
                <div className="event-description">{this.state.eventDescription}</div>
                <button className="show-details-button" onClick="buttonToggle()">{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Event;