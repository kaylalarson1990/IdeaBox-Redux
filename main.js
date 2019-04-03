/*------------ Query Selector ---------*/ 
var showStarredIdeas = document.querySelector("#starred-ideas-btn");
var swillFilter = document.querySelector("#swill-filter");
var plausibleFilter = document.querySelector("#plausible-filter");
var geniusFilter = document.querySelector("#genius-filter");
var newQualityInput = document.querySelector("#new-quality-input");
var addQualityBtn = document.querySelector("#add-quality-btn");
var titleInput = document.querySelector("#title-text");
var bodyInput = document.querySelector("#body-text");
var saveBtn = document.querySelector("#btn-save");
var searchBtn = document.querySelector("#btn-search");
var searchInput = document.querySelector("#search-input");
var ideaCard = document.querySelector("#idea-card");
var starIcon = document.querySelector("#star-icon");
var closeIcon = document.querySelector("#close-icon");
var upvoteIcon = document.querySelector("#upvote-icon");
var downvoteIcon = document.querySelector("#downvote-icon");
var cardTitle = document.querySelector("#card-title");
var cardPara = document.querySelector("#card-paragraph");
// var cardContent = document.querySelector("#card-content")
var qualityType = document.querySelector("#quality-type");
var main = document.querySelector("#main");

/*------------ localStorage -------------*/
// var localStore = {
//   saveTitleStorage: function() {
//     localStorage.setItem("content", cardContent.innerHTML);
//   },
//   loadLocalStorage: function() {
//     var contentStored = localStorage.getItem("content");
//     if(contentStored) {
//       cardContent.innerHTML = contentStored;
//     }
//   },
//   // clearLocalStorage: function() {
//   //   localStorage.removeItem("item");
//   // }
// };




/*------------ Input Var -------------*/

/*------------- Output Var ------------*/

/*------------- Buttons --------------*/ 

/*----------- HTML Elements ----------*/ 

/*------------- Global Variables ---------*/

/*------------- Event Listeners ----------*/
closeIcon.addEventListener("click", function removeIdea() {
  ideaCard.innerHTML = '';
}, false);

ideaCard.addEventListener("mouseout", updateIdea);
cardTitle.value = localStorage.getItem(cardTitle.id);
cardPara.value = localStorage.getItem(cardPara.id);

/*---------------- Functions ------------*/
updateIdea (e) {
    if(e.target.tagName === "FIGURE") {
    localStorage.setItem(e.target.id, e.target.value);
    console.log(e.target.tagName);
  }

