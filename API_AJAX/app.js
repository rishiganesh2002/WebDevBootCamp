const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();

    const input = document.querySelector("#tvShow");
    const tvShow = input.value;
    
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, {params: {q: tvShow}});
    //console.log(res.data[0].show.image.medium);

    // const showImg = document.createElement('img');
    // showImg.src = res.data[0].show.image.medium;

    // document.body.append(showImg);

    addImage(res.data);

})

const addImage = function(shows) {
    for(let result of shows){

        if(result.show.image){
            const showImg = document.createElement('img');
            showImg.src = result.show.image.medium;

            document.body.append(showImg);
        }
    }
}