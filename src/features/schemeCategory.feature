Feature: View Scheme Category Overview

#@login
@schemeCategory  @Regression

Scenario Outline: User able to view Scheme Category Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Scheme Category Overview
    Then user able to view the Scheme Category Overview fields in the page
    And user able to view "<schemeId>" Scheme Category Overview filter "<options>"

        Examples:
        |space |schemeId |options|
        #|My Scheme Intelligence Dashboard|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|
       # |My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|DB/DC Deferred Members Main Plan|
#        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|


       
   
        