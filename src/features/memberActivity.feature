Feature: View Member Activity Overview

@memberActivity  @Regression
Scenario Outline: User able to view Member Activity Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Activity Overview
    Then user able to view the Member Activity fields in the page
    And user able to view "<schemeId>" Member Activity data in Overview Page
    And user able to view "<schemeId>" Member Activity filter in Overview Page
    And user able to view "<schemeId>" Member Activity data in Analysis Page
    And user able to view "<schemeId>" Member Activity map, graph and filter in Analysis Page
    And user able to view "<schemeId>" Member Activity filter and table data in Detail Report Page

        Examples:
        |space |schemeId |options|

#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
       