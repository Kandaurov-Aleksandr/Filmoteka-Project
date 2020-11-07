import './style.scss';
import './js/header-form'
import './js/preloader'


import libraryItems from './templates/library.hbs'
import homePage from './templates/homePage.hbs'

const refs = {
  homePageBtn: document.querySelector('#home'),
  homePageList: document.querySelector('.main__list'),
  libraryBtn: document.querySelector('#mylibrary'),
  libraryList: document.querySelector('.library__list'),
  mainPage: document.querySelector('.main')
}


function markupLibrary(arr) {
  refs.homePageList.innerHTML = '';
  refs.mainPage.classList.add('js-display-none')

  refs.libraryList.insertAdjacentHTML('beforeend', libraryItems(arr));
}

function markupHomePage(arr) {
  refs.libraryList.innerHTML = '';

  refs.mainPage.classList.remove('js-display-none')
  refs.libraryList.classList.add('js-display-none')
  renderHomePage();
}

function renderHomePage(arr) {
  refs.homePageList.insertAdjacentHTML('beforeend', homePage(arr));
}

refs.homePageBtn.addEventListener('click', markupHomePage);
refs.libraryBtn.addEventListener('click', markupLibrary);

