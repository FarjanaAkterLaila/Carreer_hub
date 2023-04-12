import React from 'react';

const List = ({product}) => {
 

        
           const loadCard = async (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayCards(data.data, dataLimit);
}
const displayCards = (cards, dataLimit) => {
    // console.log(cards.tools)
    let tools = cards.tools;
    // console.log(tools);
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.textContent = '';
    // display 10 phones only 
    const showAll = document.getElementById('show-all');
    // console.log(tools.length);
    if (dataLimit && tools.length > 6) {

        tools = tools.slice(0, 6);
        showAll.classList.remove('d-none');

    }
    else {
        showAll.classList.add('d-none');
    }

    tools.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
    <div class="card p-4 h-100 rounded-4 shadow-sm border-1">
        <img src="${card.image}" class="card-img-top h-100 w-100 rounded-4" alt="...">
        <div class="card-body px-0">
        <h5 class="card-title">Features</h5>
        
        <ol class="g-0 px-3">
        <li>${card.features[0]}</li>
        <li>${card.features[1]}</li>
        <li>${card.features[2]?card.features[2]:'None'}</li>
      </ol>
        <hr>
        <div class="d-flex  justify-content-between align-items-center gap-2">
        <div>
        <h5>${card.name}</h5>
        <i class="fa-regular fa-calendar-days"></i><span class="mx-2">${card.published_in}</span></div>
       <div class="p-3m-2 rounded-circle bg"> 
       <i class="fas fa-arrow-right" onclick="fetchCardDetail('${card.id}')" data-bs-toggle="modal"
        data-bs-target="#exampleModal" style="color:red"></i></div>
        </div>    
    </div>
    </div>
    `;
        // console.log(card.id);
        cardsContainer.appendChild(cardDiv);
    });
    // stop spinner or loader
    toggleSpinner(false);
}
const processSearch = (dataLimit) => {
    // console.log("hello");
    loadCard(dataLimit);
}

processSearch(6);

// show All data
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

    
    
};

export default List;