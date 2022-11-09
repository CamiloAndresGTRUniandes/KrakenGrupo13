const {faker}= require("@faker-js/faker");  
const { Given, When, Then } = require('@cucumber/cucumber');
const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const {Login} = require('./pages_object/login.js');
const {Member} = require('./pages_object/Member');

const memberFrm= new Member();
const loginFrm= new Login("Incio");



When('I enter email {string}', async function (email){
let element = await this.driver.$(loginFrm.txtEmail);
return await element.setValue(email);
});
When('I enter password', async function () {
let element = await this.driver.$(loginFrm.txtPassword);

return await element.setValue('YonathanBr1983*');
});
When('I click next', async function() {
let element = await this.driver.$(loginFrm.btnLogin);
return await element.click();
});



///Functions' members

When('I click member',async function(){
let element = await this.driver.$("li.relative > a[href='#/members/']");
return await element.click();
}
);


When('I click new member',async function(){
let element = await this.driver.$("a[href='#/members/new/']");
return await element.click();
}
);
                        


When('I enter name member', async function () {
let element = await this.driver.$(memberFrm.txtName);
return await element.setValue(faker.name.fullName());
});

When('I enter email member {string}', async function (email){
let element = await this.driver.$(memberFrm.txtEmail);
return await element.setValue(email);
});

When('I enter note member', async function (){
let element = await this.driver.$(memberFrm.txtMemberNote);
return await element.setValue(faker.lorem.paragraph());
});


When ('I save new member', async function (){
let element = await this.driver.$(memberFrm.btnSave);
return await element.click();
});

///End Functions'  member 

When ('I say hello world', async function()
{
 console.log( "Hello");
}
);