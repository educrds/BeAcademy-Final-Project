const animalsList = document.getElementById("animals-list");
const apiUrl = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => data.map(convertAnimalsToDiv))
  .catch((err) => console.log(err));

function convertAnimalsToDiv(animal) {
  loadAnimals(
    `<div  div class="col-6 col-md-3">
      <div class="card">
        <img
          src="${animal.image_link}"
          class="card-img-top"
          alt="thumbnail animal ${animal.name}"
        />
        <div class="card-body">
          <h5 class="card-title">${animal.name}</h5>
          <p>
            <i class="fa-solid fa-tree"></i
            ><strong> Habitat: </strong> ${animal.habitat}
          </p>
          <p>
            <i class="fa-solid fa-heart"></i
            ><strong> Lifespan: </strong> ${animal.lifespan}
          </p>
        </div>
      </div>
    </div>`
  );
}

function loadAnimals(animal) {
  animalsList.innerHTML += animal;
}
