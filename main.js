/*------------ Query Selector ---------*/ 
var showStarredIdeas = document.querySelector("#starred-ideas-btn");
var swillFilter = document.querySelector("#swill-filter");
var plausibleFilter = document.querySelector("#plausible-filter");
var geniusFilter = document.querySelector("#genius-filter");
var newQualityInput = document.querySelector("#new-quality-input");
var addQualityBtn = document.querySelector("#add-quality-btn");
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveBtn = document.querySelector("#btn-save");
var searchBtn = document.querySelector("#btn-search");
var searchInput = document.querySelector("#search-input");
var ideaCard = document.querySelector("#idea-card");
var starIcon = document.querySelector("#star-icon");
var closeIcon = document.querySelector(".idea-card-icons");
var upvoteIcon = document.querySelector("#upvote-icon");
var downvoteIcon = document.querySelector("#downvote-icon");
var cardTitle = document.querySelector("#card-title");
var cardPara = document.querySelector("#card-paragraph");
var qualityType = document.querySelector("#quality-type");
var main = document.querySelector("#main");
var ideaContainer = document.querySelector(".bottom-section")
var ideaPlaceholder = document.querySelector(".idea-placeholder");

/*------------ localStorage -------------*/



//Idea Array//
var ideaArray = JSON.parse(localStorage.getItem("ideasSaved")) || [];





/*------------ Input Var ----`---------*/

/*------------- Output Var ------------*/

/*------------- Buttons --------------*/ 

/*----------- HTML Elements ----------*/ 

/*------------- Global Variables ---------*/

/*------------- Event Listeners ----------*/


ideaContainer.addEventListener("click", removeCard);
saveBtn.addEventListener("click", saveInput);
titleInput.addEventListener("keyup", enableBtn);

//search event listener
// searchInput.addEventListener("keyup", searchForIdeas(ideaArray, searchInput.value));

if(ideaArray != []) {
	pageRefresh(ideaArray);
}


/*---------------- Functions ------------*/
function saveInput() {
	storeInput();
	var item = ideaArray[ideaArray.length - 1]
	createNewIdea(item);
  clearInputs();
}

function removeCard(e) {
	var targetId = e.target.parentNode.parentNode.getAttribute("data-id");
	var parsedId = parseInt(targetId);
	console.log(targetId);
	// debugger;
	var findId = ideaArray.find(function(idea) {
		return idea.id === parsedId;
	});
	var findIndex = ideaArray.indexOf(findId);
	console.log(findId);
	findId.deleteFromStorage(findIndex);
	if(e.target.className === "idea-card-icons") {
    e.target.parentElement.parentElement.remove();
  }
	
}

function storeInput(id, title, body) {
	var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value);
	ideaArray.push(newIdea) 
	var stringified = JSON.stringify(newIdea);
	newIdea.saveToStorage(ideaArray);
}


function createNewIdea(idea) {
	ideaPlaceholder.classList.add('hidden');
  ideaContainer.innerHTML = 
      `<figure class="idea-card" id="idea-card" contenteditable = "true" data-id = "${idea.id}"><header class="idea-card-header">
        <img src="images/star.svg" class="idea-card-icons" id="star-icon"/>
        <img src="images/delete.svg" class="idea-card-icons" id="close-icon"/>
      </header>
        <h2 id="card-title" contenteditable = "true">${idea.title}</h2>
        <p class="idea-card-paragraph" id="card-paragraph" contenteditable = "true">${idea.body}</p>
      <div class="idea-card-footer">
          <img src="images/upvote.svg" class="upvote-icon idea-card-icons" id="upvote-icon"/>
          <p>Quality:<span class="quality" id="quality-type">Swill</span></p>
          <img src="images/downvote.svg" class="downvote-icon idea-card-icons" id="downvote-icon"/>
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


function pageRefresh(ideaArray) {
ideaArray.forEach(function(item) {
	createNewIdea(item);
	})
}

//search function

// function searchForIdeas(array, query) {
// 	return ideaArray.filter(function(el) {
// 		return el.toLowerCase().indexOf(query.toLowerCase()) > -1
// 	})
// }

