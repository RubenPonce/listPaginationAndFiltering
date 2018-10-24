/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Add variables that store DOM elements you will need to reference and/or manipulate

let ul = document.querySelector(".student-list");
let li= document.querySelectorAll(".student-item");
let div = document.querySelector(".page");
const listLength = 10;


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

function showPage(listLength, page){
  for (let i = 0; i < li.length; i++) {//this will iterate thru the entire list
    let domainStart = listLength*page-listLength;//(showPage(10, 1), domainStart = 0)
      if(i<domainStart){
        li[i].style.display = "none";
      }
      if(i>= domainStart+listLength){
        li[i].style.display = "none";
      }
      if(i>=domainStart && i<domainStart+listLength)
      li[i].style.display ="block";
  }
}
//begin appending links
  let linkDiv = document.createElement('div');
  linkDiv.className = "pagination";
  div.appendChild(linkDiv);

  let remainder;
    if(li.length%2!=0){
      remainder = 1;
    } else{
      remainder = 2;
    }
  //li.length/listLength of index 1 iterates through n-1 times. + remainder to iterate through list interval AND for any remainder.
  for (let i = 1; i < Math.floor( li.length/listLength)+remainder; i++) {

    //append list to div and anchor to list.
    let paginationList = document.createElement('li');
    linkDiv.appendChild(paginationList);
    let paginationLink = document.createElement('a');
    paginationList.appendChild(paginationLink);
    paginationLink.textContent = (i).toString();
    paginationLink.addEventListener('click',()=>{
      showPage(10, i);
    });
  }











 //begins list on first page.
showPage(listLength,1);

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
