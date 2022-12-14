const apiURL = 'https://mocki.io/v1/87d49dee-1da1-48d2-9040-4d10b9ff2f61';
const animalsList = document.getElementById('animals-list');

// fetching API datas and calling loadAnimalCards() function
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => loadAnimalCards(data))
  .catch((err) => console.log(err));

// adding each API item into a variable and rendering it in page
const loadAnimalCards = (list) => {
  const newCard = list.map(convertAnimalToCard).join('');
  animalsList.innerHTML = newCard;
};

// convert datas from API to HTML element
const convertAnimalToCard = ({ name, type, habitat, photoUrl, description }) => {
  return `
    <div class="col-6 col-md-4 col-lg-3">
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
                ><i class="fa-solid fa-caret-down see-more"></i
              ></a>
              <div class="collapse card-text" id="${name}">
                <div>${description}</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  `;
};