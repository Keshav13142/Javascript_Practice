const total = document.querySelector("#total");
const tip = document.querySelector("#tip");
const count = document.querySelector("#count");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const result = document.querySelector("#result");

var countVal = 1;

const calculateTip = () => {
  const totalValue = parseInt(total.value) || 0;
  const totalTip = parseInt(tip.value) || 0;
  const res = (totalValue + (totalValue * totalTip) / 100) / countVal;
  result.innerHTML = `$ ${res.toFixed(2)}`;
};

total.oninput = calculateTip;
tip.oninput = calculateTip;

inc.onclick = () => {
  count.innerHTML = ++countVal;
  calculateTip();
};

dec.onclick = () => {
  count.innerHTML = countVal > 1 ? --countVal : countVal;
  calculateTip();
};
