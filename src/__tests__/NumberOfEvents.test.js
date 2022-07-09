import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render number of events text input', () => {
        expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
    });
    test('renders text input correctly', () => {
        const eventNumber = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(eventNumber);
    });
    test('change state when text input changes', () => {
        NumberOfEventsWrapper.setState({
            numberOfEvents: 32
        });
        const eventObject = { target: { value: '10' } };
        NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10'); //not working
    });
});