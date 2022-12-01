const animalsHtmlList = document.getElementById("animals-list");
const path = "assets/data/animals.json";

fetch(path)
  .then((response) => response.json())
  .then((data) => data.map(convertAnimalsToDiv))
  .catch((err) => console.log(err));

function convertAnimalsToDiv(animal) {
  const { name, type, habitat, photoUrl, description } = animal;

  loadAnimals(`
    <div class="col-6 col-md-3">
      <div class="card">
        <img src="${photoUrl}" />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <div>
            <span class="badge">${type}</span>
            <span class="badge">${habitat}</span>
            <a
              role="btn"
              data-bs-toggle="collapse"
              href="#${name}"
              aria-controls="${name}"
              role="button"
              aria-expanded="false"
              ><i class="fa-solid fa-caret-down see-more"></i
            ></a>
            <div class="collapse multi-collapse card-text" id="${name}">
              <div>${description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function loadAnimals(animal) {
  animalsHtmlList.innerHTML += animal;
}
