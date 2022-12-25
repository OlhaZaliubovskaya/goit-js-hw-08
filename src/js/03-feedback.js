import throttle from 'lodash.throttle';

// знаходімо форму 
const feedbackForm = document.querySelector('.feedback-form');

// додаємо слухача 
feedbackForm.addEventListener('input', throttle(localData, 500));

// знаходімо вхідні дані
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

//  встановити дані з вхідних даних у локальне сховище
function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// функція для отримання вхідних даних із локального сховища
function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

// запускаємо
getLocalData();

// запускаємо та надсілаємо
feedbackForm.addEventListener('submit', submitData);

// запустити функцію під час надсилання та вхідних даних журналу консолі
function submitData(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
