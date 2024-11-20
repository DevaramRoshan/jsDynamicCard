import { data } from "./data.js";


const div = document.createElement("div");
div.style = `
display : grid;
grid-template-columns:auto auto auto;
grid-gap:1rem;
`
function createCard(title, price, description, category, url, rate, count,) {
    const card = document.createElement("div");
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    const titleBox = document.createElement("div");
    const descriptionBox = document.createElement("div");
    const categoryBox = document.createElement("div");
    const cardFooter = document.createElement("div");
    const rating = document.createElement("div");
    const pricing = document.createElement("div");

    image.setAttribute("src", `${url}`);
    image.style = `
    height:250px;
    width:250px;
    `
    imageDiv.appendChild(image);
    card.appendChild(imageDiv);
    titleBox.innerHTML = `<h2>${title}</h2>`;
    card.appendChild(titleBox);
    descriptionBox.innerHTML = `<p>${description}</p>`;
    card.appendChild(descriptionBox);
    categoryBox.innerHTML = `<h3>${category}</h3>`;
    categoryBox.style = `
    border:2px solid black;
    width:100%;
    padding:1rem;
    `
    card.appendChild(categoryBox);
    rating.innerHTML = `<span>${rate}&#x2606 (${count})</span>`;
    pricing.innerHTML = `<h4>${price}$</h4>`;
    cardFooter.appendChild(rating);
    cardFooter.appendChild(pricing);
    cardFooter.style = `
    display: flex;
    align-items:center;
    justify-content:space-between;
    `
    card.appendChild(cardFooter);
    card.style = `
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    border: 2px solid black;
    border-radius:0.5rem;
    padding:1rem;
    background-color:black;
    `
    div.appendChild(card);
}
for (let i = 0; i < data.length; i++) {
    const val = Object.values(data[i]);
    const updated = val.slice(1, val.length - 1);
    updated.push(val[val.length - 1].rate);
    updated.push(val[val.length - 1].count);
    createCard(updated[0], updated[1], updated[2], updated[3], updated[4], updated[5], updated[6]);
}
document.body.style = `
background-color:navy;
`
document.body.append(div);