let cardContainer = document.querySelector(".cardContainer");

let data = [];

async function fetchData() {
    try {
        cardContainer.innerHTML = `<div class="spinner-border" role="status">`;
        let fetchUrl = await fetch("https://dummyjson.com/products");
        let res = await fetchUrl.json();
        data = res.products;
        cardContainer.innerHTML = '';
        renderData();

    } catch (error) {
        console.log(error);
    }
}

fetchData()

function renderData() {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        cardContainer.innerHTML += (`<div class="card" style="width: 18rem;">
            <img src=${item.thumbnail} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p>${item.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: ${item.price}</li>
                <li class="list-group-item">Rating: ${item.rating}</li>
                <li class="list-group-item">${item.availabilityStatus}</li>
            </ul>
        </div>`)

    }
}