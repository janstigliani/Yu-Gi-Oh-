class PreferredPageComponent {


    constructor(storageService) {

        this.storageService = storageService;
    }

    async start(){

        this.cards = await this.storageService.getPreferredCards();
        this.render(this.cards);
    }

    render() {
        
    }
}

export default PreferredPageComponent;