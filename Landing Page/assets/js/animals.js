const animalsHtmlList = document.getElementById("animals-list");
const path = "assets/data/animals.json";

fetch(path)
  .then((response) => response.json())
  .then((data) => loadAnimalCards(data))
  .catch((err) => console.log(err));

function convertAnimalToCard(animal) {
  
  const { name, type, habitat, photoUrl, description } = animal;

  return `
    <div class="col-6 col-md-3">
      <div class="card">
        <img src="${photoUrl}" alt="imagem do animal ${name}"/>
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <div>
              <span class="badge ${type}">${type}</span>
              <span class="badge ${habitat}">${habitat}</span>
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
}

function loadAnimalCards(list) {
  const newCard = list.map(convertAnimalToCard).join("");
  animalsHtmlList.innerHTML += newCard;
}

