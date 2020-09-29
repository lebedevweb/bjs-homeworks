"use strict"
// String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
  const str1 = this.replace(/[\s.,%+-]/g, '').toLowerCase();
  const str2 = str1.split('').reverse().join('');
  return str1 === str2;
}

//Решение задачи 2
function getAverageMark(marks) {
  let summ = 0, roundedAverage = 0;

  if (marks.length > 0) {
    for (let i = 0; i < marks.length; i++) {
      summ += marks[i]
    }
    roundedAverage = Math.round(summ / marks.length);
  }

  return roundedAverage;
}

//Решение задачи 3
function checkBirthday(birthday) {
  let now = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
      birthDay = new Date(birthday);

      birthday = birthDay.getTime();

  let diff = now - birthday,
      age = diff / (1000 * 60 * 60 * 24 * 365),
      verdict = age > 18;

  return verdict
}