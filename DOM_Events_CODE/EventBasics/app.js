let btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("clicked");
}

btn.onmouseenter = function(){
    console.log("SCREAM");
}

let btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert("I was clicked")
})

let btn4 = document.querySelector('#tas');

function twist(){
    console.log('twist');
}

btn4.addEventListener('click', )