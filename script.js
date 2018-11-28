// Get DOM Elements
const title = document.getElementById('title');
const inputText = document.getElementById('textInput');
const changeTitleButton = document.getElementById('changeTitle');

// Declare arrays with the colors and fonts options
const textColors = [
  '#1dc1dd', 
  '#0f1c2c', 
  '#eca600', 
  '#6f7680'
];

const fontFamilies = [
  'Lucida Console',
  'Courier New',
  'Tahoma',
  'Times New Roman'
];

// Change title text when user types a new text on the input
inputText.addEventListener('keyup', () => {
  if (inputText.value.trim() !== '') {
    title.innerHTML = inputText.value;
  }
});

// Change title font family and color on button click
let counter = 0;

const changesTitleFn = () => {
  if (counter < textColors.length - 1 && counter < fontFamilies.length - 1) {
    counter++;
  } else {
    counter = 0;
  }

  title.style.color = textColors[counter];
  title.style.fontFamily = fontFamilies[counter];
};

changeTitleButton.addEventListener('click', changesTitleFn);
