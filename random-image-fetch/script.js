const img = document.querySelector("#image");
const btn = document.querySelector("#btn");

const getImage = async () => {
  const url = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .catch((err) => {
      img.alt = "unable to connect";
      console.log(err);
    });
  img.src = url.message;
};
window.onload = getImage;

btn.onclick = getImage;
