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
        localStorage.setItem("ideasSaved", stringified);
  }

  deleteFromStorage(targetId) {
   
    var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));
    var itemIndex = parsedItems.findIndex(function(idea) {
    return idea.id === targetId;
  })
  parsedItems.splice(itemIndex, 1);
  ideaArray.splice(itemIndex, 1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
  }

updateQuality(targetId) {
  var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));

  var itemIndex = parsedItems.findIndex(function (idea) {
  return idea.id === targetId;
  });
  parsedItems.splice(itemIndex, 1);
  ideaArray.splice(itemIndex,1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
  ;
};
}
