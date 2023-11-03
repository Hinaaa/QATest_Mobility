Feature: Map Screen Functionality

  Background: 
    Given user is logged into the application

  Scenario: Validating the presence of six vehicles on the map
    When user views the map screen
    Then user should see exactly 6 vehicles markers on the map

  Scenario: Locating a Selected Vehicle
    When user selects a vehicle on the map and navigates away
    And user taps the "Locate Selected Vehicle" button
    Then user should be navigated back to the selected vehicle on the map

  Scenario: Locating a Selected Vehicle After Renting Another Vehicle
    When user selects a vehicle on the map and taps "RENT VEHICLE"
    And user selects another vehicle and navigates away
    And user taps the "Locate Selected Vehicle" button
    Then user should be navigated back to the initially selected vehicle on the map

  Scenario: Opening Nearby Vehicles List
    When user taps the "Nearby Vehicles List" button
    Then another window should open with a list of vehicles
    And the list should display vehicle details
    When the user taps any vehicle in the list
    Then a popup should open containing the same details of the selected vehicle

  Scenario: Renting and Ending Rent
    When user selects a vehicle on the map and taps "RENT VEHICLE"
    And user taps "End Rent"
    Then vehicle should be rented
    And "Ride" label with a count should appear, e.g., "Ride: 1"

  Scenario: Renting, Ending Rent, and Renting Again
    When user rents a vehicle, ends the rental, and then rents the same vehicle again
    Then ride count should increase accordingly, e.g., "Ride: 2"

  Scenario: Renting Two Vehicles Simultaneously
    When user rents a vehicle
    And user selects another vehicle
    Then user should not be able to rent two vehicles at the same time

  Scenario: Closing Vehicle Popup
    When user selects a vehicle on the map
    And user closes the popup by tapping the "X" icon
    Then popup should close

  Scenario: Going to Rented Vehicle
    When user rents a vehicle
    And user selects another vehicle
    And user sees the "Go to Rented Vehicle" button
    And user taps "Go to Rented Vehicle"
    Then existing rented vehicle should open in a popup
    And popup should contain a button labeled "End RENT"

  Scenario: Disabling "Locate Selected Vehicle" Without Selection
    When user taps the "Locate Selected Vehicle" button
    Then button should be disabled

  Scenario: "END RENT" Should Not Appear
    When user selects a vehicle on the map
    Then user should not see the "END RENT" option until the vehicle is rented

  Scenario: Selecting Another Vehicle and Deselecting
    When user selects a vehicle on the map
    And user does not perform any action on it
    And user selects another vehicle
