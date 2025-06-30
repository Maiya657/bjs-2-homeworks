function parseCount(count) {
	let result = Number.parseFloat(count);
	if (Number.isNaN(result)) {
		throw new Error('Невалидное значение');
	}
	return result;
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch (error) {
		console.error('Невалидное значение');
    return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		return this.a + this.b + this.c;
	};

	get area() {
		const p = (this.a + this.b + this.c) * 0.5; //Вычисление полупериметра
		const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); //Вычисление площади
		return parseCount(s.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует'
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			}
		};
	}
}
