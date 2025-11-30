// Select all required elements once at the top
const colorInput = document.getElementById('color-input');
const textInput = document.getElementById('text-input');
const bgButton = document.getElementById('bg-btn');
const textButton = document.getElementById('text-btn');
const contentBox = document.getElementById('content-box');

/*
  Function: Validate if a value is a real CSS color.
  Method: Apply the value to a temporary element and see if the browser accepts it.
*/
function isValidColor(color) {
  const temp = document.createElement('div');
  temp.style.color = color;
  return temp.style.color !== '';
}

/*
  Action 1: Change background color when the button is clicked
*/
bgButton.addEventListener('click', () => {
  const color = colorInput.value.trim();

  // Validate color input
  if (!isValidColor(color)) {
    alert('Invalid color name!');
    return;
  }

  // Apply background color
  contentBox.style.backgroundColor = color;
});

/*
  Action 2: Update text when the button is clicked
*/
textButton.addEventListener('click', () => {
  const newText = textInput.value.trim();

  // Prevent updating if text field is empty
  if (newText === '') {
    alert('Please enter some text!');
    return;
  }

  // Update the div text
  contentBox.textContent = newText;
});
