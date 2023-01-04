import throttle from 'lodash.throttle';

// знаходімо форму 
const feedbackForm = document.querySelector('.feedback-form');

// додаємо слухача 
feedbackForm.addEventListener('input', throttle(localData, 500));
const formData = {}
// знаходімо вхідні дані
// const email = document.querySelector('[name="email"]');
// const message = document.querySelector('[name="message"]');

//  встановити дані з вхідних даних у локальне сховище
function localData(e) {
  formData[e.target.name] = e.target.value
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// функція для отримання вхідних даних із локального сховища
function getLocalData() {
  let localData = localStorage.getItem('feedback-form-state');
  const data = JSON.parse(localData);

  Object.entries(data).forEach(([key, value]) => {
    feedbackForm.elements[key].value = value;
  });
  console.log(data);
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