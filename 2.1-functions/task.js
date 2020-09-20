"use strict"

// Решение задачи 1
function getSolutions(a=1,b=1,c=1) {
  let d = Math.pow(b,2) - (4 * a * c);
  let x1, x2, result = {D: d, roots:[]};

  if (d === 0) {
    x1 = (-b) / (2 * a);
    result.roots.push(x1);
  } else if (d > 0) {
    x1 = (- b + Math.sqrt(d)) / (2 * a);
    x2 = (- b - Math.sqrt(d)) / (2 * a);
    result.roots.push(x1);
    result.roots.push(x2);
  }
  return result;
}

function showSolutionsMessage(a=1,b=1,c=1) {
  const result = getSolutions(a,b,c);
  let d = result.D,
    showEquation = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`,
    showDiscriminant = `Значение дискриминанта: ${d}`,
    showResult;

  if (d < 0) {
    showResult = `Уравнение не имеет вещественных корней`;
  } else if (d == 0) {
    showResult = `Уравнение имеет один корень X\u2081 = ${result.roots}`;
  } else if (d > 0) {
    showResult = `Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`;
  }

  console.log(`${showEquation}\n${showDiscriminant}\n${showResult}`);
}

// showSolutionsMessage(1,2,3);
// showSolutionsMessage(7,20,-3);
// showSolutionsMessage(2,4,2);

// Решение задачи 2
function getAverageMark(marks) {
  if (marks.length > 0) {
    return marks.reduce((previousValue, currentValue) => currentValue += previousValue) / marks.length;
  } else {
    return 0;
  }
};

function getAverageScore(data) {
  if (Object.keys(data).length > 0 || data.length > 0) {
    let newArray = {}
    let averageScore = 0
    let sum = 0
    let array =  Object.entries(data).reduce(function(previousValue, currentValue) {
      averageScore = getAverageMark(currentValue[1]);
      sum += averageScore;
      return newArray[Object.values(currentValue)[0]] = averageScore;
    }, 0);
    newArray['average'] = (sum / Object.keys(newArray).length)
    return newArray;
  }
  else if (Object.keys(data).length == 0) {
    return {'average': 0}
  }
  else {
    return 0;
  }
};

// getAverageScore({
//   algebra : [2,4,5,2,3,4],
//   geometry : [2,4,5],
//   russian : [3, 3, 4, 5],
//   physics : [5, 5],
//   music : [ 2, 2, 5],
//   english : [4, 4, 3, 3],
//   poetry : [5, 3, 4],
//   chemistry : [2],
//   french : [4, 4]
// });


// Решение задачи 3
function getDecodedValue(secret) {
  let result;

  if (secret === 1) {
    result = 'Эмильо';
  } else if (secret === 0) {
    result = 'Родриго';
  }
  return result;
}

function getPersonData(secretData) {
  let a = getDecodedValue(secretData.aaa),
      b = getDecodedValue(secretData.bbb);
  return {firstName: a, lastName: b};
}

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));