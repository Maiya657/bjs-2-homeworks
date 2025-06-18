class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(state) {
		if (state <= 0) {
			state = 0;
		} else if (state >= 100) {
			state = 100;
		}
		this._state = state;
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].hasOwnProperty(type) && this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			const book = this.books[i];
			if (book !== undefined && book.name === bookName) {
				delete this.books[i];
				return book;
			}
		}
		return null;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new NovelBook("Сомерсет Моэм", "Луна и грош", 1919, 288));

console.log(library.findBookBy("name", "Луна и грош"));
console.log(library.findBookBy("name", "Демиан"));
console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1919).name);

console.log(library.giveBookByName("Властелин колец"));

const book = library.giveBookByName("Пикник на обочине");
book.state = 30;
book.fix();
library.addBook(book);

class Student {
  constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subject) {
    if(mark >= 2 && mark <= 5) {
      if(!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if(!this.marks.hasOwnProperty(subject)) {
      return 0;
    }
    return this.marks[subject].reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if(subjects.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      sum += this.getAverageBySubject(subject);
    }
    return sum / subjects.length;
  }
}