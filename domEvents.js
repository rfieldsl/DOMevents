// *** DOM EVENTS ***
// DOM Events are actions that occur as a response to user inputs/actions

// EVENT PROPERTY
/*
Syntax Example

selectedElement.eventProperty = function functionName(){
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const btn1 = document.querySelector(`#one`);
// Alert displays when "Button One" is clicked
btn1.onclick = function funcOne(){
  alert(`You clicked button one!`);
}

// Example 2
const btn2 = document.querySelector(`#two`);
// The "background" class is added to "Button Two" when it is DOUBLE clicked
btn2.ondblclick = () => btn2.classList.add(`background`);

// ADD EVENT LISTENER
/*
Syntax Example

selectedElement.addEventListener('event', function);
*/

// Example 1
const btn3 = document.querySelector(`#three`);
// The 'text-color' class is added to "Button Three" when it is clicked
btn3.addEventListener(`click`, () => {
  btn3.classList.add(`text-color`);
});

// Example 2
const h1 = document.querySelector(`h1`);
const p = document.querySelector(`p`);
// The `background` & `text-color` classes are toggled on & off for the p element when the mouseup event occurs on the h1
h1.addEventListener(`mouseup`, () => {
  p.classList.toggle(`background`);
  p.classList.toggle(`text-color`);
});

// Example 3 (addEventListener allows for multiple events on a single element)
// The `background` & `text-color` classes are toggled on & off for the h1 element when the mouseleave event occurs on the h1
h1.addEventListener(`mouseleave`, () => {
  h1.classList.toggle(`background`);
  h1.classList.toggle(`text-color`);
});

// Example 4
const newBtn = document.createElement(`button`);
newBtn.innerText = `DO NOT PRESS THIS BUTTON`;
const body = document.querySelector(`body`);
body.append(newBtn);

newBtn.addEventListener(`click`, () => {
  body.remove();
});

// Forms Using addEventListener

// Example 1
const userForm = document.querySelector(`form`);
// Alert displays when user clicks on the submit input/button (AKA Submits the form)
// userForm.addEventListener(`submit`, () => {
//   alert(`Your form has been submitted!`);
// });

// Example 2
userForm.addEventListener(`submit`, p => {
  // preventDefault stops the form from submitting
  p.preventDefault();

  // Returns the value entered for each input
  const username = userForm.elements.username.value;
  const email = userForm.elements.email.value;

  // Uses values from form and displays them in document/webpage
  const div = document.querySelector(`div`);
  const newUser = document.createElement(`p`);
  newUser.innerText = `${username}, ${email}`;
  div.append(newUser);
});

