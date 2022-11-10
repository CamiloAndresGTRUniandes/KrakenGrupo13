class Member {
constructor(email) {
this.txtName='input[name="name"]';
this.txtEmail='input[name="email"]';
this.txtMemberNote='#member-note';
this.btnSave='button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]';
this.txtSearch='input[placeholder="Search members..."]';
this.aYourProfile='/html/body/div[1]/div/ul/li[4]/a';
this.email=email;
}
}
module.exports = {
Member
};
