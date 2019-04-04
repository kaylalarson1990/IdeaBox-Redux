class Idea {
  constructor(id, title, body,star) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false; 
    
  }
  saveToStorage() {
        var stringified = JSON.stringify(ideaArray);
        localStorage.setItem("ideasSaved", stringified);
      }

  deleteFromStorage(index) {
    ideaArray.splice(index, 1);
    this.saveToStorage(ideaArray);

  }

 	updateIdea() {

 

 	}

 	updateQuality() {


 		/*event target click,  up and down buttons on DOM idea card, send updated Quality to ID  innerStorage, inner- Swill - Genius - Pluasuable - html, */
 	}

 }

// this.quality = quality || 0;

    /* adding cards set to false / targeting false set to true , event click btn filter starred ideas , using a boolean to determine if starred or false , have a function that changes to free*/