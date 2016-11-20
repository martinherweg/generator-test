import moment from 'moment';

export function begin(date) {
  return moment(date, 'DD.MM.YYYY').format('DD. MMMM');
}

export function till(date) {
  moment.locale('de');
  return moment(date, 'DD.MM.YYYY hh:mm').endOf('minute').toNow(true);
}

export function compare(date) {
  return moment(date, 'DD.MM.YYYY').format('DDMM');
}

export function compareHours(date) {
  return moment(date, 'DD.MM.YYYY hh:mm').format('DDMMhhmm');
}