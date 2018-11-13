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

  const twitterShare = document.querySelector('[data-js="twitter-share"]');

  twitterShare.onclick = function (e) {
    e.preventDefault();
    const twitterWindow = window.open('https://twitter.com/share?url=' + document.URL,
      'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  };

  const facebookShare = document.querySelector('[data-js="facebook-share"]');

  facebookShare.onclick = function (e) {
    e.preventDefault();
    const facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + document.URL,
      'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  };

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
