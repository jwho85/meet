Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given the app is open
When an event is displayed
Then the event details should be collapsed by default

Scenario: User can expand an event to see its details
Given the app is open
When the user clicks on the event button
Then the event details will be displayed

Scenario: User can collapse an event to hide its details
Given the user has already opened an event
When the user clicks on the event
Then the event collapses to hide its details