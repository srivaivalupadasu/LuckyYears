const getLuckyBirthdays = require('./App');

const birthday = '21-09'; // Replace with your birthday
const luckyBirthdays = getLuckyBirthdays(birthday);
const luckyBirthdaysElement = document.getElementById('lucky-birthdays');
luckyBirthdays.forEach((date) => {
  const li = document.createElement('li');
  li.textContent = date;
  luckyBirthdaysElement.appendChild(li);
});
