Feature: Choose spaces

 Scenario Outline: After logging user should be able to choose spaces

    Given user logged in successfully to clientMI Website
    When user select "<spaces>"
    Then user navigated to the workplace dashboards 
    Examples:
        |spaces    |
        #|My Scheme Intelligence - Development   | 
        #|My Scheme Intelligence - Production Staging   | 
        |My Scheme Intelligence Dashboard   | 
        #|My Scheme Intelligence Dashboard V02   |   

