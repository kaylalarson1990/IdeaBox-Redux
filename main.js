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
var downvoteBtn = document.querySelector("#downvote-icon");
var upVoteBtn = document.querySelector("#upvote-icon");
var ideaCardHeader = document.querySelector(".idea-card-header")
var starBtn = document.querySelector("#star-icon")
/*------------ localStorage -------------*/



//Idea Array//
var ideaArray = JSON.parse(localStorage.getItem("ideasSaved")) || [];





/*------------ Input Var -------------*/

/*------------- Output Var ------------*/

/*------------- Buttons --------------*/ 

/*----------- HTML Elements ----------*/ 

/*------------- Global Variables ---------*/

/*------------- Event Listeners ----------*/


ideaContainer.addEventListener("click", removeCard); 
saveBtn.addEventListener("click", saveInput);
titleInput.addEventListener("keyup", enableBtn);
// starBtn.addEventListener("click", starIdea)
// downVoteBtn.addEventListener("click", );
// upVoteBtn.addEventListener("click", );



//search event listener
// searchInput.addEventListener("keyup", searchForIdeas(ideaArray, searchInput.value));
 

if(ideaArray != []) {
	pageRefresh(ideaArray);
}

/*---------------- Functions ------------*/
// function upVoteQuality() {

// };

// function downVoteQuality() {

// };

// function starIdea() {

// };


function saveInput() {
	storeInput();
	var item = ideaArray[ideaArray.length - 1]
	createNewIdea(item);
  clearInputs();
}

function toggleStar() {
  if (e.target.id ="#star.icon") {
    ideaCardHeader.classList.add()
  }
}


function removeCard(e) {
  if(e.target.className === "icons__card--remove") {
    e.target.parentElement.parentElement.remove();
  }

  var targetId = JSON.parse(e.target.parentElement.parentElement.dataset.id);
  var parsedItems = JSON.parse(localStorage.getItem('ideasSaved'));
	var itemIndex = parsedItems.findIndex(function(idea) {
		 return idea.id === targetId;
	});

   parsedItems.splice(itemIndex, 1);

  localStorage.clear();
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));

}


function storeInput(id, title, body) {
	var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value);
	ideaArray.push(newIdea) 
	var stringified = JSON.stringify(newIdea);
	newIdea.saveToStorage(ideaArray);
}

function createNewIdea(idea) {
	ideaPlaceholder.classList.add('hidden');
  // var newTitle = titleInput.value;
  // console.log(idea.title);
  // var newBody = bodyInput.value;
  // console.log(idea.body);

  ideaContainer.innerHTML = 
      `<figure class="idea-card" id="idea-card" contenteditable = "true" data-id="${idea.id}"><header class="idea-card-header">
        <input type="image" src="images/star.svg" class="icons__card--star" id="star-icon"/>
        <input type="image" src="images/delete.svg" class="icons__card--remove" id="close-icon"/>
      </header>
        <h2 id="card-title" contenteditable = "true">${idea.title}</h2>
        <p class="idea-card-paragraph" id="card-paragraph" contenteditable = "true">${idea.body}</p>
      <div class="idea-card-footer">

      <input type="image" src="images/upvote.svg" class="icons__card--upvote" id="upvote-icon" />
          <p>Quality:<span class="quality" id="quality-type">Swill</span></p>
          <input type="image" src="images/downvote.svg"
          class="icons__card--downvote" id="downvote-icon"/>
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

