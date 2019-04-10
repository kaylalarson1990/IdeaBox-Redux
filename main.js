  /*------------ Query Selector ---------*/ 
var showStarredIdeas = document.querySelector("#starred-ideas-btn");
// var swillFilter = document.querySelector("#swill-filter");
// var plausibleFilter = document.querySelector("#plausible-filter");
// var geniusFilter = document.querySelector("#genius-filter");
// var newQualityInput = document.querySelector("#new-quality-input");
// var addQualityBtn = document.querySelector("#add-quality-btn");
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveBtn = document.querySelector("#btn-save");
var searchBtn = document.querySelector("#btn-search");
var searchInput = document.querySelector("#search-input");
// var ideaCard = document.querySelector("#idea-card");
// var starIcon = document.querySelector("#star-icon");
var closeIcon = document.querySelector(".idea-card-icons");
var upvoteIcon = document.querySelector("#upvote-icon");
var downvoteIcon = document.querySelector("#downvote-icon");
var cardTitle = document.querySelector("#card-title");
var cardPara = document.querySelector("#card-paragraph");
var qualityType = document.querySelector("#quality-type");

var ideaContainer = document.querySelector(".bottom-section")
var ideaPlaceholder = document.querySelector(".idea-placeholder");
var downvoteBtn = document.querySelector("#downvote-icon");
var upVoteBtn = document.querySelector("#upvote-icon");
var ideaCardHeader = document.querySelector(".idea-card-header")
var starBtn = document.querySelector("#icon--star")
/*------------ localStorage -------------*/



//Idea Array//
var ideaArray = JSON.parse(localStorage.getItem("ideasSaved")) || [];
var qualityArray = ["Quality:Swill", "Quality:Plausiable", "Quality:Genius"]
var postIdeaClass = new Idea()
// var qualityArray = [];
/*------------ Input Var -------------*/
/*------------- Output Var ------------*/

/*------------- Buttons --------------*/ 

/*----------- HTML Elements ----------*/ 

/*------------- Global Variables ---------*/

/*------------- Event Listeners ----------*/


ideaContainer.addEventListener("click", removeCard); 
saveBtn.addEventListener("click", saveInput);
titleInput.addEventListener("keyup", enableBtn);
window.addEventListener("load", pageReload);

ideaContainer.addEventListener("click", starIdea)
// downVoteBtn.addEventListener("click", );
// upVoteBtn.addEventListener("click", );
//search event listener
// searchInput.addEventListener("keyup", searchForIdeas(ideaArray, searchInput.value));
// if(ideaArray != []) {
// 	pageReload(ideaArray);
// }
/*---------------- Functions ------------*/
var makeActive = function(elem){
    elem.classList.toggle("is-active");
}


function saveInput() {
	storeInput();
	var item = ideaArray[ideaArray.length - 1]
	appendCard(item);
  clearInputs();
}

function storeInput(id, title, body,quality,star ) {
  var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value, quality,false);
  ideaArray.push(newIdea) 
  var stringified = JSON.stringify(newIdea);
  newIdea.saveToStorage(ideaArray);
}

// findItem() {

// var parsedItems = parseInt(localStorage.getItem('ideasSaved'));
// var itemIndex = parsedItems.findIndex(function (idea) {
//   return idea.id === targetId;
// });
// };

function removeCard(e) {
  if(e.target.className === "icons__card--remove") {
    e.target.parentElement.parentElement.remove();
    postIdeaClass.deleteFromStorage(targetId)
    var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
  };
}; 

function starIdea (e,idea) {
for(var i = 0; i < ideaArray.length; i++ ) {
  if (ideaArray[i].id === (parseInt(e.target.parentElement.parentElement.id))) {
    ideaArray[i].star = !ideaArray[i].star
   postIdeaClass.saveToStorage(ideaArray[i])
  };
};
   if (e.target.dataset.favorited === "true") {
    e.target.src = "images/star.svg"
     e.target.dataset.favorited = "false"
   };
   else if (e.target.dataset.favorited === "false") {
      e.target.src = "images/star-active.svg"
     e.target.dataset.favorited = "true"
  };
  console.log(typeof e.target.dataset.favorited)
};


// function reinstantiate(i) {
//   var sameIdea = new Idea(ideaArray[i].id, ideaArray[i].title, ideaArray[i].body, ideaArray[i].quality, ideaArray[i].star).push(sameIdea) creating a function to rename as a var to call in each function 
// }


// function quality(e, idea) {
 
//   for (i = 0; i < qualityArray.length; qualityArray++)
//     if (quality.Array[i].id === (parseInt(e.target.parentElement.parentElement.id))) {
//       qualityArray[i].quality++
//       postIdeaClass.saveToStorage(ideaArray[i])
//     }
//   };

// function starIdea(e,idea) {
//   if (e.target.className === "icons__card--star") {
//     e.target.getAttribute("images/star-active.svg")
//   }else{
//     e.target.getAttribute("images/star.svg")
//     postIdeaClass.saveToStorage(targetId)
//     var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
//   }
// }; 

// function targetIdea(){
// ideaContainer.addEventListener("click", function (e) {
//   var findId = e.target.parentElement.parentElement.dataset.id;
//   e.target.className.includes("icons__card--star") ? starIdea(findId) : null;
// });
// }

// function changeStar() {

//   if (targetIdea.star === true) {
//     starIcon.setAttribute('src', 'images/star-active.svg');
//   }
//   if (targetIdea.star === false) {
//     starIcon.setAttribute('src', 'images/star.svg');
//   }
// }

function pageLoad(postIdeaClass) {
console.log(ideaArray)
var idea = [];
var local = JSON.parse(localStorage.getItem("ideasSaved"))
for (i = 0; i < ideaArray.length; idea++) {
var sameIdea = new Idea(ideaArray[i].id, ideaArray[i].title, ideaArray[i].body, ideaArray[i].quality, ideaArray[i].star).push(sameIdea)
console.log(sameIdea)
  };
};

function pageReload() {
  console.log(ideaArray)
  if (ideaArray != []) {
    ideaArray.forEach(function (item) {
     appendCard(item); 
    })
  };
};

function appendCard(idea) {
  console.log(idea)
  ideaPlaceholder.classList.add('hidden')
  // var newTitle = titleInput.value;
  // console.log(idea.title);
  // var newBody = bodyInput.value;
  // console.log(idea.body);

  ideaContainer.innerHTML = 
    `<figure class="idea-card"  contenteditable = "true" data_id=${idea.id} id=${idea.id}><header class="idea-card-header">
        <input type="image" data-favorited =${idea.star}   src=${idea.star === true ? "images/star-active.svg" :  "images/star.svg" } class="icons__card--star" id="icon--star" width=35px  alt="star idea"
          />
        <input type="image" src="images/delete.svg" class="icons__card--remove" width=35px id="close-icon"/>
      </header>
        <h2 id="card-title" contenteditable = "true">${idea.title}</h2>
        <p class="idea-card-paragraph" id="card-paragraph" contenteditable = "true">${idea.body}</p>
      <div class="idea-card-footer">

      <input type="image" src="images/upvote.svg" class="icons__card--upvote" width=35px id="upvote-icon"  />
          <p>Quality:<span class="quality" id="quality-type">Swill</span></p>
          <input type="image" src="images/downvote.svg"
          class="icons__card--downvote" width=35px id="downvote-icon"/>
      </div></figure>
      ` + ideaContainer.innerHTML;
}

function clearInputs() {
	titleInput.value = "";
	bodyInput.value = "";
	saveBtn.classList.add("disabled");
}


function enableBtn() {
	saveBtn.classList.remove("disabled");
}