/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Add variables that store DOM elements you will need to reference and/or manipulate

let ul = document.querySelector(".student-list");
let li= document.querySelectorAll(".student-item");
let div = document.querySelector(".page");
let divHeader = document.querySelector(".page-header");

//for search bar
let studentNames = document.getElementsByTagName('h3');
studentNames.className = "studentNames";
let studentSearch = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');
let filter = input.value.toUpperCase();
divHeader.appendChild(studentSearch);
studentSearch.appendChild(input)
studentSearch.appendChild(button);
studentSearch.className = "student-search";
input.placeholder= "Search for students...";
button.textContent = "Search";

button.addEventListener('click', ()=>{
      filter = input.value.toUpperCase();
      for (let i = 0; i < li.length; i++) {
      let name = li[i].innerHTML;
        if (name.toUpperCase().indexOf(filter) > -1 ){
                li[i].style.display = 'block';
                console.log(studentNames[i].textContent);
                studentList = studentNames[i].textContent;
                
              }
        else{
          li[i].style.display = 'none';
        }
      }
});



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

function showPage(list, page){
  for (let i = 0; i < li.length; i++) {//this will iterate thru the entire list
    let domainStart = list*page-list;//(showPage(10, 1), domainStart = 0)
      if(i<domainStart){
        li[i].style.display = "none";
      }
      if(i>= domainStart+list){
        li[i].style.display = "none";
      }
      if(i>=domainStart && i<domainStart+list)
      li[i].style.display ="block";
  }
}

let appendLinks = (list) => {
  //append paginationDiv to div and ul to paginationDiv, and list to ul, anchor to list.
  let paginationDiv = document.createElement('div');
  let paginationDivName = document.querySelector(".pagination");
  if(paginationDivName !==null){
    div.removeChild(paginationDivName);
  }
  paginationDiv.className = "pagination";
  let pageUl = document.createElement('ul');
  div.appendChild(paginationDiv);
  paginationDiv.appendChild(pageUl);
  for (let i = 0; i < li.length/list; i++) {

    let paginationList = document.createElement('li');
    let anchor = document.createElement('a');
    pageUl.appendChild(paginationList);
    paginationList.appendChild(anchor);
    anchor.textContent = (i+1).toString();
    anchor.href = "#";
    if(i === 0){
      anchor.className = "active";
    }
    anchor.addEventListener('click', (event) =>{

      let anchorName = document.querySelector(".active");
      if(anchorName !==null){
        anchorName.classList.remove("active");
      }
      event.target.className = "active";
      showPage(10, parseInt(event.target.textContent));
    });
  }//end for-loop

} //end appendLinks
appendLinks(10);
showPage(10, 1);
