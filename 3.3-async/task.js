'use strict'
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, fn, id) {
    if(isNaN(id) || id == null) {
      throw new Error("Неверный параметр");
    }

    if(this.alarmCollection.some(item => item.id === id)) {
      return console.error("Такое значение уже существует");
    }

    this.alarmCollection.push({time, fn, id});
  }

  removeClock(id) {
    if(this.alarmCollection.find(item => item.id === id)) {
      this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id === id), 1);
      return true;
    }
    else
      return false;

  }

  getCurrentFormattedTime() {
    const time = new Date();
    let hour = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    let minute = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    return `${hour}:${minute}`;
  }

  start() {
    const checkClock = (call) => {
      if(this.getCurrentFormattedTime() === call.time) {
        return call.fn();
      }
    }
    if (!this.timerId) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
    }
  }

  stop() {
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(call => console.log(`${call.id}, time: ${call.time}`))
  }

  clearAlarms() {
    this.stop();
    //   clearInterval(this.timerId);
    this.alarmCollection = [];
  }
}

function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock('21:22', () => console.log('Подъем!'), 1);
  alarm.addClock('21:23', () => {console.log('Вставай уже!'); alarm.removeClock(2)}, 2);
  alarm.addClock('21:24', () => {console.log('Ну и спи дальше :('); alarm.clearAlarms(); alarm.printAlarms()}, 3);
  alarm.printAlarms();
  alarm.start();
}