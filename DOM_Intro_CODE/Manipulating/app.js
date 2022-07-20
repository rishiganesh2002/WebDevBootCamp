const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'Hi'
}

for (let link of allLinks) {
    link.style.color = 'red';
}