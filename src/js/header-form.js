const refsHeader = {
    formRef: document.querySelector('.header__form'),
    formInputRef: document.querySelector('.header__form-input'),
    btnSearchRef: document.querySelector('.header__btn-search'),
    warningParagraphRef: document.querySelector('.header__warning-paragraph')
}

refsHeader.formRef.addEventListener('submit', headerBtnSearch)

function headerBtnSearch(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.query.value;
    // inputValue === '' ? 
    //     refsHeader.warningParagraphRef.classList.add('js-header-is-hidden') :
    //     refsHeader.warningParagraphRef.classList.remove('js-header-is-hidden');
        
    if (inputValue === '') {
        refsHeader.warningParagraphRef.classList.add('js-header-is-hidden');
            return
    } else {
        refsHeader.warningParagraphRef.classList.remove('js-header-is-hidden');
    }
}