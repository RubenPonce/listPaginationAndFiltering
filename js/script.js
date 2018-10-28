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
divHeader.appendChild(studentSearch);
studentSearch.appendChild(input)
studentSearch.appendChild(button);
studentSearch.className = "student-search";
input.placeholder= "Search for students...";
button.textContent = "Search";
//searches through list items for names on Search press
let resultCounter = 0;
  button.addEventListener('click', ()=>{
        let filter = input.value.toUpperCase();
        for (let i = 0; i < li.length; i++) {
        let name = li[i].innerHTML;
          if (name.toUpperCase().indexOf(filter) > -1 ){
                  li[i].style.display = 'block';

                    resultCounter=resultCounter + 1;
                }
          else{
            li[i].style.display = 'none';
          }
        }
        console.log(resultCounter);
        appendLinks(resultCounter%10);
        console.log(resultCounter);

  });

//seperates the lists into intervals of 10
function showPage(list, page){//showPage
  for (let i = 0; i < li.length; i++) {
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
}//end showPage

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
  for (let i = 0; i < list; i++) {

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
appendLinks(li.length/10);
showPage(10, 1);
