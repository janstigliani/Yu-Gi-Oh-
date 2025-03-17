import CardService from "./service/card-service.js";

const service = new CardService();

function getData() {
    service.fetchCardData().then(data => displayCardData(data));
}

function getCardByName() {
    const promiseOfOrderedCard = service.orderCardByName()
    promiseOfOrderedCard.then(orderedCards => displayCardData(orderedCards))
}

function getCardByType() {
    const promiseOfOrderedCard = service.orderCardByType()
    promiseOfOrderedCard.then(orderedCards => displayCardData(orderedCards))
}

function getCardBySet() {
    const promiseOfOrderedCard = service.orderCardBySet()
    promiseOfOrderedCard.then(orderedCards => displayCardData(orderedCards))
}

function getCardByPrice() {
    const promiseOfOrderedCard = service.orderCardByPrice()
    promiseOfOrderedCard.then(orderedCards => displayCardData(orderedCards))
}

function getCardByAtk() {
    const promiseOfOrderedCard = service.orderCardByAtk()
    promiseOfOrderedCard.then(orderedCards => displayCardData(orderedCards))
}

window.getCardByName = getCardByName;
window.getCardByType = getCardByType;
window.getCardBySet = getCardBySet;
window.getCardByPrice = getCardByPrice;
window.getCardByAtk = getCardByAtk;


function displayCardData(cardData) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    for (const card of cardData) {
        
        const externalContainer = document.createElement("div");
        externalContainer.classList.add("external-container");

        const container = document.createElement("div");
        container.classList.add("container");

        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");
        const cover = document.createElement("img");
        cover.src = card.cover;
        cover.alt = card.name;
        cover.classList.add("img");
        cardImage.appendChild(cover);
        container.appendChild(cardImage);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const cardInfoBackground = document.createElement("div");
        cardInfoBackground.classList.add("card-info-background");

        const cardName = createtxtElement("h2", card.name);
        const cardType = createtxtElement("p", card.type);
        const cardDesc = createtxtElement("p", card.desc);
        const cardPrice = createtxtElement("p", `Price: ${card.price} $`);
        cardName.classList.add("card-name");
        cardType.classList.add("card-type");
        cardDesc.classList.add("card-desc");
        cardPrice.classList.add("card-price");
        
        cardInfoBackground.appendChild(cardName);
        cardInfoBackground.appendChild(cardType);
        cardInfoBackground.appendChild(cardDesc);
        cardInfoBackground.appendChild(cardPrice);

        cardInfo.appendChild(cardInfoBackground);

        container.appendChild(cardInfo);

        externalContainer.appendChild(container);

        root.appendChild(externalContainer);
    }
}

function createtxtElement(tagType, text) {
    const element = document.createElement(tagType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}

// getData();