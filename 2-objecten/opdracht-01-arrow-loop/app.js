 
// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.
let marvels = ["Avengers", "Age of Ultron", "Spider-Man: Homecoming", "Spider-Man: Far From Home"];

// Maak een arrow function genaamd 'addMarvel'
const addMarvel = (film) => {
  // Voeg nieuwe film toe aan de array
  marvels.push(film);
  return marvels;
};

// Roep de functie op (voeg bijvoorbeeld Infinity War toe)
addMarvel("Infinity War");

// Loop met een for/of loop door de array en toon alle items in de console
for (let film of marvels) {
  console.log(film);
}
