import { animals } from "../data/animalsList.js";
const selectAnimals = document.getElementById("select-animals");
const animalsList = document.getElementById("animals-list");

function convertAnimalsToDiv(animals) {
  return `
      <div class="col-6 col-md-3">
          <div class="card">
            <img
              src= "${animals.image}"
              class="card-img-top"
              alt="thumbnail de cachorro para adoção"
            />
            <div class="card-body">
              <h5 class="card-title">${animals.name}</h5>
              <span class="badge ${
                animals.sex === "Macho" ? "male" : "female"
              }">
                <i class="fa-solid ${
                  animals.sex === "Macho" ? "fa-mars" : "fa-venus"
                }"></i> ${animals.sex}
              </span>
              <span class="badge ">${animals.age}</span>
              <span class="badge ">${animals.breed}</span>
            </div>
          </div>
        </div>`;
}

(function loadAnimals() {
  const newAnimalHtml = animals.map(convertAnimalsToDiv).join("");
  animalsList.innerHTML += newAnimalHtml;
})();

(function loadDogOptions() {
  for (let index in animals) {
    const optionsNumber = selectAnimals.options.length;

    selectAnimals.options[optionsNumber] = new Option(
      animals[index].name,
      index
    );
  }
})();
