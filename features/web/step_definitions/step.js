const { faker } = require("@faker-js/faker");
const { Given, When, Then } = require('@cucumber/cucumber');
const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');

const { Login } = require('./pages_object/login.js');
const { Member } = require('./pages_object/Member');
const { Home } = require('./pages_object/Home');
const { UserData } = require('./pages_object/userData');
const { Tags } = require('./pages_object/Tags');
const { ReadFile } = require('./pages_object/readField');
const { YourProfile } = require('./pages_object/YourProfile');
const { ChangeTitleApp } = require('./pages_object/ChangeTitleApp');


const memberFrm = new Member(faker.internet.exampleEmail());
const loginFrm = new Login("Incio");
const homeFrm = new Home();
const userData = new UserData();
const tags = new Tags();
const readFile = new ReadFile();
const yourProfileFRM = new YourProfile();
const changeTitleApp = new ChangeTitleApp();


var inputText = "";
var inputTitle = "";


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

//Init-Profile
When('I enter name profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtNameYourProfile);
    return await element.setValue(faker.name.fullName());
});

When('I enter slug profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtSlug);
    return await element.setValue(faker.music.songName());
});



When('I enter location profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtLocation);
    return await element.setValue(faker.address.cityName());
});


When('I enter web site profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtWebSite);
    return await element.setValue(faker.internet.url());
});


When('I enter facebook profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtFacebook);
    let facebook = "https://www.facebook.com/" + faker.name.firstName();
    return await element.setValue(facebook);
});

When('I enter twiter profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtTwitter);
    let twitter = "https://www.twitter.com/" + faker.name.firstName();
    return await element.setValue(twitter);
});

When('I enter bio profile', async function () {
    let element = await this.driver.$(yourProfileFRM.txtArea);
    return await element.setValue(faker.lorem.sentence());
});


When('I click save your profile', async function () {
    let element = await this.driver.$(yourProfileFRM.btnSaveYourProfile);
    return await element.click();
}
);


When('I enter old password', async function () {
    let element = await this.driver.$(yourProfileFRM.txtOldPassword);
    return await element.setValue(userData.passwordAdmin);
}
);


When('I enter new password', async function () {
    let element = await this.driver.$(yourProfileFRM.txtNewPasword);
    return await element.setValue(userData.passwordChange);
}
);


When('I enter verify password', async function () {
    let element = await this.driver.$(yourProfileFRM.txtVerifyPassword);
    return await element.setValue(userData.passwordChange);
}
);

When('I click change password', async function () {
    let element = await this.driver.$(yourProfileFRM.btnChangePassword);
    return await element.click();
}
);


When('I enter new password sign in', async function () {
    let element = await this.driver.$(loginFrm.txtPassword);
    return await element.setValue(userData.passwordChange);
});

When('I close toad change password', async function () {
    let element = await this.driver.$(yourProfileFRM.btnCloseToad);
    return await element.click();
}
);


/// For return  old password



When('I enter old password-return', async function () {
    let element = await this.driver.$(yourProfileFRM.txtOldPassword);
    return await element.setValue(userData.passwordChange);
}
);


When('I enter new password-return', async function () {
    let element = await this.driver.$(yourProfileFRM.txtNewPasword);
    return await element.setValue(userData.passwordAdmin);
}
);


When('I enter verify password-return', async function () {
    let element = await this.driver.$(yourProfileFRM.txtVerifyPassword);
    return await element.setValue(userData.passwordAdmin);
}
);





/// end

//End-Profile

// Home-Dashboard
//Init Skin App
When('I change skin app', async function () {
    let element = await this.driver.$(homeFrm.btnChangeSkin);
    return await element.click();
}
);

//End Skin App

///

//Init change Title app

When('I click button settings', async function () {
    let element = await this.driver.$(homeFrm.btnSettings);
    return await element.click();
}
);
When('I click button general', async function () {
    let element = await this.driver.$(changeTitleApp.btnGeneral);
    return await element.click();
}
);
When('I click button expand title', async function () {
    let element = await this.driver.$(changeTitleApp.btnExpand);
    return await element.click();
}
);

When('I enter title app', async function () {
    let element = await this.driver.$(changeTitleApp.txtTitle);
    return await element.setValue(faker.name.jobTitle());
});


When('I enter description app', async function () {
    let element = await this.driver.$(changeTitleApp.txtDescription);
    return await element.setValue(faker.lorem.sentence());
});

When('I click button save title', async function () {
    let element = await this.driver.$(changeTitleApp.btnSave);
    return await element.click();
}
);






//End change Title app


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


//Click Generic Method start
When('I click {string}', async function (item) {
    let elementPath = readFile.getElement(item);
    let element = await this.driver.$(elementPath);
    return await element.click();
});
//Click Generic Method end
//Input text Generic Method start
When('I enter text in {string}', async function (item) {
    let elementPath = readFile.getElement(item);
    let element = await this.driver.$(elementPath);
    inputText = faker.lorem.sentence();
    if (item.includes('title')) inputTitle = inputText;
    return await element.setValue(inputText);
});
//Input text Generic Method End
When('I search for results {string}', async function (item) {
    let elementPath = readFile.getElement(item);
    let element = await this.driver.$(elementPath);
    return await element.setValue(inputTitle);
});
