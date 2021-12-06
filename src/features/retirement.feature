Feature: View Retirement Overview

@retirement
Scenario Outline: User able to view Retirement Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Retirement Overview
    Then user able to view the Retirement Overview fields in the page
    And user able to view Retirement Overview filter "<options>" for "<schemeId>"

        Examples:
        |space |schemeId |options|
        |My Scheme Intelligence Dashboard|GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
