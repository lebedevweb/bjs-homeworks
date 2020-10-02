"use strict";
//////////////////////
// Решение задачи 1 //
//////////////////////

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    this._state = number;
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    }
  }

  get state() {
    return this._state;
  }
}

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//
// console.log(sherlock.releaseDate);
// console.log(sherlock.state);
// sherlock.fix();
// console.log(sherlock.state);

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
//
// console.log(picknick.author);
// picknick.state = 10;
// console.log(picknick.state);
// picknick.fix();
// console.log(picknick.state);

//////////////////////
// Решение задачи 2 //
//////////////////////

class Library {
  constructor(name,books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        let removed = this.books.splice(i, 1);
        return removed[0];
      }
    }
    return null;
  }
}

// const library = new Library("Библиотека имени Ленина");
//
// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));
//
// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
//
// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
//library.giveBookByName("Машина времени")
// console.log(library.giveBookByName("Машина времени"));
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
// console.log(library);

//////////////////////
// Решение задачи 3 //
//////////////////////

class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  };

  getName() {
    return this.name;
  };

  addGrade(grade, subject) {
    if (grade <= 5 && grade >= 1) {
      if (this.subjects[subject] != undefined) {
        this.subjects[subject].push(grade);
      } else {
        this.subjects[subject] = [grade];
      }
      return this.subjects[subject].length;
    } else {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n${this.score[subject].length}`;
    }
  }

  getAverageBySubject(subject) {
    if (this.subjects[subject] != undefined) {
      let sum = 0, average = 0, total = this.subjects[subject].length;

      for (let i = 0; i < total; i++) {
        sum += this.subjects[subject][i];
        average = sum / total;
      }

      return average;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
    let totalAverage = 0, cont = 0, totalScore = 0;
    for (let prop in this.subjects) {
      cont ++;
      totalScore += this.getAverageBySubject(prop);
      totalAverage = totalScore / cont;
    }
    return totalAverage
  }
}

// const log = new StudentLog('Олег Никифоров');
//
// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');
//
// console.log(log.getTotalAverage());
// console.log(log.getAverageBySubject('geometry'));
// console.log(log.subjects.algebra);