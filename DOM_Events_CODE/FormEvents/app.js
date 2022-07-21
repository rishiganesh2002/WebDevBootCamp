const form = document.querySelector("#shelterForm");
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const input = document.querySelector('#catName');
    
    const cat = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = cat;
    list.append(newLi);
    input.value = ""

})



