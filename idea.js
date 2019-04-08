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

 	updateQuality() {

    ///global array of Quality 
}
}
// as written cant take stringified objects and apply Idea methods to them, need to rewrite to be able to use class Idea methods. 

// parse things to global var, pull anon objects from local storage, make into class Idea so that other class Idea methods are able to be used. 


// this.quality = quality || 0;

    /* adding cards set to false / targeting false set to true , event click btn filter starred ideas , using a boolean to determine if starred or false , have a function that changes to free*/