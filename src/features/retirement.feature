Feature: View Retirement Overview

@retirement  @Regression
Scenario Outline: User able to view Retirement Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Retirement Overview
    Then user able to view the Retirement Overview fields in the page
    And user able to view Retirement Analysis fields for "<schemeId>"
    And user able to view the Retirement Detail Report fields in the page for "<schemeId>"

        Examples:
        |space |schemeId |options|
#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
