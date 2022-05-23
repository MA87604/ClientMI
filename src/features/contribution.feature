Feature: View Contribution Overview

@contribution
Scenario Outline: User able to view Contribution Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Contribution Overview
    Then user able to view the basic contribution fields in the page
    And user able to view "<schemeId>" contribution filter "<options>"

    Examples:
        |space |schemeId |options|
#        |My Scheme Intelligence Dashboard|GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
#        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
