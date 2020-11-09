import libraryItems from '../templates/library.hbs'

const refs = {
  homePageBtn: document.querySelector('#home'),
  homePageList: document.querySelector('.main__list'),
  libraryBtn: document.querySelector('#mylibrary'),
  libraryList: document.querySelector('.library__list'),
}


function markupLibrary() {
  refs.homePageList.innerHTML = '';
  refs.libraryList.insertAdjacentHTML('beforeend', libraryItems());
  // return 
}

refs.libraryBtn.addEventListener('click', markupLibrary);

