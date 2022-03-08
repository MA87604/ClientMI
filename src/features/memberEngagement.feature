Feature: View Member Online Engagements Overview

#@login
@memberOnlineEngagement
Scenario Outline: User able to view Member Online Engagements Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Online Engagements Overview
    Then user able to view the Member Online Engagements fields in the page
    And user able to view "<schemeId>" Member Online Engagements filter "<options>", "<gender>", "<age>" and "<status>"

        Examples:
        |space |schemeId |options|gender|age|status|
        #|My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|Female|All|Active|
        #|My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|Female|All|Active|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|DB/DC Deferred Members Main Plan|Female|All|Active|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|Female|All|Active|
     