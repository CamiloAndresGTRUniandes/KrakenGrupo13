const { faker } = require("@faker-js/faker");
const { Given, When, Then } = require('@cucumber/cucumber');
const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const { Login } = require('./pages_object/login.js');
const { Member } = require('./pages_object/Member');
const { Home } = require('./pages_object/Home');
const { UserData } = require('./pages_object/userData');
const { Tags } = require('./pages_object/Tags');
const { Posts } = require('./pages_object/Posts');
const {Published}= require('./pages_object/Published');
const {Scheduled} = require('./pages_object/scheduled');
const {Pages} = require('./pages_object/pages');

const memberFrm = new Member(faker.internet.exampleEmail());
const loginFrm = new Login("Incio");
const homeFrm = new Home();
const userData = new UserData();
const tags = new Tags();
const posts = new Posts();
const published = new Published();
const scheduled = new Scheduled();
const pages = new Pages();

var inputText = "";


When('I enter email sign in', async function () {
    let element = await this.driver.$(loginFrm.txtEmail);
    return await element.setValue(userData.emailAdmin);
});
When('I enter password', async function () {
    let element = await this.driver.$(loginFrm.txtPassword);

    return await element.setValue(userData.passwordAdmin);
});
When('I click next', async function () {
    let element = await this.driver.$(loginFrm.btnLogin);
    return await element.click();
});
///Functions' members

When('I click member', async function () {
    let element = await this.driver.$(homeFrm.member);
    return await element.click();
}
);


When('I click new member', async function () {
    let element = await this.driver.$("a[href='#/members/new/']");
    return await element.click();
}
);



When('I enter name member', async function () {
    let element = await this.driver.$(memberFrm.txtName);
    memberFrm.setNewName(faker.name.fullName());
    return await element.setValue(memberFrm.name);
});

When('I enter email member', async function () {
    this.email = faker.internet.exampleEmail();
    let element = await this.driver.$(memberFrm.txtEmail);
    return await element.setValue(memberFrm.email);
});

When('I enter note member', async function () {
    let element = await this.driver.$(memberFrm.txtMemberNote);
    return await element.setValue(faker.lorem.paragraph());
});


When('I save new member', async function () {
    let element = await this.driver.$(memberFrm.btnSave);
    return await element.click();
});
When('I save member', async function () {
    let element = await this.driver.$(memberFrm.btnSave);
    return await element.click();
});


When('I selected first member', async function () {
    let element = await this.driver.$('table');
    return await element.click();
});

When('I search by email member', async function () {
    let element = await this.driver.$(memberFrm.txtSearch);
    return await element.setValue(memberFrm.email);
});

When('I search by name member', async function () {
    let element = await this.driver.$(memberFrm.txtSearch);
    return await element.setValue(memberFrm.email);
});


When('I select setting', async function () {
    let element = await this.driver.$(memberFrm.iconSettings);
    return await element.click();

}
);

When('I select button delete', async function () {
    let element = await this.driver.$(memberFrm.btnDelete);
    return await element.click();

}
);
When('I Click btn ConfirmDelete', async function () {
    let element = await this.driver.$(memberFrm.btnConfirmDelete);
    return await element.click();

}
);

///Tags

When('I click new tag', async function () {
    let element = await this.driver.$(tags.btnNewTag);
    return await element.click();
}
);
When('I enter name tag', async function () {
    let element = await this.driver.$(tags.txtNameTag);
    tags.setNewNameTag(faker.music.songName());
    return await element.setValue(tags.nameTag);
});

When('I enter color tag', async function () {
    let element = await this.driver.$(tags.txtColor);
    tags.color = "FF1347"
    return await element.setValue(tags.color);
});

When('I enter description tag', async function () {
    let element = await this.driver.$(tags.txtDescription);
    tags.description = faker.lorem.paragraph();
    return await element.setValue(tags.description);
});

When('I click btnMetada tag', async function () {
    let element = await this.driver.$(tags.btnMetada);
    return await element.click();
}
);

When('I enter metadata title tag', async function () {
    let element = await this.driver.$(tags.txtMetadataTitle);
    tags.metadataTitle = faker.company.name();
    return await element.setValue(tags.metadataTitle);
});

When('I enter description metadata tag', async function () {
    let element = await this.driver.$(tags.txtMetadataTitle);
    tags.metaDataDescription = faker.lorem.sentence();
    return await element.setValue(tags.metaDataDescription);
});


When('I enter url metadata tag', async function () {
    let element = await this.driver.$(tags.txtMetaDataURL);
    tags.metaDataURL = faker.internet.url();
    return await element.setValue(tags.metaDataURL);
});

When('I click btnSaveTag tag', async function () {
    let element = await this.driver.$(tags.btnSaveTag);
    return await element.click();
}
);

When('I select the fist tag', async function () {
    let element = await this.driver.$(tags.selectFirstTag);
    return await element.click();
}
);

When('I delete the tag', async function () {
    let element = await this.driver.$(tags.btnDeleteTag);
    return await element.click();
}
);

When('I click confirm delete the tag', async function () {
    let element = await this.driver.$(tags.btnConfirmDeleteTag);
    return await element.click();
}
);






///End-Tags

// Home-Dashboard

When('I click tags', async function () {
    let element = await this.driver.$(homeFrm.tag);
    return await element.click();
}
);

When('I click perfil', async function () {
    let element = await this.driver.$('.gh-user-avatar.relative');
    return await element.click();
}
);

When('I click your profile', async function () {

    let element = await this.driver.$(this.aYourProfile);
    return await element.click();
}
);

When('I close my session', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    return await element.click();
}
);


When('I say hello world', async function () {
    console.log("Hello");
}
);

//Start-Posts
When('I click element in posts {string}', async function (item) {
    let elementPath = posts.getElementPath(item);
    let element = await this.driver.$(elementPath);
    return await element.click();
}
);
When('I enter posts text in {string}', async function (item) {
    let elementPath = posts.getElementPath(item);
    let element = await this.driver.$(elementPath);
    inputText = faker.lorem.sentence();
    return await element.setValue(inputText);
});
//End-Posts
//Start-EditPost
When('I click element in published {string}', async function (item) {
    let elementPath = published.getElementPath(item);
    let element = await this.driver.$(elementPath);
    return await element.click();
}
);
When('I enter published text in {string}', async function (item) {
    let elementPath = published.getElementPath(item);
    let element = await this.driver.$(elementPath);
    inputText = faker.lorem.sentence();
    return await element.setValue(inputText);
});
//End-EditPost
//Start-DeleteScheduled
When('I click element in scheduled {string}', async function (item) {
    let elementPath = scheduled.getElementPath(item);
    let element = await this.driver.$(elementPath);
    return await element.click();
}
);
When('I enter scheduled text in {string}', async function (item) {
    let elementPath = scheduled.getElementPath(item);
    let element = await this.driver.$(elementPath);
    inputText = faker.lorem.sentence();
    return await element.setValue(inputText);
});
//End-DeleteScheduled
//Start-Pages
When('I click element in pages {string}', async function (item) {
    let elementPath = pages.getElementPath(item);
    let element = await this.driver.$(elementPath);
    return await element.click();
}
);
When('I enter pages text in {string}', async function (item) {
    let elementPath = pages.getElementPath(item);
    let element = await this.driver.$(elementPath);
    inputText = faker.lorem.sentence();
    return await element.setValue(inputText);
});
//End-Pages
