const months = [
  {
    name: 'January',
    num: 1,
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  },
  {
    name: 'February',
    num: 2,
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
  },
  {
    name: 'March',
    num: 3,
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  },
  {
    name: 'April',
    num: 4,
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  }
];
let events = [
  {
    month: 'January',
    day: 5,
    year: 2017,
    participant: 'John Galt',
    description: 'some very detailed description'
  },
  {
    month: 'January',
    day: 16,
    year: 2017,
    participant: 'Jean Michel Jarre',
    description: 'new consert bla bla bla bla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias debitis dolor eius enim error illo labore nulla numquam, placeat porro quam quo soluta unde ut vel voluptas? Porro, vel.'
  }
];

let calendar = new Calendar('calendar', months, events);
calendar.init();