Feature: Client MI login scenarios

    #@login 
    Scenario Outline: User able to login successfully

    Given user navigated to login page
    When user enter "<username>", "<password>" login credentails
    Then user logged in successfully

    Examples:
        | username                      | password      | 
        | monika.ahlawat@landg.com      | B1rstM!2@21   | 
        #| neil.ramsay@landg.com         | Ftins67@Yn   |
