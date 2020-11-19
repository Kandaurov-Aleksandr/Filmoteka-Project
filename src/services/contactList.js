import contactsTemplate from "../templates/contactsTeam.hbs";
import contacts from "../components/contacts";
import refs from "../services/refs";


const markup = contactsTemplate(contacts);

function contactsMarkup() {
  refs.main.innerHTML = "";
  refs.main.insertAdjacentHTML('beforeend', markup)
}

refs.footerBtn.addEventListener('click', contactsMarkup);