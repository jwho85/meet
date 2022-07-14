import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value > 32 || value < 1) {
            this.setState({
                numberOfEvents: value,
                errorText: 'Please choose a number between 1 and 32.'
            })
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: ''
            })
        }
        this.props.updateEvents(undefined, value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="number"
                    className="number-input"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged} />
                <ErrorAlert text={this.state.errorText} />
            </div >
        );
    }
}

export default NumberOfEvents;