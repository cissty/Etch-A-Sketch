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
let gridColumns = tempSliderValue;
let gridRows = gridColumns;

function forSlider(){
  tempSliderValue = sliderElement.value;
  sliderValue.textContent = `${tempSliderValue} x ${tempSliderValue}`;
  // Assigning the increased or decreased value to the columns and rows
   columns = `repeat(${tempSliderValue}, 1fr)`
   rows = `repeat(${tempSliderValue}, 1fr)`
  grid.style.gridTemplateColumns = columns;
  grid.style.gridTemplateRows = rows; 
}




////removing old div when the value is changed.
  sliderElement.addEventListener("input", () =>{
    forSlider();
    while(grid.firstChild){
     grid.removeChild(grid.firstChild);
    }

    //Create the new grid with loop
    for (let row = 0; row < tempSliderValue; row++){
      for (let column = 0; column < tempSliderValue; column++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('newDiv');
        grid.appendChild(gridItem);
    
    // Adding adjustable color //



// Add Color mousedown and mouseover event listeners to each div
     const colorMode = document.getElementById('colorMode');

     colorMode.addEventListener('click', () => {
      var color = document.getElementById('myColor');
      gridItem.addEventListener('mousedown', () => {
        gridItem.style.backgroundColor = `${color.value}`;
      });
  
      gridItem.addEventListener('mouseover', (event) => {
        if(event.buttons == 1){
            gridItem.style.backgroundColor = `${color.value}`;
        }
      });
     });

// Add Eraser for mousedown and mouseover event listeners to each div
    const eraser = document.getElementById('eraser');

     eraser.addEventListener('click', () => {
      gridItem.addEventListener('mousedown', () => {
        gridItem.style.backgroundColor = 'white';
      });
  
      gridItem.addEventListener('mouseover', (event) => {
        if(event.buttons == 1){
            gridItem.style.backgroundColor = 'white';
        }
      });
     });
      //----
      }
    }
  });
  

   



    
 

//    Adding a reset button --clear the box-- //

     const reset = document.getElementById('clear');

     reset.addEventListener('click', () => {
     const allDiv = document.querySelectorAll('.newDiv');
      allDiv.forEach(div => {
        div.style.backgroundColor = '';

      });
    });

