// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i = 1; i <= 151; i++) {
    // Create the image and save it to a variable
    let imgContainer = document.createElement('div');

    let image = document.createElement('img');
    image.src = `${url}${i}.png`; // set the source attribute
    console.log(image.src);

    let number = document.createElement('span');
    number.innerText = `${i}`;

    // Add the image to our container. 
    image.style.display = 'block';

    imgContainer.append(image, number);
    container.append(imgContainer);
    
    imgContainer.style.display = 'inline-block';
}

