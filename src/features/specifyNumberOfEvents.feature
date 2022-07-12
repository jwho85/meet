Feature: Specify number of events

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario: When the user hasn't specified a number, 32 is the default number
Given the app is open
When the user hasn't specified a number
Then the number count should be 32

Scenario: User can change the number of events they want to see
Given the app is open
When the user changes the event count
Then the number of events should change based on user input