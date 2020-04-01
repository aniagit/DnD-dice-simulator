// UI elements
const diceList = document.querySelector('#dicelist'),
      diceImg = document.querySelector('#diceimg');

diceList.addEventListener('change', displayDice);

const die = ["blank.jpg", "d4.jpg", "d6.jpg", "d8.jpg", "d12.jpg", "d20.jpg", "d100.jpg"];

function displayDice(){
    let index = this.selectedOptions[0].index;
    console.log(die[index]);
    diceImg.setAttribute('src', `img/${die[index]}`);
}




