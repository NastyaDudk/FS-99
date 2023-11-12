const buttonElem = document.querySelector('');
const modalElem = document.querySelector('');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;


const closeModal = event => {
    const target = event.target;

    if(target === modalElem || target.closest('')) {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;

    setTimeout(() => {
        modalElem.style.visibility = 'hidden';
    }, 300)
 }
}



const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
}

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click , closeModal');

    








