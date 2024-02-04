@saudeDemo
Feature: Login on pratice automation

  @Login
  Scenario Outline: Success login
    Given a user is on automation demo page
    When inform '<User>' and '<Password>' data
    And click on Login button
    Then the user will be redirect invenroty page

    Examples: 
      | User    | Password    |
      | student | Password123 |


  Scenario Outline: Invalid username
    Given a user is on automation demo page
    When inform '<User>' and '<Password>' data
    And click on Login button
    Then the user receive message 'Your username is invalid!'

    Examples: 
      | User          | Password    |
      | incorrectUser | Password123 |

Scenario Outline: Invalid Password
    Given a user is on automation demo page
    When inform '<User>' and '<Password>' data
    And click on Login button
    Then the user receive message 'Your password is invalid!'

    Examples: 
      | User    | Password           |
      | student | incorrectPassword  |