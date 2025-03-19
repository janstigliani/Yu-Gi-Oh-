import CardService from "./service/card-service.js";
import HomePageComponent from "./components/home-page-component.js";

const service = new CardService();

const homeC = new HomePageComponent(service);

homeC.start();

// service.fetchAllCardsData().then(data => console.log(data));
