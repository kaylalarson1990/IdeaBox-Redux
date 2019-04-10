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
  // var ideaToDelete = new Idea(findId.id, findId.title, findId.body);
  // findId.deleteFromStorage(findIndex);
  var itemIndex = parsedItems.findIndex(function(idea) {
     return idea.id === targetId;
  });
  parsedItems.splice(itemIndex, 1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
  ;
}


//on page reload parsing all objects back into class Idea 
 updateStar(targetStar) {
  var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));
  var itemIndex = parsedItems.findIndex(function(idea) {
     return idea.id === targetId;
  });

   parsedItems.splice(itemIndex, 1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
// pass the method in as an argument in the function 
 };

 	updateIdea(title, body) {



    
 	}

 	  upVote() {
    var currentQualityIndex = quality.indexOf(this.quality)
    if (currentQualityIndex < quality.length -1) {
    var newQualityIndex = currentQualityIndex + 1
    this.quality = quality[newQualityIndex]
  }
  }
  downVote() {
    var currentQualityIndex = quality.indexOf(this.quality)
    if (currentQualityIndex > 0) {
    var newQualityIndex = currentQualityIndex - 1;
    this.quality = quality[newQualityIndex]
    }
  }

 	updateQuality(qual) {
 			if (qual == 'upvote') {
		this.quality = Math.min(this.quality + 1, 2)
		} else {
		this.quality = Math.max(this.quality - 1, 0)
		}
 	}
 	
 }