import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
let AppWrapper;

defineFeature(feature, test => {
    test('When the user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user hasn\'t specified a number', () => {
            AppWrapper.update();
        });

        then('the number count should be 32', () => {
            expect(AppWrapper.find('.event-box')).toHaveLength(2);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user changes the event count', () => {
            AppWrapper.update();
            AppWrapper.find('.number-input').simulate('change', { target: { value: 1 } });
        });

        then('the number of events should change based on user input', () => {
            expect(AppWrapper.find('.event-box')).toHaveLength(1);
        });
    });

});