'use strict';
//////////////////////
// Решение задачи 1 //
//////////////////////

function parseCount(value) {
 const parse = Number.parseInt(value);
 if ( isNaN(parse) ) {
   throw new Error('Невалидное значение');
 } else {
   return parse;
 }
}

// console.log(parseCount('a'));

function validateCount(value) {
  try {
    return parseCount(value);
  } catch(err) {
    return err;
  }
}

// console.log(validateCount('56'));
// console.log(validateCount('один'));

//////////////////////
// Решение задачи 2 //
//////////////////////

class Triangle {
  constructor(a,b,c) {
    if ((a+b) < c || (b+c) < a || (c+a) < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter () {
      return this.a + this.b + this.c;
  }

  getArea () {
      let p = this.getPerimeter() / 2;
      let multiply = p*(p-this.a)*(p-this.b)*(p-this.c);
      return Number(Math.sqrt(multiply).toFixed(3));
  }
}

// let triangle = new Triangle(3,4,50);
// console.log(triangle.getPerimeter());
// console.log(triangle.getArea());
// console.log(triangle);

function getTriangle(a,b,c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
      return {
        getPerimeter() {
          return 'Ошибка! Треугольник не существует';
        },

        getArea() {
          return 'Ошибка! Треугольник не существует';
        }
      }
  }
}

const triangle = getTriangle(3,4,50);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());