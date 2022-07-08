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
        EventWrapper.find('.show-details-button').simulate('click');
        expect(EventWrapper.state('buttonText')).toBe('hide details');
    });
    test("check if buttonOpen is set to true when button is clicked", () => {
        EventWrapper.setState({ buttonOpen: true });
        EventWrapper.find(".show-details-button").simulate("click");
        expect(EventWrapper.state("buttonText")).toBe("show details");
    });
});