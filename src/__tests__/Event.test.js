import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from "../mock-data"

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });
    test('render initial event', () => {
        expect(EventWrapper.find('.event-box')).toHaveLength(1);
    });
    test('check if hide details is shown when you click the button', () => {
        EventWrapper.setState({ showDetails: false });
        EventWrapper.find('.show-details-button').simulate('click');
        expect(EventWrapper.find('.show-details-button').text()).toEqual('hide details');
    });
    test('check if show details is shown when you click the button again', () => {
        EventWrapper.setState({ showDetails: true });
        EventWrapper.find('.show-details-button').simulate('click');
        expect(EventWrapper.find('.show-details-button').text()).toEqual('show details');
    });
});