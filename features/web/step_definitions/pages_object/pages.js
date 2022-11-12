class Pages{

    constructor(){
    const pagesJson = require('./pages.json');
    const stringData = JSON.stringify(pagesJson);
    const jsonData = JSON.parse(stringData);
    
    this.getElementPath = (item) => {
        switch (true) {
            case item.includes('pages link'):
                return jsonData['pages']['pagesLink'];  
            case item.includes('new page'):
                return jsonData['pages']['newPage']; 
            case item.includes('title'):
                return jsonData['pages']['pageTitle'];
            case item.includes('body'):
                return jsonData['pages']['pageBody'];
            case item.includes('publish button'):
                return jsonData['pages']['pagePublish'];
            case item.includes('continue'):
                return jsonData['pages']['continuePublish'];
            case item.includes('publish page'):
                return jsonData['pages']['publishButton'];
            case item.includes('back to editor'):
                return jsonData['pages']['backToEditor'];
            case item.includes('back to pages'):
                return jsonData['pages']['backToPages'];
            case item.includes('right now'):
                return jsonData['pages']['scheduledTime'];
            case item.includes('schedule button'):
                return jsonData['pages']['scheduleButton'];
                
                
        }
    };
};

}
module.exports = {
    Pages
    };