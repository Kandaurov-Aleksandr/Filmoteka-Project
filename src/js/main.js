import homePage from '../templates/homePage.hbs'

const refs = {
  homePageBtn: document.querySelector('#home'),
  homePageList: document.querySelector('.main__list'),
  libraryBtn: document.querySelector('#mylibrary'),
  libraryList: document.querySelector('.library__list'),

}


function markupHomePage() {
  refs.libraryList.innerHTML = '';

  return refs.homePageList.insertAdjacentHTML('beforeend', homePage());
}

refs.homePageBtn.addEventListener('click', markupHomePage);

