class CardService {
    static BASE_URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

    constructor() {

    }

    async fetchAllCardsData() {
        const data = await fetch(CardService.BASE_URL).then(response => response.json())
        return data.data;
    }

    async fetchAllSynchroCardsData() {
        const url = `${CardService.BASE_URL}?type=Synchro%20Monster`;

        const data = await fetch(url).then(response => response.json())
        return data.data;  
    }

    async fetchAllXyzCardsData() {
        const url = `${CardService.BASE_URL}?type=xyz%20Monster`;

        const data = await fetch(url).then(response => response.json())
        return data.data;
    }
}

export default CardService;