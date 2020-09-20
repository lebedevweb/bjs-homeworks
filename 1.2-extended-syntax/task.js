"use strict";
function getResult(a=1,b=1,c=1){
  let d = Math.pow(b,2) - (4 * a * c),
      firstSquareRoot = (- b + Math.sqrt(d)) / (2 * a),
      secondSquareRoot = (- b - Math.sqrt(d)) / (2 * a),
      squareRoots = [];

    if (d === 0) {
      squareRoots.push(firstSquareRoot);
    } else if (d > 0) {
      squareRoots.push(firstSquareRoot);
      squareRoots.push(secondSquareRoot);
    }

  return squareRoots;
}

function getAverageMark(marks){
    let lotMarks = marks.length,
        summMarks = 0,
        averageMarks;

    if (lotMarks === 0) {
      return lotMarks;
    } else {
      if (lotMarks > 5) {
        console.log(lotMarks);
        marks = marks.slice(0, 5);
        lotMarks = marks.length;
      }
      for (let i = 0; i < lotMarks; i++) {
        summMarks = summMarks + marks[i];
      }
      averageMarks = summMarks / lotMarks;
      return averageMarks;
    }
}

function askDrink(name,dateOfBirthday){
    let dateOfBirth = dateOfBirthday.getFullYear(),
        currentYear = new Date().getFullYear(),
        age = currentYear - dateOfBirth;

    if (age >= 18 ) {
      return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}