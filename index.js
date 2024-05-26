// Write your code here!
// document.addEventListener("DOMContentLoaded", function() {
//     const main = document.getElementById('main');
//     main.remove();
  
//     const newHeader = document.createElement('h1');
//     newHeader.id = 'victory';
//     newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your name
//     document.body.appendChild(newHeader);
//   });

let newHeader;

// require('./helpers.js');

// document.addEventListener('DOMContentLoaded', function() {
  const main = document.getElementById('main');
  main.remove();

  newHeader = document.createElement('h1'); // Assign value to newHeader
  newHeader.id = 'victory';
  newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your name
  document.body.appendChild(newHeader);
// });

// // Export newHeader for testing purposes
// module.exports = newHeader;

// Breakdown
// Removes the <main> element with id main.
// Creates a new <h1> element.
// Sets the id of the new <h1> element to victory.
// Sets the text content of the new <h1> element to "YOUR-NAME is the champion" (replace 'YOUR-NAME' with your name or any desired text).
// Appends the new <h1> element to the document.body.