class Idea {
  constructor(id, title, body,quality,star) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.quality = quality || 0
    this.star = star || false
    
  }
  saveToStorage() {
        var stringified = JSON.stringify(ideaArray);
        console.log(ideaArray)
        localStorage.setItem("ideasSaved", stringified);
  }

  deleteFromStorage(targetId) {
    var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));
    var itemIndex = parsedItems.findIndex(function(idea) {
     return idea.id === targetId;
  });
   parsedItems.splice(itemIndex, 1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
  ;
    console.log('stuff')
  }
    // ideaArray.splice(findIndex, 1);
    // this.saveToStorage(ideaArray);

 updateQuality(targetId) {
   var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));

   var itemIndex = parsedItems.findIndex(function (idea) {
     return idea.id === targetId;
   });
   parsedItems.splice(itemIndex, 1);
   localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
   ;
 };
}
//  	updateIdea() {
//  	}
//  	updateQuality() {
    


    /* adding cards set to false / targeting false set to true , event click btn filter starred ideas , using a boolean to determine if starred or false , have a function that changes to free*/