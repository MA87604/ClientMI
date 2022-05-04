Feature: View Retirement Overview

@retirement  @Regression
Scenario Outline: User able to view Retirement Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Retirement Overview
    Then user able to view the Retirement Overview fields in the page
    And user able to view Retirement Overview filter "<options>" for "<schemeId>"

        Examples:
        |space |schemeId |options|
        #|My Scheme Intelligence Dashboard|GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        # |My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|DB/DC Deferred Members Main Plan|
#        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
#upcoming ret active and deferred not displayed