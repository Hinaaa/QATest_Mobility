Feature: Nearby Vehicles List Screen Functionality

  Scenario: Opening the Nearby Vehicles List Screen
    When the user taps the "Nearby Vehicles List Screen" button
    Then another screen should appear containing a list of nearby vehicles from the map

  Scenario: Viewing Vehicle Details from Nearby Vehicles List
    When the user taps the "Nearby Vehicles List Screen" button
    And the user selects any vehicle from the list
    Then a popup should appear with the same details as the selected vehicle on the map

  Scenario: Validating Matching Details
    When the user taps the "Nearby Vehicles List Screen" button
    And the user selects or does not select any vehicle on the map
    Then the user should see a list of nearby vehicles
    And the details in the list should match those of the vehicles on the map

  Scenario: Count of Nearby Vehicles
    When the user taps the "Nearby Vehicles List Screen" button
    Then the user should see a list of nearby vehicles
    And the count of nearby vehicles on the screen should match the count of vehicles on the map

  Scenario: Selecting a Vehicle in Nearby Vehicles List Screen
    When the user selects a vehicle on the map
    And the user taps the "Nearby Vehicles List Screen" button
    And the user selects any vehicle from the list
    And the user closes the Nearby Vehicles List Screen
    Then the vehicle the user selected previously on the map should still be selected
