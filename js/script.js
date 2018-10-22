/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Add variables that store DOM elements you will need to reference and/or manipulate
let ul = document.querySelector(".student-list");
let li = document.querySelectorAll(".student-item");

let div = document.querySelector(".page")

console.log('test');
console.log(li.length);
console.log(div);

console.log(Math.floor( li.length/10));
//create's buttons for page class depending on total list length
for (let i = 0; i < Math.floor( li.length/10); i++) {
  let button = document.createElement('button');
  button.textContent = (i+1).toString();
  div.appendChild(button);

}

//displays the first 10 list values
for (let i = 0; i < li.length; i++) {
  if(i>9){
    li[i].style.display = "none";
  }

}





// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four




// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
