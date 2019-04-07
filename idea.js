class Idea {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
  saveToStorage() {
        var stringified = JSON.stringify(ideaArray);
        localStorage.setItem("ideasSaved", stringified);
      }

  deleteFromStorage(index) {
    // ideaArray.splice(findIndex, 1);
    // this.saveToStorage(ideaArray);

  }

 	updateIdea(title, body) {
    
 	}

 	updateQuality() {
 		
 	}

 }

