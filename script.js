// a custom section or prompt ask the user how many grids.
// be able to draw something on it
// user can choose the color
// will be a reset button to remove everything but keep the grids.

// -------------------------------------//

// increasing the value with the slider
const sliderElement = document.querySelector("#range");
const sliderValue = document.querySelector(".value");
const grid = document.getElementById('container');

let tempSliderValue;

function forSlider(event){
  tempSliderValue = event.target.value;
  sliderValue.textContent = `${tempSliderValue} x ${tempSliderValue}`;
  // Assigning the increased or decreased value to the columns and rows
  const columns = `repeat(${tempSliderValue}, 1fr)`
  const rows = `repeat(${tempSliderValue}, 1fr)`
  grid.style.gridTemplateColumns = columns;
  grid.style.gridTemplateRows = rows; 
  divs();


}

  sliderElement.addEventListener("input", forSlider);

//creating new div//
function divs() {
  
  for(let i = 0; i < tempSliderValue * 2; i++){
    let newDivs = document.createElement('div');
    newDivs.classList.add('newDiv');
    grid.appendChild(newDivs);


 // Add mousedown and mouseover event listeners to each div
    newDivs.addEventListener('mousedown', () =>{
      newDivs.style.backgroundColor = 'black';
      newDivs.addEventListener('mouseover', () => {
        newDivs.style.backgroundColor = 'blue';
      });
    });
    }
  };

// Adding a reset button --clear the box-- //

     const reset = document.getElementById('clear');
    
     reset.addEventListener('click', () => {
    const allDivs = document.querySelectorAll('.newDiv');
    allDivs.forEach((div) => {
      div.style.backgroundColor = '';
  });

});