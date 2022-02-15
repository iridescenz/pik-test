import moment from 'moment';
import nightBackground from '../style/images/pik-night.jpg';
import dayBackground from '../style/images/pik-day.jpg';

var hour = moment().hour();

export const timeOfDay = () => {
  if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour < 6)) {
    return 'night';
  }
  if (hour >= 6 && hour <= 17) {
    return 'day';
  }
};

export const timeBasedBackground = () => {
  const time = timeOfDay();
  if (time === 'day') {
    return dayBackground;
  }
  if (time === 'night') {
    return nightBackground;
  }
};

export const greeting = () => {
  if (hour >= 0 && hour < 6) {
    return 'Доброй ночи';
  }
  if (hour >= 6 && hour < 12) {
    return 'Доброе утро';
  }

  if (hour >= 12 && hour < 18) {
    return 'Добрый день';
  }
  if (hour >= 18 && hour <= 24) {
    return 'Добрый вечер';
  }
};

export const flatCases = (num) => {
  const lastNum = num.toString().split('').reverse()[0]
  if (num > 10 && num <= 20 ) {
    return `Забронировать ${num} помещений`;
  }
  if (lastNum == 1) {
    return `Забронировать ${num} помещение`;
  }
  if (lastNum > 1 && lastNum < 5) {
    return `Забронировать ${num} помещения`;
  }
  if (lastNum > 5) {
    return `Забронировать ${num} помещений`;
  }
  return `Забронировать ${num} помещений`;
};

