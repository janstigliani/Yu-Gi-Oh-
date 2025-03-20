class HomePageComponent {  

    constructor(cardService, storageService) {
        this.cardService = cardService;
        this.storageService = storageService;
    }

    async start() {
        const SynchroBtn = document.getElementById("SynchroBtn");
        SynchroBtn.addEventListener("click", () => this.synchroPressed());

        const XyzBtn = document.getElementById("XyzBtn");
        XyzBtn.addEventListener("click", () => this.xyzPressed());

        const homeBtn = document.getElementById("HomeBtn")
        homeBtn.addEventListener("click", () => this.homePressed());

        this.cards = await this.cardService.fetchAllCardsData();
        this.render(this.cards);
    }

    render(cards) {
        const root = document.getElementById("root");
        root.innerHTML = "";
    
        for (let i = 0; i < 300; i++) {
            const card = cards[i];
            
            const externalContainer = document.createElement("div");
            externalContainer.classList.add("external-container");
    
            const container = document.createElement("div");
            container.classList.add("container");
    
            const cardImage = document.createElement("div");
            cardImage.classList.add("card-image");
            const cover = document.createElement("img");
            cover.src = card.card_images[0].image_url;
            cover.alt = card.name;
            cover.classList.add("img");
            cardImage.appendChild(cover);
            container.appendChild(cardImage);
    
            const cardInfo = document.createElement("div");
            cardInfo.classList.add("card-info");
    
            const cardInfoBackground = document.createElement("div");
            cardInfoBackground.classList.add("card-info-background");
    
            const cardName = this.createtxtElement("h2", card.name);
            const cardType = this.createtxtElement("p", card.type);
            const cardDesc = this.createtxtElement("p", card.desc);
            const cardPrice = this.createtxtElement("p", `Price: ${card.card_prices[0].cardmarket_price} $`);
            cardName.classList.add("card-name");
            cardType.classList.add("card-type");
            cardDesc.classList.add("card-desc");
            cardPrice.classList.add("card-price");

            const saveBtn = document.createElement("button")
            saveBtn.classList.add("save-btn")
            saveBtn.addEventListener("click", () => this.saveCard(i))

            const saveImg = document.createElement("img")
            saveImg.src = './public/' //da modificare, aggiungere che se è salvata il cuore è pieno, altrimenti vuoto
            saveImg.classList.add("save-img")

            saveBtn.appendChild(saveImg);
            
            cardInfoBackground.appendChild(cardName);
            cardInfoBackground.appendChild(cardType);
            cardInfoBackground.appendChild(cardDesc);
            cardInfoBackground.appendChild(cardPrice);
            cardInfoBackground.appendChild(saveBtn);
    
            cardInfo.appendChild(cardInfoBackground);
    
            container.appendChild(cardInfo);
    
            externalContainer.appendChild(container);
    
            root.appendChild(externalContainer);
        }
    }
    
    createtxtElement(tagType, text) {
        const element = document.createElement(tagType);
        const node = document.createTextNode(text);
        element.appendChild(node);
        return element;
    }

    async synchroPressed() {
        this.cards = await this.cardService.fetchAllSynchroCardsData();
        this.render(this.cards);
    }

    async xyzPressed() {
        this.cards = await this.cardService.fetchAllXyzCardsData();
        this.render(this.cards);
    }

    async homePressed() {
        this.start();
    }

    async saveCard(index) {
        const selectedCard = this.cards[index];
        this.storageService.saveCard(selectedCard);
    }
}

export default HomePageComponent;