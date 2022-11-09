Feature: Members
 
@user1 @web
Scenario: Como primer usuario deseo crear un member
 Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I say hello world
And I enter email "nathanbelt23@gmail.com"
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
And I click member
And I wait for 5 seconds
And I click new member
And I wait for 5 seconds
And I enter name member
And I enter email member "nathanbelt23@hotmail.com"
And I wait for 1 seconds
And I enter note member
And I save new member
And I wait for 3 seconds
And I click member
And I wait for 3 seconds
And I say hello world


