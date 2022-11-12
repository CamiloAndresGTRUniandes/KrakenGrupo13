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
And I click "posts link"
And I wait for 2 seconds
And I click "New Post button inside posts module"
And I wait for 2 seconds
And I enter text in "post title field inside posts editor"
And I wait for 2 seconds
And I enter text in "post body field inside posts editor"
And I wait for 4 seconds
And I click "Publish button inside posts editor"
And I wait for 3 seconds
And I click "Continue button after posts editor"
And I wait for 3 seconds
And I click "Publish Post button after posts editor"
And I wait for 3 seconds
And I click "Back to Editor button inside posts publish"
And I wait for 2 seconds
And I click "Back to Posts button inside posts editor"
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End


###############################################################################
#### Escenario 2: Como usuario deseo editar un post publicado previamente ####
###############################################################################
@user202 @web
Scenario: Como usuario deseo editar un post publicado previamente
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login
And I click "Published link"
And I wait for 2 seconds
And I click "First published post inside published module"
And I wait for 2 seconds
And I click "Edit post button inside published module"
And I wait for 2 seconds
And I enter text in "post title field inside published editor"
And I wait for 2 seconds
And I enter text in "post body field inside published editor"
And I wait for 2 seconds
And I click "Update post button inside published module"
And I wait for 2 seconds
And I click "Back to post button inside published module"

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

And I click "posts link"
And I wait for 2 seconds
And I click "New Post button inside posts module"
And I wait for 2 seconds
And I enter text in "post title field inside posts editor"
And I wait for 2 seconds
And I enter text in "post body field inside posts editor"
And I wait for 4 seconds
And I click "Publish button inside posts editor"
And I wait for 2 seconds
And I click "Right now dropdown inside posts publish"
And I wait for 2 seconds
And I click "Schedule button inside posts publish"
And I wait for 3 seconds
And I click "Continue button after posts editor"
And I wait for 3 seconds
And I click "Publish Post button after posts editor"
And I wait for 3 seconds
And I click "Back to Editor button inside posts publish"
And I wait for 2 seconds
And I click "Back to Posts button inside posts editor"

##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
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

And I click "posts link"
And I wait for 2 seconds
And I click "New Post button inside posts module"
And I wait for 2 seconds
And I enter text in "post title field inside posts editor"
And I wait for 2 seconds
And I enter text in "post body field inside posts editor"
And I wait for 4 seconds
And I click "Publish button inside posts editor"
And I wait for 2 seconds
And I click "Right now dropdown inside posts publish"
And I wait for 2 seconds
And I click "Schedule button inside posts publish"
And I wait for 3 seconds
And I click "Continue button after posts editor"
And I wait for 3 seconds
And I click "Publish Post button after posts editor"
And I wait for 3 seconds
And I click "Back to Posts button inside posts publish"
And I wait for 2 seconds
And I click "Back to Posts button inside posts editor"
And I wait for 2 seconds
And I click "Scheduled link in dashboard"
And I wait for 2 seconds
And I click "First post inside Scheduled module"
And I wait for 2 seconds
And I click "Unschedule button inside Scheduled module"
And I wait for 2 seconds
And I click "Convert to Draft button inside Scheduled module"
And I wait for 2 seconds
And I click "Back to Posts button inside posts editor"
#
##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End



############################################################################
########## Escenario 9: Como usuario deseo eliminar un post publicado ######
############################################################################
@user209 @web
Scenario: Como usuario deseo crear una nueva pagina
Given  I navigate to page "http://localhost:2368/ghost/#/signin"


#Start Ghost-Login
And I wait for 15 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login
And I click "posts link"
And I wait for 2 seconds
And I click "New Post button inside posts module"
And I wait for 2 seconds
And I enter text in "post title field inside posts editor"
And I wait for 2 seconds
And I enter text in "post body field inside posts editor"
And I wait for 4 seconds
And I click "Publish button inside posts editor"
And I wait for 3 seconds
And I click "Continue button after posts editor"
And I wait for 3 seconds
And I click "Publish Post button after posts editor"
And I wait for 3 seconds
And I click "Back to Editor button inside posts publish"
And I wait for 2 seconds
And I click "Back to Posts button inside posts editor"
And I wait for 2 seconds
And I click "Published link"
And I wait for 2 seconds
And I click "First published post inside published module"
And I wait for 2 seconds
And I click "Edit post button inside published module"
And I wait for 2 seconds
And I click "Side menu button inside posts editor"
And I wait for 2 seconds
And I click "Delete post button inside posts editor"
And I wait for 2 seconds
And I click "Delete confirmation button inside posts editor"
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End