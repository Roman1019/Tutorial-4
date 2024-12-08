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

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const notification = document.querySelector('.js-alert');

// showNotification();

// function onNotitfication() {
//   hideNotitfication();
//   clearInterval(timeoutId);
// }

// function showNotification() {
//   notification.classList.add('is-visible');
//   notification.addEventListener('click', onNotitfication);
//   timeoutId = setTimeout(() => {
//     hideNotitfication();
//     console.log('Закрито');
//   }, NOTIFICATION_DELAY);
// }

// function hideNotitfication() {
//   notification.classList.remove('is-visible');
//   notification.removeEventListener('click', onNotitfication);
// }

// class Timer {
//   constructor({ onTick }) {
//     this.onTick = onTick;
//     this.isActive = false;
//     this.intervalId = null;

//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive === true) {
//       return;
//     }
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//     this.isActive = true;

//     const startTime = Date.now();

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const diff = currentTime - startTime;
//       const time = this.getTimeComponents(diff);
//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     if (this.isActive === false) {
//       return;
//     }
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }

//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const startBtn = document.querySelector('button[data-action-start]');
// const stopBtn = document.querySelector('button[data-action-stop]');
// const clockface = document.querySelector('.js-clockface');

// const timer = new Timer({
//   onTick: updateClockface,
// });

// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockface({ hours, mins, secs }) {
//   clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// const promise = new Promise((resolve, reject) => {
//   const isPromise = Math.random() > 0.5;

//   setTimeout(() => {
//     if (isPromise) {
//       resolve('Успішно');
//     } else {
//       reject('Неуспішно');
//     }
//   }, 1000);
// });

// console.log(promise);

// promise
//   .then(value => {
//     console.log(`✅${value}`);
//   })
//   .then(value => {
//     console.log(`1${value}`);
//   })
//   .then(value => {
//     console.log(`2${value}`);
//   })
//   .catch(value => {
//     console.log(`❌ ${value}`);
//   })
//   .finally(() => {
//     console.log('Проміс завершився');
//   });

// const makeOrder = dish => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Ваше замовлення: ${dish}`);
//       }

//       reject('❌ Упс, у нас закінчилися продукти');
//     }, 1000);
//   });
// };

// makeOrder('пиріжок')
//   .then(result => {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   })
//   .catch(error => {
//     console.log('onMakeOrderError');
//     console.log(error);
//   });

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStartGame);

function handleStartGame({ target }) {
  target.disabled = true;
  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const isPromiceFullfilled = Math.random() > 0.5;

      if (isPromiceFullfilled) {
        resolve('😝');
      } else {
        reject('😈');
      }
    });
  });

  Promise.allSettled(promises).then(items => {
    const isWinner =
      items.every(({ status }) => status === 'fulfilled') ||
      items.every(({ status }) => status === 'rejected');

    items.forEach((item, i) => {
      container.children[i].textContent = '';
      result.textContent = '';

      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;
      }, 1000 * (i + 1));
    });
    setTimeout(() => {
      target.disabled = false;
      result.textContent = isWinner ? 'Winner' : 'Loser';
    }, container.children.length * 1000);
  });
}
