class Posts {
    constructor() {
        const postJson = require('./posts.json');
        const stringData = JSON.stringify(postJson);
        const jsonData = JSON.parse(stringData);

        this.getElementPath = (item) => {
            switch (true) {
                case item.includes('posts link'):
                    return jsonData['posts']['postLink'];  
                case item.includes('new post'):
                    return jsonData['posts']['newPost']; 
                case item.includes('title'):
                    return jsonData['posts']['postTitle'];
                case item.includes('body'):
                    return jsonData['posts']['postBody'];
                case item.includes('publish button'):
                    return jsonData['posts']['postPublish'];
                case item.includes('continue'):
                    return jsonData['posts']['continuePublish'];
                case item.includes('publish post'):
                    return jsonData['posts']['publishButton'];
                case item.includes('back to editor'):
                    return jsonData['posts']['backToEditor'];
                case item.includes('back to posts'):
                    return jsonData['posts']['backToPosts'];
                case item.includes('right now'):
                    return jsonData['posts']['scheduledTime'];
                case item.includes('schedule button'):
                    return jsonData['posts']['scheduleButton'];
                    
                    
            }
        }
    }
}
module.exports = {
    Posts
};
// class Posts{

//     constructor(){
//     this.postsLink = "/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]";
//     this.newPost = "/html/body/div[2]/div/main/section/div/header/section/a";
//     this.postTitle = "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/textarea";
//     this.postBody = "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/article/div[1]/div";
//     this.postPubhish = "/html/body/div[2]/div/main/div[1]/section/header/section/button[2]/span";
//     this.continuePublish = "/html/body/div[4]/div/div/div/div[3]/button";
//     this.publishButton = "/html/body/div[4]/div/div/div/div[2]/button[1]";
//     this.backToEditor = "/html/body/div[4]/div/div/div/p/button";
//     this.backToPosts = "/html/body/div[2]/div/main/div[1]/section/header/div/a";
//     this.scheduledTime = "/html/body/div[4]/div/div/div/div[2]/div[3]/button";
//     this.scheduleButton = "/html/body/div[4]/div/div/div/div[2]/div[3]/div/div/div/fieldset/div[1]/div[2]";
//     this.goToPost = "/html/body/div[4]/div/div/div/a/div/div/div[2]";

//     this.getElementPath = (item) => {
//         switch (item){
//             case "Posts":
//                 return this.postsLink;
//             case "NewPost":
//                 return this.newPost;
//             case "PostTitle":
//                 return this.postTitle;
//             case "PostBody":
//                 return this.postBody;
//             case "PostPublish":
//                 return this.postPubhish;
//             case "ContinuePublish":
//                 return this.continuePublish;
//             case "Publish":
//                 return this.publishButton;
//             case "BackToEditor":
//                 return this.backToEditor;
//             case "BackToPosts":
//                 return this.backToPosts;
//             case "ScheduledTime":
//                 return this.scheduledTime;
//             case "ScheduledButton":
//                 return this.scheduleButton;
//             case "GoToPost":
//                 return this.goToPost;
//         }
//     };
// };

// }
// module.exports = {
//     Posts
//     };