// const LS_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// const textarea = form.elements.message;
// const email = form.elements.email;

// form.addEventListener('submit', onSubmit);
// form.addEventListener('input', onTextarea);

// function onTextarea(e) {
//   const formInput = {};
//   formInput.email = e.currentTarget.elements.email.value.trim();
//   formInput.textarea = e.currentTarget.elements.message.value.trim();

//   localStorage.setItem(LS_KEY, JSON.stringify(formInput));
// }

// function onSubmit(e) {
//   e.preventDefault();
//   const email = e.currentTarget.elements.email.value.trim();
//   const message = e.currentTarget.elements.message.value.trim();
//   if (email === '' || message === '') {
//     alert('eror');
//   } else {
//     console.log(JSON.parse(localStorage.getItem(LS_KEY)));
//     localStorage.removeItem(LS_KEY);
//   }
//   e.currentTarget.reset();
// }

// function savedText() {
//   const savedMessage = JSON.parse(localStorage.getItem(LS_KEY));
//   if (savedMessage) {
//     textarea.value = savedMessage.textarea;
//     email.value = savedMessage.email;
//     console.log(savedMessage.textarea);
//   }
// }
// savedText();
