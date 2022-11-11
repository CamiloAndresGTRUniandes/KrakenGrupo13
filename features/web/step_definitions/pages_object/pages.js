class Pages{

    constructor(){
    this.pagesLink = "/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[2]/a"; 
    this.newPage = "/html/body/div[2]/div/main/section/div/header/section/a";
    this.pageTitle = "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/textarea";
    this.pageBody = "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/article/div[1]/div";
    this.pagePubhish = "/html/body/div[2]/div/main/div[1]/section/header/section/button[2]/span";
    this.continuePublish = "/html/body/div[4]/div/div/div/div[3]/button";
    this.publishButton = "/html/body/div[4]/div/div/div/div[2]/button[1]";
    this.backToEditor = "/html/body/div[4]/div/div/div/p/button";
    this.backToPages = "/html/body/div[2]/div/main/div[1]/section/header/div/a";

    this.convertToDraft = "/html/body/div[4]/div/div/div/div[2]/p/button";
    this.backToPosts = "/html/body/div[2]/div/main/div[1]/section/header/div/a";
    this.selectScheduled = "/html/body/div[2]/div/main/section/section/ol/li[1]/a[1]";
    
    this.getElementPath = (item) => {
        switch (item){
            case "Pages":
                return this.pagesLink;
            case "NewPage":
                return this.newPage;
            case "PageTitle":
                return this.pageTitle;
            case "PageBody":
                return this.pageBody;
            case "PagePublish":
                return this.pagePubhish;
            case "ContinuePublish":
                return this.continuePublish;
            case "Publish":
                return this.publishButton;
            case "BackToEditor":
                return this.backToEditor;
            case "BackToPages":
                return this.backToPosts;
        }
    };
};

}
module.exports = {
    Pages
    };