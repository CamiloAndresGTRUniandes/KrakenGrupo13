Feature: Ajustes
@user51 @web
Scenario: Como usuario deseo modificar el color de la aplicacion
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Change Color App

Then I change skin app
And I wait for 10 seconds
Then I change skin app
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End

@user52 @web
Scenario: Como usuario deseo modificar el titulo de la aplicacion
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Change Color App
And I click button settings
And I wait for 5 seconds
And I click button general
And I wait for 5 seconds
And I click button expand title
And I wait for 3 seconds
And I enter title app
And I wait for 1 seconds
And I enter description app
And I wait for 1 seconds
And I click button save title
And I wait for 1 seconds
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End