Feature: View Member Information Overview

#@login
@memberInfo
Scenario Outline: User able to view Member Information Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Information Overview
    Then user able to view the Member Information fields in the page
    And user able to view "<schemeId>" Member Information Overview filter "<gender>", "<ageband>" and "<age>"

        Examples:
        |space |schemeId|gender|ageband|age|
        #|My Scheme Intelligence Dashboard|GF34865001 - PACE DC - CO-OP SECTION AVCS|Female|31|40|
        #|My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|Female|31|40|
        #|My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|Female|31|40|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|Female|31|40|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|Female|31|40|
     