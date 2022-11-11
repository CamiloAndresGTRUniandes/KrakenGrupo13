class Scheduled{

    constructor(){
    this.scheduledLink = "/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[2]/a"; 
    this.unSchedule = "/html/body/div[2]/div/main/div[1]/section/header/section/button[2]";
    this.convertToDraft = "/html/body/div[4]/div/div/div/div[2]/p/button";
    this.backToPosts = "/html/body/div[2]/div/main/div[1]/section/header/div/a";
    this.selectScheduled = "/html/body/div[2]/div/main/section/section/ol/li[1]/a[1]";
    
    this.getElementPath = (item) => {
        switch (item){
            case "Scheduled":
                return this.scheduledLink;
            case "Unschedule":
                return this.unSchedule;
            case "ConvertToDraft":
                return this.convertToDraft;
            case "BackToPost":
                return this.backToPosts;
            case "SelectScheduled":
                return this.selectScheduled;
        }
    };
};

}
module.exports = {
    Scheduled
    };