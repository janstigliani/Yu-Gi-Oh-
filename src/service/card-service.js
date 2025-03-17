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

    orderCardByName() {
        return this.fetchCardData().then(card => {
            const  arrayofCards = card.slice();
            arrayofCards.sort((c1,c2) => c1.compareByName(c2));
            return arrayofCards;
        })
    }

    orderCardBySet() {
        return this.fetchCardData().then(card => {
            const  arrayofCards = card.slice();
            arrayofCards.sort((c1,c2) => c1.compareBySet(c2));
            return arrayofCards;
        })
    }

    orderCardByType() {
        return this.fetchCardData().then(card => {
            const  arrayofCards = card.slice();
            arrayofCards.sort((c1,c2) => c1.compareByType(c2));
            return arrayofCards;
        })
    }

    orderCardByPrice() {
        return this.fetchCardData().then(card => {
            const  arrayofCards = card.slice();
            arrayofCards.sort((c1,c2) => c1.compareByPrice(c2));
            return arrayofCards;
        })
    }

    orderCardByAtk() {
        return this.fetchCardData().then(card => {
            const  arrayofCards = card.slice();
            arrayofCards.sort((c1,c2) => c1.compareByAtk(c2));
            return arrayofCards;
        })
    }
}

export default CardService;