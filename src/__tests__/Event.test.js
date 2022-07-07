import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });
    test('render initial event', () => {
        expect(EventWrapper.find('.event-box')).toHaveLength(1);
    });
    test('check if extra info is shown when a user clicks on the show details button', () => {
        EventWrapper.find('.show-details-button').simulate('click'); //not working
        expect(EventWrapper.state('buttonText').toBe('hide details'));
    });
});