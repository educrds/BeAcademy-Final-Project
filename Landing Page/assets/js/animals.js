const animalsHtmlList = document.getElementById("animals-list");
const path = "assets/data/animals.json";

fetch(path)
  .then((response) => response.json())
  .then((data) => data.map(convertAnimalsToCard))
  .catch((err) => console.log(err));

const convertAnimalsToCard = (animal) => {
  const { name, type, habitat, photoUrl, description } = animal;

  const animalItem = `
    <div class="col-6 col-md-3">
      <div class="card">
        <img src="${photoUrl}" alt="imagem do animal ${name}"/>
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
  `;
  loadAnimals(animalItem, animalsHtmlList);
};

const loadAnimals = (item, list) => {
  list.innerHTML += item;
};
