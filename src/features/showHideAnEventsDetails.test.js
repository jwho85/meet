import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let AppWrapper;

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        when('an event is displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-box')).toHaveLength(2);
        });

        then('the event details should be collapsed by default', () => {
            expect(AppWrapper.find('.event-box .event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user clicks on the event button', () => {
            AppWrapper.update();
            AppWrapper.find('.event-box .show-details-button').at(0).simulate('click');
        });

        then('the event details will be displayed', () => {
            expect(AppWrapper.find('.event-box .event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has already opened an event', () => {
            AppWrapper = mount(<App />);
            AppWrapper.find('.event-box .show-details-button').at(0).simulate('click');
        });

        when('the user clicks on the event', () => {
            AppWrapper.update();
            AppWrapper.find('.event-box .show-details-button').at(0).simulate('click');
        });

        then('the event collapses to hide its details', () => {
            expect(AppWrapper.find('.event-box .event-details')).toHaveLength(0);
        });
    });
});