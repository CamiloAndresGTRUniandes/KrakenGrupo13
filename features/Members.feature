Feature: Members
 
@user1 @web
Scenario: Como primer usuario deseo crear un member
 Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I say hello world
And I enter email "nathanbelt23@gmail.com"
And I wait for 5 seconds
And I enter password
And I click next
And I wait for 5 seconds
And I click member-error
And I wait for 5 seconds
And I click new member
And I wait for 5 seconds
And I enter name
And I wait for 5 seconds
And I say hello world


