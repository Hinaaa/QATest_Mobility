# QATest_Mobility
QATest_WunderMobility

# QATest_WunderMobility
Wunder Mobility – QA Mobile Automation Project
An automation framework has been design using object-oriented approaches.
App: Login, Rent a vehicle and End Rent, and Nearby Vechicle List

# Prerequisites and Tech stacks:
Cucumber.io Java Development Kit (JDK) - Version 8 or higher Maven 
Appium version 7 or higher
Seleniumhq version 3 or higher 
Junit version 4 or higher
Note: All these dependencies mentioned in POM.xml
UIAutomator should be installed.
Appium server should be running.

# Running test:
Execute file from src/test/java/Features
Steps are mentioned in .feature files

# TestCases file:
src/test/java/Features
•	Test1_Login.feature
•	Test2_MapScreen
•	Test3_NearbyVehicleList

Note: Each test scenario as a test case mentioned in respective under annotations Scenario Outline/Scenario 

# File’s structure:
src/test/java/Features-: contain feature files for test scenario src/test/java/PageFactory: All reusable functions and element ids in custom control defined here src/test/java/StepsDefinations/loginTestSteps: Code associated with cucumber scenario’s.
src/test/java/RunnerClass-: Contain execution path and glue code for report generation. 

# Approaches and Automation Concepts:
Input data provided in feature file in data table.
Centralized approach for reusability Assertions has been placed for validation and provided centralized.

# Page object model approach used – Class PageFatcory also used.
Custom controls created and used.
Comments mentioned for better understanding Maintainable and re-usable code Choosing. 

# Reports:
Reports generated from given glue path in RunnerClass
1. html report: target/htmlReports
2. JSONReports: target/JSONReports
3. JunitReports target/JunitReports
