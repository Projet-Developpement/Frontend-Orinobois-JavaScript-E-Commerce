let meubleData = [];

const fetchMeuble = async () => {
  await fetch("http://localhost:3000/api/furniture")
    .then((res) => res.json())
    .then((promise) => {
      meubleData = promise;
      console.log(meubleData);
    });
};

const meubleDisplay = async () => {
  await fetchMeuble();

  document.getElementById(
    "banniere",
  ).innerHTML = `<div><img class="image-banniere" src="${meubleData[3].imageUrl}" alt="image banniere du site"/>
  </div>
  `;
};

meubleDisplay();
