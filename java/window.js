const buttonElem = document.querySelector('.menu-open-btn');
const modalElem = document.querySelector('.mob-menu');

modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
  const target = event.target;

  let span = document.getElementsByClassName("menu-close-btn")[0];

  setTimeout(() => {
    modalElem.style.visibility = 'hidden';
  }, 300);
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
}

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);





const button = document.querySelector('.loved-btn');
const modal = document.querySelector('.backdrop');

modal.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

const close = event => {
  const target = event.target;

  if(target === modal || target.closest('.modal-btn')) {

    modal.style.opacity = 0;
  }

  setTimeout(() => {
    modal.style.visibility = 'hidden';
  }, 300);
}

const open = () => {
  modal.style.visibility = 'visible';
  modal.style.opacity = 1;
}

button.addEventListener('click', open);
modal.addEventListener('click', close);


// $(function () {

//   $('.open').click(function(){
//     if ($(".modal").hasClass("is open")) {
//       ('.modal').removeClass('is open');
//     }
//       else
//       {
//         $(".modal").addClass("is open");
//       }
//     });
  
//     $('.close').click(function(){
//       $('.modal').removeClass('is open');
//     });
// });









