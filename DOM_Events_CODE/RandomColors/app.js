// Select the markup elements
let colorHeader = document.querySelector('h1');
let background = document.querySelector('body');
let change = document.querySelector('button');

// Add eventlistener to button
change.addEventListener('click', ()=>{

    let r = Math.floor(Math.random()*255) + 1;
    let g = Math.floor(Math.random()*255) + 1;
    let b = Math.floor(Math.random()*255) + 1;

    // Change the h1 text
    colorHeader.innerText = `rgb(${r},${g},${b})`;
    // Change the background color
    background.style.backgroundColor = `rgb(${r},${g},${b})`;

})



