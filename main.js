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
// var ideaCard = document.querySelector("#idea-card");
var starIcon = document.querySelector("#star-icon");
var closeIcon = document.querySelector("#close-icon");
var upvoteIcon = document.querySelector("#upvote-icon");
var downvoteIcon = document.querySelector("#downvote-icon");
var cardTitle = document.querySelector("#card-title");
var cardPara = document.querySelector("#card-paragraph");
var qualityType = document.querySelector("#quality.type");

// var ideaContainer = document.querySelector(".bottom-section")
// var ideaCard = document.createElement("div");
// ideaCard.classList.add("idea-card")



/*------------ Input Var -------------*/

/*------------- Output Var ------------*/

/*------------- Buttons --------------*/ 

/*----------- HTML Elements ----------*/ 

// ideaCard.innerHTML = `<figure class="idea-card" id="idea-card">
//         <header class="idea-card-header"><img src="images/star.svg" class="idea-card-icons" id="star-icon"/><img src="images/delete.svg" class="idea-card-icons" id="close-icon"/></header>
//         <h2 id="card-title">${cardTitle}</h2>
//         <p class="idea-card-paragraph" id="card-paragraph">${cardPara}</p>
//         <div class="idea-card-footer">
//           <img src="images/upvote.svg" class="upvote-icon idea-card-icons" id="upvote-icon"/><p>Quality:<span class="quality" id="quality-type">Swill</span></p><img src="images/downvote.svg" class="downvote-icon idea-card-icons" id="downvote-icon"/>
//       </div>
//       </figure>`
/*------------- Global Variables ---------*/

/*------------- Event Listeners ----------*/

saveBtn.addEventListener("click", saveInput)

/*---------------- Functions ------------*/

function saveInput() {
	var newTitle = titleInput.value;
	cardTitle.innerText = newTitle;
	console.log(titleInput.value);
}



