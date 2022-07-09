import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Event extends Component {
    state = {
        showDetails: false
    };

    buttonToggle = () => {
        this.setState({ showDetails: !this.state.showDetails });
    };

    parseDate(date) {
        let eventDate = new Date(date);
        let d = eventDate.toLocaleDateString((undefined, { timeZone: 'UTC' }));
        let t = eventDate.getHours() + ":" + ('0' + eventDate.getMinutes()).slice(-2);
        return d + ' |  ' + t;
    }

    render() {

        const { event } = this.props;
        const { showDetails } = this.state;

        return (
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card className="text-left">
                        <Card.Body>
                            <div className="event-box">
                                <Card.Title><h2><div className="title">{event.summary}</div></h2></Card.Title>
                                <div className="date">{this.parseDate(event.start.dateTime)} ({event.start.timeZone})</div>
                                <div className="location">@{event.summary} | {event.location}</div>
                                <div className="text-right">
                                    <Button
                                        className="show-details-button"
                                        onClick={() => this.buttonToggle()}
                                    >
                                        {showDetails ? 'hide details' : 'show details'}
                                    </Button>
                                </div>
                                {showDetails ? (
                                    <>
                                        <h5><div className="about-event">About event:</div></h5>
                                        <div className="google-calendar-link">
                                            <a href={event.htmlLink}>See details on Google Calendar</a>
                                        </div>
                                        <Card.Text><div className="event-description">{event.description}</div></Card.Text>
                                    </>
                                ) : null}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Event;