const DataController = require('./data-controller');
const dataService = new DataController('http://localhost:8080');
main();

async function main () {
  const pFact = document.querySelector('.fact');
  pFact.innerHTML = 'Blossom зранку встає, очка лапками тере :) ';

  const catArr = ['Blossom зранку встає, очка лапками тере :) ',
    'Кормик лапкою гребе',
    'Муркає і мяукає',
    'Блоссом гарний кіт',
    'Сашка любить купатись з Блоссом',
    'Блоссом любить гасати з мамою',
    'Діма любить прибирати іграшки Блоссом о 1 ночі',
    'Блоссом дуже сильно любить Олю <3'];

  function getRandomPhrase () {
    return catArr[Math.floor(Math.random() * catArr.length)];
  }


  const button = document.querySelector('button');

  button.addEventListener('click', function () {
    pFact.innerHTML = getRandomPhrase();
  });

  // TODO: replace console.log with data manipulations
  /* eslint-disable no-alert, no-console */
  console.log(await dataService.getAwailableBreeds());
  console.log(await dataService.getAllFacts());
  console.log(await dataService.getFactAbout('munchkin'));
  /* eslint-enable no-alert, no-console */

}
