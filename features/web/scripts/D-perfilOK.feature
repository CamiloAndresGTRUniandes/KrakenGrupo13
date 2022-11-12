Feature: Perfil
@user21 @web
Scenario: Como usuario deseo modificar mi datos de perfil
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Enter Module
And I click perfil
And I wait for 3 seconds
And I click your profile
And I wait for 3 seconds
And I enter name profile
And I wait for 1 seconds
And I enter slug profile
And I wait for 1 seconds
And I enter location profile
And I wait for 1 seconds
And I enter web site profile
And I wait for 1 seconds
And I enter facebook profile
And I wait for 1 seconds
And I enter twiter profile
And I wait for 1 seconds
And I enter bio profile

#Save
And I wait for 1 seconds
And I click save your profile
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End