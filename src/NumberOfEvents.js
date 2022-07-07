import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        eventNumber: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value > 32 || value < 1) {
            this.setState({
                eventNumber: 'Please choose a number between 1 and 32'
            })
        } else {
            this.setState({
                eventNumber: value
            })
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="number"
                    className="number-input"
                    value={this.state.eventNumber}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;