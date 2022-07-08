import React, { Component } from "react";

class Event extends Component {
    state = {
        showDetails: false
    };

    buttonToggle = () => {
        this.setState({ showDetails: !this.state.showDetails });
    };

    render() {

        const { event } = this.props;
        const { showDetails } = this.state;

        return (
            <div className="event-box">
                <div className="title">{event.summary}</div>
                <div className="date">{event.start.dateTime} ({event.start.timeZone})</div>
                <div className="location">@{event.summary} | {event.location}</div>
                <button
                    className="show-details-button"
                    onClick={() => this.buttonToggle}
                >
                    {showDetails ? 'hide details' : 'show details'}
                </button>
                {showDetails ? (
                    <>
                        <div className="about-event">About event:</div>
                        <div className="google-calendar-link">
                            <a href={event.htmlLink}>See details on Google Calendar</a>
                        </div>
                        <div className="event-description">{event.description}</div>
                    </>
                ) : null}
            </div>
        );
    }
}

export default Event;