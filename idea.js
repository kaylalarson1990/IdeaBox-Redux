class Idea {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
  saveToStorage() {
        var stringified = JSON.stringify(ideaArray);
        localStorage.setItem("ideasSaved", stringified)
      }
  deleteFromStorage() {
    

  }

 	updateIdea() {

 	}

 	updateQuality() {
 		
 	}

 }

