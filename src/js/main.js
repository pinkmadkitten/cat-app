const pFact = document.querySelector('.fact');
pFact.innerHTML = 'Blossom зранку встає, какає і пісяє :) ';

const catArr = ['Blossom зранку встає, очка лапками тере :) ',
  'Кормик лапкою гребе',
  'Муркає і мяукає',
  'Блоссом гарний кіт',
  'Сашка любить купатись з Блоссом',
  'Блоссом любить гасати з мамою',
  'Діма любить прибирати іграшки Блоссом о 1 ночі',
  'Блоссом дуже сильно любить Олю <3'];

function getRandomPhrase (){
  return catArr[Math.floor(Math.random() * catArr.length)];
}


const button = document.querySelector('button');

button.addEventListener('click', function (){
  pFact.innerHTML = getRandomPhrase();
});


/* fetch('https://catfact.ninja/fact').then(function (response) {
  return response.json();
})
  .then(function (myJson) {
    // img.setAttribute('src', myJson[0].url);

    console.log(JSON.stringify(myJson));
  }); */
