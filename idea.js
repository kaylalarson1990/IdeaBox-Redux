class Idea {
  constructor(id, title, body,star,quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false; 
    this.quality = quality || 0; 
    
  }

saveToStorage() {
        var stringified = JSON.stringify(ideaArray);
        localStorage.setItem("ideasSaved", stringified);
  }


deleteFromStorage(targetId) {
  var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));
  var itemIndex = parsedItems.findIndex(function(idea) {
    console.log(idea.id)
     return idea.id === targetId;
  });
  parsedItems.splice(itemIndex, 1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
}


//on page reload parsing all objects back into class Idea 
 updateStar() {
 		this.star = !this.star;
		if (this.star == true) {
			this.starImg = "images/star-active.svg"
		} else {
			this.starImg = "images/star.svg"
		}
 }

updateIdea(title, body) {
  
 }

updateBody(targetId) {
    
  }


  updateTitle(targetId) {
    
  }

 	updateQuality(qual) {
 			if (qual == 'upvote') {
		this.quality = Math.min(this.quality + 1, 2)
		} else {
		this.quality = Math.max(this.quality - 1, 0)
		}
 	}
 	
 }