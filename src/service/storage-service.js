class StorageService {

    constructor() {

    }

    saveCard(card) {
        const preferredCardString = localStorage.getItem("preferred");

        if (preferredCardString) {
            const preferredCards = JSON.parse(preferredCardString);
            preferredCards.push(card);
            localStorage.setItem("preferred", JSON.stringify(preferredCards));

        } else {
            const preferredCards = [];
            preferredCards.push(card);
            localStorage.setItem("preferred", JSON.stringify(preferredCards));
        }
    }

    getPreferredCards() {
        const preferredCardString = localStorage.getItem("preferred");

        if (preferredCardString) {
            const preferredCards = JSON.parse(preferredCardString);
            preferredCards.push(card);
            localStorage.setItem("preferred", JSON.stringify(preferredCards));

        } else {
            const preferredCards = [];
            return preferredCards;
        }
    }




}

export default StorageService;