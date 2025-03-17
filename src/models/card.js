class card {
    constructor(id, name, type, desc, price = "Not Available", cover, cardSet=[]) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.desc = desc;
        this.price = price;
        this.cover = cover;
        this.cardSet = cardSet;
    }

    compareByName(card) {
        const card1 = this.name;
        const card2 = card.name;
        return card1.localeCompare(card2);
    }

    compareByPrice(card) {
        const card1 = this.price;
        const card2 = card.price;
        return card1 < card2;
    }

    compareBySet(card) {
        const card1 = this.cardSet;
        const card2 = card.cardSet;
        return card1.localeCompare(card2);
    }

    compareByAtk(card) {
        const card1 = this.atk;
        const card2 = card.atk;
        return card1 < card2;
    }

    compareByType(card) {
        const card1 = this.type;
        const card2 = card.type;
        return card1.localeCompare(card2);
    }

}

export default card;