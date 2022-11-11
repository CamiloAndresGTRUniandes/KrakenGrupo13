Feature: Posts
#####################################################################
####### Escenario 1: Como usuario deseo crear un nuevo post #########
#####################################################################
@user201 @web
Scenario: Como usuario deseo crear un nuevo post
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login
And I click element in posts "Posts"
And I wait for 2 seconds
And I click element in posts "NewPost"
And I wait for 2 seconds
And I enter posts text in "PostTitle"
And I wait for 2 seconds
And I enter posts text in "PostBody"
And I wait for 4 seconds
And I click element in posts "PostPublish"
And I wait for 3 seconds
And I click element in posts "ContinuePublish"
And I wait for 3 seconds
And I click element in posts "Publish"
And I wait for 3 seconds
And I click element in posts "BackToEditor"
And I wait for 2 seconds
And I click element in posts "BackToPosts"
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End




###############################################################################
#### Escenario 2: Como usuario deseo editar un nuevo publicado previamente ####
###############################################################################
@user202 @web
Scenario: Como usuario deseo editar un nuevo publicado previamente
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login
And I click element in published "Published"
And I wait for 2 seconds
And I click element in published "SelectedPost"
And I wait for 2 seconds
And I click element in published "EditPost"
And I wait for 2 seconds
And I enter published text in "PostTitle"
And I wait for 2 seconds
And I enter published text in "PostBody"
And I wait for 2 seconds
And I click element in published "UpdatePost"
And I wait for 2 seconds
And I click element in published "BackToPost"

#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End


################################################################################################
#### Escenario 3: Como usuario deseo crear un post agendado para ser publicado en el futuro ####
################################################################################################
@user203 @web
Scenario: Como usuario deseo crear un post agendado para ser publicado en el futuro
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click element in posts "Posts"
And I wait for 2 seconds
And I click element in posts "NewPost"
And I wait for 2 seconds
And I enter posts text in "PostTitle"
And I wait for 2 seconds
And I enter posts text in "PostBody"
And I wait for 4 seconds
And I click element in posts "PostPublish"
And I wait for 2 seconds
And I click element in posts "ScheduledTime"
And I wait for 2 seconds
And I click element in posts "ScheduledButton"
And I wait for 3 seconds
And I click element in posts "ContinuePublish"
And I wait for 3 seconds
And I click element in posts "Publish"
And I wait for 2 seconds
And I click element in posts "BackToPosts"
And I wait for 2 seconds
And I click element in posts "BackToPosts"
##Exit Ghost-Begin
#And I wait for 3 seconds
#And I click perfil
#And I wait for 2 seconds
#And I close my session
#And I wait for 3 seconds
##Exit Ghost-End


#############################################################################
#### Escenario 4: Como usuario deseo hacer unpublish de un post agendado ####
#############################################################################
@user204 @web
Scenario: Como usuario deseo hacer unpublish de un post agendado
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click element in posts "Posts"
And I wait for 2 seconds
And I click element in posts "NewPost"
And I wait for 2 seconds
And I enter posts text in "PostTitle"
And I wait for 2 seconds
And I enter posts text in "PostBody"
And I wait for 4 seconds
And I click element in posts "PostPublish"
And I wait for 2 seconds
And I click element in posts "ScheduledTime"
And I wait for 2 seconds
And I click element in posts "ScheduledButton"
And I wait for 3 seconds
And I click element in posts "ContinuePublish"
And I wait for 3 seconds
And I click element in posts "Publish"
And I wait for 2 seconds
And I click element in posts "BackToPosts"
And I wait for 2 seconds
And I click element in posts "BackToPosts"
And I wait for 2 seconds
And I click element in scheduled "Scheduled"
And I wait for 2 seconds
And I click element in scheduled "SelectScheduled"
And I wait for 2 seconds
And I click element in scheduled "Unschedule"
And I wait for 2 seconds
And I click element in scheduled "ConvertToDraft"
And I wait for 2 seconds
And I click element in scheduled "BackToPost"

##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End



############################################################################
########## Escenario 5: Como usuario deseo crear una nueva pagina ##########
############################################################################
@user205 @web
Scenario: Como usuario deseo crear una nueva pagina
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click element in pages "Pages"
And I wait for 2 seconds
And I click element in pages "NewPage"
And I wait for 2 seconds
And I enter pages text in "PageTitle"
And I wait for 2 seconds
And I enter pages text in "PageBody"
And I wait for 4 seconds
And I click element in pages "PagePublish"
And I wait for 3 seconds
And I click element in pages "ContinuePublish"
And I wait for 3 seconds
And I click element in pages "Publish"
And I wait for 3 seconds
And I click element in pages "BackToEditor"
And I wait for 2 seconds
And I click element in pages "BackToPages"

##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End