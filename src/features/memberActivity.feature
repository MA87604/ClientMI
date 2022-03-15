Feature: View Member Activity Overview

@memberActivity
Scenario Outline: User able to view Member Activity Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Activity Overview
    Then user able to view the Member Activity fields in the page
    And user able to view "<schemeId>" Member Activity filter "<options>"

        Examples:
        |space |schemeId |options|
        #|My Scheme Intelligence Dashboard|GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan| 
        #|My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|
        #|My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
       