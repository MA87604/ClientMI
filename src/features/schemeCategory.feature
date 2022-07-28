Feature: View Scheme Category Overview

#@login
@schemeCategory  @Regression

Scenario Outline: User able to view Scheme Category Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Scheme Category Overview
    Then user able to view the Scheme Category Overview fields in the page
    And user able to view "<schemeId>" Scheme Category Overview tables "<options>"
    And user able to view Scheme Category filter options for the "<schemeId>" in Overview page

        Examples:
        |space |schemeId |options|

#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|


       
   
        