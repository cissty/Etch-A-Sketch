// a custom section or prompt ask the user how many grids.
// be able to draw something on it
// user can choose the color
// will be a reset button to remove everything but keep the grids.

// -------------------------------------//

// increasing the value with the slider
const sliderElement = document.querySelector("#range");
const sliderValue = document.querySelector(".value");
const grid = document.getElementById('container');
let tempSliderValue = sliderElement.value;

function forSlider(){
  tempSliderValue = sliderElement.value;
  sliderValue.textContent = `${tempSliderValue} x ${tempSliderValue}`;
  // Assigning the increased or decreased value to the columns and rows
  const columns = `repeat(${tempSliderValue}, 1fr)`
  const rows = `repeat(${tempSliderValue}, 1fr)`
  grid.style.gridTemplateColumns = columns;
  grid.style.gridTemplateRows = rows; 
}

let newDivs = document.createElement('div');

  //creating new div//
function createDivs() {
  
    for (let i = 0; i < tempSliderValue * tempSliderValue; i++){
      newDivs = document.createElement('div');

      newDivs.classList.add('newDiv');
      grid.appendChild(newDivs);
    };
}

////
  sliderElement.addEventListener("input", function() {
    forSlider();
    createDivs();
  });
  

// Add mousedown and mouseover event listeners to each div
    
 

//    Adding a reset button --clear the box-- //

     const reset = document.getElementById('clear');
     const allDivs = document.querySelectorAll('.newDiv');
     reset.addEventListener('click', () => {
     allDivs.forEach((div) => {
      div.style.backgroundColor = '';
  });

});

allDivs.addEventListener('mousedown', () =>{
  allDivs.style.backgroundColor = 'black';
  allDivs.addEventListener('mouseover', () => {
    allDivs.style.backgroundColor = 'blue';
  });
});