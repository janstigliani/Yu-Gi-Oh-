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

    compareByName() {

    }

    compareByPrice() {

    }

    compareBySet() {

    }

    compareByAtk() {

    }

}

export default card;