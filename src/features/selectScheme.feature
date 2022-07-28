Feature: Select a scheme
 @scheme
 Scenario Outline: After logging user should be able to select a scheme

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Workplace dashboard
    Then user able to view tiles in the dashboard
    And user able to browse collection & dasboards

    Examples:
        |schemeId | space |
        |GF61865001 - YOUR SODEXO RETIREMENT PLAN|My Scheme Intelligence Dashboard|
#        |GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN |My Scheme Intelligence Dashboard|

       
