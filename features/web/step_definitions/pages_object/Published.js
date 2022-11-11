class Published{

    constructor(){
    this.publishedLink = "/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a"; 
    this.selectedPost = "/html/body/div[2]/div/main/section/section/ol/li[1]/a[1]";
    this.editPost = "/html/body/div[2]/div/main/section/div[1]/header/div/div[2]/a";
    this.postTitle = "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/textarea";
    this.postBody = "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/article/div[1]/div";
    this.updateButton = "/html/body/div[2]/div/main/div[1]/section/header/section/button[1]";
    this.backToPosts = "/html/body/div[2]/div/main/div[1]/section/header/div/a";
    
    this.getElementPath = (item) => {
        switch (item){
            case "Published":
                return this.publishedLink;
            case "SelectedPost":
                return this.selectedPost;
            case "EditPost":
                return this.editPost;
            case "PostTitle":
                return this.postTitle;
            case "PostBody":
                return this.postBody;
            case "UpdatePost":
                return this.updateButton;
            case "BackToPost":
                return this.backToPosts;
        }
    };
};

}
module.exports = {
    Published
    };