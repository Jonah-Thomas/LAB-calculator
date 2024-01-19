/* a function created to make the C button clear the value inside of the input field, Yes i learned what an event listener was, Which is a special type of function that waits for a response from teh user to call a function such as clicking on something*/

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('inputField').value = '';
});
