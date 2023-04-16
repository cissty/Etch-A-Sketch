// a custom section or prompt ask the user how many grids.
// be able to draw something on it
// user can choose the color
// will be a reset button to remove everything but keep the grids.
const grid = document.getElementById('container');

const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", e => {
  const tempSliderValue = e.target.value;
  sliderValue.textContent = `${tempSliderValue} x ${tempSliderValue}`


})


