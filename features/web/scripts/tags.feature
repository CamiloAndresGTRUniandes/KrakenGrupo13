Feature: Tags
@user21 @web
Scenario: Como usuario deseo crear un tag
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Enter Module
And I click tags
And I wait for 5 seconds
And I click new tag
And I wait for 3 seconds
And I enter name tag
And I wait for 1 seconds
And I enter color tag
And I wait for 1 seconds
And I enter description tag
And I wait for 1 seconds
And I click btnMetada tag
And I wait for 1 seconds
And I enter description metadata tag
And I wait for 1 seconds
And I enter url metadata tag
And I wait for 1 seconds
Then I click btnSaveTag tag
#Enter Module
And I click tags

#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End


@user22 @web
Scenario: Como usuario deseo actualizar un tag
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 30 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Enter Module
And I click tags
And I wait for 5 seconds
And I select the fist tag
#Edit de tags
And I wait for 5 seconds
And I enter name tag
And I wait for 1 seconds
And I enter color tag
And I wait for 1 seconds
And I enter description tag
And I wait for 1 seconds
And I click btnMetada tag
And I wait for 1 seconds
And I enter description metadata tag
And I wait for 1 seconds
And I enter url metadata tag
And I wait for 1 seconds
Then I click btnSaveTag tag
#Enter Module
And I click tags
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End


@user23 @web
Scenario: Como usuario deseo eliminar un tag
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 16 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Enter Module
And I click tags
And I wait for 5 seconds
And I select the fist tag
#Delete de tags
And I wait for 5 seconds
And I delete the tag
And I click confirm delete the tag
#Enter Module
And I click tags
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End