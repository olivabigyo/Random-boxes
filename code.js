const bigButton = document.querySelector('#circle')
let counter = 0;


bigButton.addEventListener('click', e =>{
  
  // Counter text
  counter++;

  if(!document.querySelector('.counter')){
    const counter = document.createElement('h2')
    counter.setAttribute('class', 'counter')
    document.querySelector('#circle').after(counter)
  }
  document.querySelector('.counter').innerHTML = `Times clicked: ${counter}`
  // Box in random position

    //   main: 1600px x 900px
    //   box : 100px x 100px
  const myX = Math.floor((Math.random() * 1500)) ;
  const myY = Math.floor((Math.random() * 800)) ;
  console.log(myX, myY);
  const box = document.createElement('div');
  box.setAttribute('class','box')
  document.querySelector('main').appendChild(box);

  // Boxes in random position with background
  box.setAttribute('style',`left: ${myX}px; top: ${myY}px; background-position: -${myX}px -${myY}px;`)



  // Boxes in greyscale
  // let lastBox = document.querySelector('main .box:last-of-type');
  //    console.log(lastBox);
  // if (counter < 255) {
  //   lastBox.style.background = `rgb(${counter},${counter},${counter})`;
  //   } else lastBox.style.background = `rgb(255),255,255)`;





})



