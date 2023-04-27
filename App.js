function getLuckyBirthdays(birthday_date) {
  const [dd, mm] = birthday_date.split('-');
  const monthIndex = +mm - 1;
  const curYear = new Date().getFullYear();
  const LUCKY_DAYS = {
    0: 'Sun',
    5: 'Fri',
    6: 'Sat',
  };
  let luckyDates = [];
  for (let i = curYear; i < curYear + 50; i++) {
    const bday = new Date(i, monthIndex, dd);
    const luckyDay = LUCKY_DAYS[bday.getDay()];
    const date = bday.getDate();
    if (luckyDay && date == dd) {
      luckyDates.push(`${luckyDay}-${i}`);
    }
  }
  return luckyDates;
}

module.exports = getLuckyBirthdays;
