Feature: View Contribution Overview

@contribution
Scenario Outline: User able to view Contribution Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Contribution Overview
    Then user able to view the basic contribution fields in the page
    And user able to view "<schemeId>" contributions "<options>" in Overview Page
    And user able to view "<schemeId>" contributions filter options in Overview Page
    And user able to view "<schemeId>" contributions "<options>" in Analysis Page
    And user able to view Contributions maps or charts for the "<schemeId>" in Overview page
    And user able to view "<schemeId>" contributions filter options in Analysis Page
    And user able to view "<schemeId>" contributions and filter options in Payroll Page
    And user able to view "<schemeId>" contributions "<options>" in Details report Page
    And user able to view "<schemeId>" contributions filter options in Details report Page


    Examples:
        |space |schemeId |options|

        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
