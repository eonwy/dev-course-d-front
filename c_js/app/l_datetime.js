import dayjs from 'dayjs'

const studyDateTime = () => {
  const now = new Date();
  console.log('y', now.getFullYear());
  console.log('m', now.getMonth() + 1);
  console.log('d', now.getDate());
  console.log('m', now.getHours());
  console.log('d', now.getMinutes());
  console.log('m', now.getSeconds());
  console.log('d', now.getMilliseconds());
  console.log('day', now.getDay());
}

studyDateTime();

const studyDayjs = () => {
  const now = dayjs();
  console.log('y', now.year());
  console.log('m', now.month());
  console.log('d', now.year());
  console.log('h', now.hour());
  console.log('m', now.minute());
  console.log('s', now.second());
  console.log('d', now.day());
}

studyDayjs();