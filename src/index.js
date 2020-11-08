import './style.scss';


import libraryItems from './templates/library.hbs'
import homePage from './templates/homePage.hbs'


const refs = {
  homePageBtn: document.querySelector('#home'),
  homePageList: document.querySelector('.main__list'),
  libraryBtn: document.querySelector('#mylibrary'),
  libraryList: document.querySelector('.library__list'),
  mainPage: document.querySelector('.main'),
  libraryPage: document.querySelector('.library'),
}

// window.addEventListener("load", ()=> {
//   return renderHomePage();
// }

function markupLibrary() {
  refs.homePageList.innerHTML = '';
  refs.mainPage.classList.add('js-display-none');
  refs.libraryPage.classList.remove('js-display-none')


  return refs.libraryList.insertAdjacentHTML('beforeend', libraryItems());
}

function markupHomePage() {
  refs.libraryList.innerHTML = '';

  refs.mainPage.classList.remove('js-display-none')
  refs.libraryPage.classList.add('js-display-none')
  return refs.homePageList.insertAdjacentHTML('beforeend', homePage());
}

refs.homePageBtn.addEventListener('click', markupHomePage);
refs.libraryBtn.addEventListener('click', markupLibrary);