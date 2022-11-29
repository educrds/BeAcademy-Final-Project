const animalsHtmlList = document.getElementById("animals-list");
const path = "assets/data/animals.json";

fetch(path)
  .then((response) => response.json())
  .then((data) => data.map(convertAnimalsToDiv))
  .catch((err) => console.log(err));

function convertAnimalsToDiv(animal) {
  const { name, type, photoUrl, description } = animal;

  loadAnimals(
    `<div class="col-6 col-md-3">
      <div class="card">
        <img src="${photoUrl}" alt="thumbnail animal ${name}"
        />
        <div class="card-body">
          <h5 class="card-title ">${name}</h5>
          <p>
            <i class="fa-solid fa-tag"></i> 
            ${type}
          </p>
          <p>
            <i class="fa-solid fa-circle-info"></i> ${description}
          </p>
        </div>
      </div>
    </div>`);
}

function loadAnimals(animal) {
  animalsHtmlList.innerHTML += animal;
}
