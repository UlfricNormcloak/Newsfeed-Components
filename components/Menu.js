// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

*/

//step 1.
function menuMaker(menuItems) {
  const menuDiv = document.createElement('div');//create element <div>
  menuDiv.classList.add('menu');//add the class, in this case 'menu'

  const menuList = document.createElement('ul');//create element <ul>
  menuDiv.appendChild(menuList);//append the <ul> to the <div>, as the child to the <div>. This gives us the structure, minus the <li>'s, which will be added using an array method

  //step 2.
  menuItems.forEach(item => {// use the forEach method to iterate over the array items at the top of the file/////////
     const menuValues = document.createElement('li');///declare a variable that will be used to hold the <li> element being created on this line
     menuValues.textContent = item;//use the variable created on the immediate line above to grab the <li> element that was also created on that line, and fill it with content from the array using textContent = item;
     menuList.appendChild(menuValues)///grab the variable declared 7 lines above 'menuList', which holds the <ul>, then append the <li> elements (menuValues) to it by using appendChild. The <li>'s are appended to the <ul>, as specified in the HTML markup we are supposed to model from.
  })

  //step 3.
  const menuButton = document.querySelector('.menu-button');// grab the menu button from the HTML and hold it in a variable by using querySelector to grab the class of menu-button

  //step 4.
  menuButton.addEventListener('click', event => {//add an event listener that toggles the class menu--open, which will open and collapse the list of <li> or items from the array
    menuDiv.classList.toggle('menu--open');
  })
  //step 5.
  return menuDiv;
}

//step 6.
const menuOfItems = menuMaker(menuItems);//the menuMaker function is using the menuItems array to create the menu

const header = document.querySelector('.header'); //this line is saving the header of the document to a variable that can be utilized
header.appendChild(menuOfItems);//menuOfItems is appended to the header here. Remember the pattern parent.appendChild(child)