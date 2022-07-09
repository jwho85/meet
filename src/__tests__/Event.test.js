import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });
    test('render initial event', () => {
        expect(EventWrapper.find('.event-box')).toHaveLength(1); //not working
    });
    test('check if hide details is shown when you click the button', () => {
        EventWrapper.setState({ showDetails: false });
        EventWrapper.find('.show-details-button').simulate('click');
        expect(EventWrapper.find('.show-details-button').props().text()).toEqual('hide details'); //not working
    });
    test('check if show details is shown when you click the button again', () => {
        EventWrapper.setState({ showDetails: true });
        EventWrapper.find('.show-details-button').simulate('click');
        expect(EventWrapper.find('.show-details-button').props().text()).toEqual('show details'); //not working
    });
});