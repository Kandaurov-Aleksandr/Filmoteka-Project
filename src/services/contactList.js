import contactsTemplate from "../templates/contactsTeam.hbs";
import contacts from "../components/contacts";
import refs from "../services/refs";
import Pagination from "../components/Pagination";




const markup = contactsTemplate(contacts);

function contactsMarkup() {
  refs.main.innerHTML = "";
  refs.main.insertAdjacentHTML('beforeend', markup);
  Pagination.clear();
}

refs.footerBtn.addEventListener('click', contactsMarkup);

