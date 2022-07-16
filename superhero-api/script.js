const no_img =
  "https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png";
const loading =
  "https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-loading-logo-design-circle-loading-illustration-on-white-background-png-image_1996461.jpg";
const BASE_URL = "https://superheroapi.com/api.php/869623557735791";
const super_name = document.querySelector("#name");
const img = document.querySelector("#img");
const intel = document.querySelector("#intel");
const strength = document.querySelector("#strength");
const speed = document.querySelector("#speed");
const dura = document.querySelector("#dura");
const power = document.querySelector("#power");
const combat = document.querySelector("#combat");
const random = document.querySelector("#random");
const query = document.querySelector("#query");
const search = document.querySelector("#search");

const getSuperHero = async (id) => {
  const data = await (await fetch(`${BASE_URL + "/"}${id}`)).json();
  displayData(data);
};

window.onload = getSuperHero(485);

const displayData = (data) => {
  super_name.innerHTML = data.name;
  intel.innerHTML = getStats("Intelligence", data.powerstats.intelligence);
  strength.innerHTML = getStats("Strength", data.powerstats.strength);
  speed.innerHTML = getStats("Speed", data.powerstats.speed);
  dura.innerHTML = getStats("Durability", data.powerstats.durability);
  power.innerHTML = getStats("Power", data.powerstats.power);
  combat.innerHTML = getStats("Combat Ability", data.powerstats.combat);
  img.src = data.image.url;
};

const getStats = (name, value) => {
  return name + " : <span class='number'>" + value + "</span>";
};

search.onclick = (e) => {
  e.preventDefault();
  img.src = loading;
  const key = query.value;
  searchSuperhero(key);
};

const searchSuperhero = async (key) => {
  const data = await (await fetch(`${BASE_URL + "/search/"}${key}`)).json();
  if (data.response === "error") dispError();
  else displayData(data.results[0] || data.results);
};

random.onclick = () => {
  img.src = loading;
  const randomId = Math.floor(Math.random() * 731) + 1;
  getSuperHero(randomId);
};

const dispError = () => {
  super_name.innerHTML = "Try using ' - '   instead of spaces in the names   ";
  intel.innerHTML = "";
  strength.innerHTML = "";
  speed.innerHTML = "";
  dura.innerHTML = "";
  power.innerHTML = "";
  combat.innerHTML = "";
  img.src = no_img;
};
