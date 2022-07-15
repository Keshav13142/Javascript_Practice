const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const reset = document.querySelector("#btn");
const boxes = document.querySelectorAll(".box");
// var redCount = 1;
// var blueCount = 1;
// var greenCount = 1;

// red.addEventListener("click", () => {
//   red.innerHTML = `<p>${++redCount}</p>`;
// });

// blue.addEventListener("click", () => {
//   blue.innerHTML = `<p>${++blueCount}</p>`;
// });

// green.addEventListener("click", () => {
//   green.innerHTML = `<p>${++greenCount}</p>`;
// });
const values = { red: 0, blue: 0, green: 0 };

boxes.forEach((box) => {
  box.onclick = () => {
    values[box.id] += 1;
    box.innerHTML = `<p>${values[box.id]}</p>`;
  };
});

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    values[box.id] = 0;
    box.innerHTML = "<p>0</p>";
  });
});
