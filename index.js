//cache at least one element using selectElementByid
const ColchangeEl = document.getElementbyId("changeColorBtn");
ColchangeEl.style.backgroundColor = "light blue"

//Cache at least one element using querySelector or querySelectorAll.


// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

// Iterate over a collection of elements to accomplish some task.
const destinations = document.querySelectorAll('.destination');
    destinations.forEach(destination => {
      // Add event listener to each destination
      destination.addEventListener('click', () => {
        alert(`Clicked on ${destination.querySelector('h2').textContent}`);
      });
    });

// Use appendChild and/or prepend to add new elements to the DOM.

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.


// Modify at least one attribute of an element in response to user interaction.

// Register at least two different event listeners and create the associated event handler functions.

// Use at least two Browser Object Model (BOM) properties or methods.

// Include at least one form and/or input with HTML attribute validation.

// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

// Commit frequently to the git repository.
// Include a README file that contains a description of your application.
// Level of effort displayed in creativity, presentation, and user experience.

//Grabbed the body from DOM
// let body = document.querySelector('body');
// //Created 2 divs
// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// //Created 2 lists
// let ordered = document.createElement('ol');
// let unordered = document.createElement('ul');
// //created and appened 3 list items for each list
// for (let i = 0; i < 3; i++) {
//   let li1 = document.createElement('li');
//   let li2 = document.createElement('li');
//   ordered.appendChild(li1);
//   unordered.appendChild(li2);
// }
// //Appeneded lists to div
// div1.appendChild(ordered);
// div2.appendChild(unordered);

// //Appended divs to body
// body.appendChild(div1);
// body.appendChild(div2);