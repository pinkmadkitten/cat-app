const DataController = require('./data-controller');
const dataService = new DataController();

main();

async function main () {
  // save breed name in order to check if we need to render cat images in case new fact is about same breed
  let prevBreedName;
  const breeds = await dataService.getAwailableBreeds();
  const breedName = getRandomBreed(breeds);
  const breedNameHolder = document.querySelector('.cat-breed');
  const factBody = document.querySelector('.fact-body');
  const factHeader = document.querySelector('.fact-header');
  const imagesBox = document.querySelector('.img-box');
  getRandomFact(breedName);
  createImages(breedName);
  prevBreedName = breedName;


  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    const breedName = getRandomBreed(breeds);
    getRandomFact(breedName);
    createImages(breedName);
    prevBreedName = breedName;
  });

  function createImages (breed) {
    if (prevBreedName === breed) {
      return;
    }
    imagesBox.innerHTML = '';
    dataService.getPhotosLinks(breed).then( links => {
      links.forEach( link => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = link;
        div.appendChild(img);
        imagesBox.appendChild(div);
      });
    });
  }

  function getRandomFact (breed) {
    dataService.getFactAbout(breed).then(catFact => {
      breedNameHolder.innerHTML = breed;
      factBody.innerHTML = catFact.fact;
      factHeader.innerHTML = catFact.header;
    });
  }

  function getRandomBreed (breeds) {
    return breeds[Math.floor(Math.random() * breeds.length)];
  }

}
