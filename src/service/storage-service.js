class StorageService {

    constructor() {
        
    }

    saveCard(card) {
        const preferredCardString = localStorage.getItem("preferred");

        if (preferredCardString) {
            const preferredCards = JSON.parse(preferredCardString);
            preferredCards.push(card);
            localStorage.getItem("preferred", JSON.stringify(preferredCards));
            
        } else {
            const preferredCards = [];
            preferredCards.push(card);
            localStorage.getItem("preferred", JSON.stringify(preferredCards));
        }
    } 


}

export default StorageService;