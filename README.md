# meet

The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

FEATURE 1: FILTER EVENTS BY CITY

As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.

Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.

Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.

Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.

SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT

Given the user has not clicked an event
When the user looks at the event
Then the even should be collapsed by default

SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE IT’S DETAILS

Give the user has clicked on an event
When the user clicks on the event
Then the user can see the event’s details

SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS

Given the user has already opened an event
When the user clicks on the event
Then the even collapses to hide its details

FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

SCENARIO 1: WHEN THE USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER

Given the user hasn’t specified a number
When the user looks at the number count
Then the number count should be 32

SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE

Given the user is looking at the event count
When the user changes the event count
Then the number of events should change based on user input

FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.

SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION

Given there is no internet connection
When the user is using the app
Then the app will display cached data

SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)

Given there is no internet connection
When the user tries to change the settings
Then the app will display an error message

FEATURE 5: DATA VISUALIZATION

As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY

Given that events exist in a particular city
When the user clicks on that city
Then the app will display a chart with the number of upcoming events for that city