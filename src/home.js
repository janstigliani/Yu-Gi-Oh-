import CardService from "./service/card-service.js";
import HomePageComponent from "./components/home-page-component.js";
import StorageService from "./service/storage-service.js";

const service = new CardService();
const storage = new StorageService();
const homeC = new HomePageComponent(service, storage);

homeC.start();
