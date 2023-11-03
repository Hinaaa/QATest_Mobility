Feature: Validate Login with Valid and Invalid credentials

  Scenario Outline: Validate Login Successfully
    Given user is able to see login page and <loginLabel>
    When user enters <emailAddress> E-mail textbox
    And user enters <password> Password textbox
    And user clicks login button
    Then validate user login successfully
   Examples: 
      | emailAddress              | password | loginLabel |
      | qatest@wundermobility.com | 12345678 | QA Test    |

  Scenario Outline: Validate Login Unsuccessfully with Invalid credential
    Given user is able to see login page and <loginLabel>
    When user enters <emailAddress> E-mail textbox
    And user enters <password> Password textbox
    And user clicks login button
    Then validate user unable to login and error message <InvalidCredentialMessage> appear

    Examples: 
      | emailAddress              | password | loginLabel | InvalidCredentialMessage                     |
      | qatest@wundermobility.com | 12349999 | QA Test    | Invalid credentials! Please check your data. |

 