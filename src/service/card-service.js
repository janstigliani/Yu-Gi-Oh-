import card from "../models/card.js";

class CardService {
    dataUrl = `assets/cards.json`;

    constructor() {

    }

    fetchCardData() {
        return fetch(this.dataUrl).then(response => response.json())
            .then(jsonData => this.convertDataToCard(jsonData))
            .catch(error => console.log(error));
    }

    convertDataToCard(data) {
        const newArray = [];
        data.forEach(cardData => {
            const newCard = new card(cardData.id,
                cardData.name,
                cardData.type,
                cardData.desc,
                cardData.card_prices[0].cardmarket_price,
                cardData.card_images[0].image_url,
                cardData.card_sets);
            newArray.push(newCard);
        });
        return newArray;
    }

}

export default CardService;