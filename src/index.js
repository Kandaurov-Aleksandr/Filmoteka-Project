import onLoading from "./helpers/onLoading";
import "./style.scss";
import onFormSubmit from "./helpers/onFormSubmit";
import "./services/contactList";

// Запрос для Homepage
onLoading();

// Запрос для поиска фильмов по названию фильма
onFormSubmit();
