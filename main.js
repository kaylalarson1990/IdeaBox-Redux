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
var ideaCardHeader = document.querySelector(".idea-card-header");
var starBtn = document.querySelector("#star-icon");
var qualities = ["Swill", "Plausible", "Genius"];
/*------------ localStorage -------------*/

//Idea Array//
var ideaArray = JSON.parse(localStorage.getItem("ideasSaved")) || [];
var postIdeaClass = new Idea();

/*------------- Event Listeners ----------*/

ideaContainer.addEventListener("mouseout", function(e) {
  e.target.className.includes("idea-card-paragraph") ? updateBody(e) : null;
	e.target.className.includes("idea-card-title") ? updateTitle(e) : null;
});

ideaContainer.addEventListener("click", function(e) {
	e.target.className.includes("icons__card--upvote") ? changeQuality(e, 'upvote') : null;
	e.target.className.includes("icons__card--downvote") ? changeQuality(e, 'downvote') : null;
	e.target.className.includes("icons__card--remove") ? removeCard(e) : null;	
	e.target.className.includes("icons__card--star") ? starToggle(e) : null;
});

saveBtn.addEventListener("click", saveInput);
titleInput.addEventListener("keyup", enableBtn);
bodyInput.addEventListener("keyup", enableBtn);

swillFilter.addEventListener("click", function(e) {
  e.target.className.includes("swill") ? filterIdeaByQuality(0): null;
});

plausibleFilter.addEventListener("click", function(e) {
  e.target.className.includes("plausible") ? filterIdeaByQuality(1): null;
});

geniusFilter.addEventListener("click", function(e) {
  e.target.className.includes("genius") ? filterIdeaByQuality(2): null;
});

 searchInput.addEventListener("keyup", function() {
 	searchForIdeas(searchInput.value)});

/*------------- Default Page Actions ----------*/
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

function storeInput(id, title, body, star, starIcon, quality) {
  var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value);
  ideaArray.push(newIdea) 
  var stringified = JSON.stringify(newIdea);
  newIdea.saveToStorage(ideaArray);
}


function updateBody(e) {
    var parsedItems = JSON.parse(localStorage.getItem("ideasSaved"));
    var targetId = JSON.parse(e.target.parentElement.dataset.id);
    for(var i=0; i < parsedItems.length; i++) {
      if(parsedItems[i].id === targetId) {
        var newIdea = parsedItems[i];
        newIdea.body = e.target.textContent;
        parsedItems.splice(i, 1, newIdea);
        localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
    }
  }
}

function updateTitle(e) {
  var parsedItems = JSON.parse(localStorage.getItem("ideasSaved"));
    var targetId = JSON.parse(e.target.parentElement.dataset.id);
    console.log(e);
    for(var i=0; i < parsedItems.length; i++) {
      if(parsedItems[i].id === targetId) {
        var newIdea = parsedItems[i]; //parsedItems[i].updateQuality('upvote')
        newIdea.title = e.target.textContent; 
        parsedItems.splice(i, 1, newIdea);
        localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
    }
  }
}

function changeQuality(e, change) {
  var parsedItems = JSON.parse(localStorage.getItem("ideasSaved"));
  console.log(parsedItems);
  var targetParent = e.target.parentElement.parentElement;
  console.log(targetParent);
  var targetId = JSON.parse(targetParent.dataset.id);
  console.log(targetId);
  for(var i = 0; i < parsedItems.length; i++) {
    if(parsedItems[i].id === targetId) {
      parsedItems[i].updateQuality('upvote')
    }
  }
}

function removeCard(e) {
  e.target.parentElement.parentElement.remove();
  var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
  postIdeaClass.deleteFromStorage(ideaArray);
}; 

function starIdea(e) {
  if (e.target.className === "icons__card-star") {
    e.target.class
  }
  var targetStar = parseInt(e.target.parentElement.parentElement.dataset.id)
  // postIdeaClass.updateStar(targetId)
}

function changeQuality(e, change) {
	var parsedItems = JSON.parse(localStorage.getItem("ideasSaved"));
	var targetId = JSON.parse(e.target.parentElement.parentElement.dataset.id);
	console.log(e);
	for(var i = 0; i < parsedItems.length; i++) {
		if(parsedItems[i].id === targetId) {
			var newIdea = parsedItems[i];
			parsedItems.updateQuality('upvote');
			localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
		}
	}
}

function createNewIdea(idea) {
	ideaPlaceholder.classList.add("hidden");
  ideaContainer.innerHTML = 
      `<figure class="idea-card" id="idea-card" data-id="${idea.id}"><header class="idea-card-header">
        <input type="image" src="images/star.svg" class="icons__card--star" width=35px id="star-icon"/>
        <input type="image" src="images/delete.svg" class="icons__card--remove" width=35px id="close-icon"/>
      </header>
        <h2 class="idea-card-title" id="card-title" contenteditable = "true">${idea.title}</h2>
        <p class="idea-card-paragraph" id="card-paragraph" contenteditable = "true">${idea.body}</p>
      <div class="idea-card-footer">
      <input type="image" src="images/upvote.svg" class="icons__card--upvote" width=35px id="upvote-icon"  />
          <p>Quality:<span class="quality" id="quality-type">${qualities[idea.quality]}</span></p>
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

function pageRefresh(ideaArray) {
ideaArray.forEach(function(item) {
	createNewIdea(item);
	})
}

function pageLoad() {
	var array = JSON.parse(localStorage.getItem("ideasSaved"))
	var newArray = array.map(item => {
		item = new Idea(item.id, item.title, item.body, item.star, item.quality)
		return item;
	})
}

function searchForIdeas(query) {
	query = query.toLowerCase();
	var body;
	var title;
	var ideaCards = document.getElementsByClassName("idea-card");
	for(var i = 0; i < ideaCards.length; i++) {
		body = ideaCards[i].querySelector("#card-paragraph").innerText;
		title = ideaCards[i].querySelector("#card-title").innerText;
		if ((body.toLowerCase().indexOf(query) > -1) || (title.toLowerCase().indexOf(query) > -1)){
			console.log(body, title);
			ideaCards[i].style.display = "";
		} else {
			ideaCards[i].style.display = "none";
		}
	}
}

function filterIdeaByQuality(num) {
  var qualityArr = [];
  ideaArray.forEach(function(card) {
    if(card.quality == num) {
      qualityArr.push(card);
    }
  });
  ideaContainer.innerHTML = '';
  pageRefresh(qualityArr);
}

// function starToggle(e) {
// 	var ideaCards = document.getElementsByClassName("idea-card");
// 	var star;

// 	// var parsedItems = JSON.parse(localStorage.getItem("ideasSaved"));
// 	// var targetId = JSON.parse(e.target.parentElement.dataset.id);
// 	for(var i=0; i < ideaCards.length; i++) {
// 		star = ideaCards[i].querySelector("#star-icon").innerHTML;
// 		}
// 	}

//hamburger menu functionality
function classToggle() {
  var navs = document.querySelectorAll(".Navbar__Items")
  navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"))
}
document.querySelector(".Navbar__Link-toggle")
.addEventListener("click", classToggle);
