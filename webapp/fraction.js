class fraction {
	constructor() {
		this.number = 0;
		this.enumerator = 0;
		this.denominator = 1;
	}

	input(string) {
		this.number = prompt(string + ' (Number)', 0);
		this.enumerator = prompt(string + ' (Enumerator)', 100);
		this.denominator = prompt(string + ' (Denominator)', 100);
	}

	output() {
		if (this.enumerator == 0) {
			alert(this.number);
		} else {
			if (this.number == 0) {
				alert(this.enumerator + '/' + this.denominator);
			} else {
				alert(this.number + ' ' + this.enumerator + '/' + this.denominator);
			}
		}
	}

	reduce() {
		let upperLimit = Math.sqrt(Math.max(this.enumerator, this.denominator));
		let prime = new primeNumber();
		let devisor = prime.next();

		// let debug = 0;
		// debug = prompt('debug', 0);
		// if (debug != 0) {
		// 	for (let p = 1; p < 10; p++) {
		// 		alert(p + ". Prime Number is " + prime.next());
		// 	}
		// }

		while (devisor <= upperLimit) {
			// can the fraction be shortened by the divisor ?
			if (((this.enumerator % devisor) == 0) && ((this.denominator % devisor) == 0)) {
				this.enumerator = this.enumerator / devisor;
				this.denominator = this.denominator / devisor;
				// a.push(devisor);
				upperLimit = Math.sqrt(Math.max(this.enumerator, this.denominator));
			} else {
				devisor = prime.next();
			}
		}
		devisor = Math.min(this.enumerator, this.denominator);
		if (((this.enumerator % devisor) == 0) && ((this.denominator % devisor) == 0)) {
			this.enumerator = this.enumerator / devisor;
			this.denominator = this.denominator / devisor;
		}
	}

	convertToMixed() {
		if (Number(this.enumerator) >= Number(this.denominator)) {
			let remainder = (this.enumerator % this.denominator);
			this.number = (this.enumerator - remainder) / this.denominator;
			this.enumerator = this.enumerator - this.number * this.denominator;
		}
	}

	convertToNonMixed() {
		this.enumerator = this.enumerator + this.number * this.denominator;
		this.number = 0;
	}

	add(fraction1, fraction2) {
		this.number = fraction1.number + fraction2.number;
		this.enumerator = fraction1.enumerator * fraction2.denominator + fraction2.enumerator * fraction1.denominator;
		this.denominator = fraction1.denominator * fraction2.denominator;
	}

	substract(fraction1, fraction2) {
		this.number = fraction1.number - fraction2.number;
		this.enumerator = fraction1.enumerator * fraction2.denominator - fraction2.enumerator * fraction1.denominator;
		this.denominator = fraction1.denominator * fraction2.denominator;
	}

	multiply(fraction1, fraction2) {
		this.number = fraction1.number + fraction2.number;
		this.enumerator = fraction1.enumerator * fraction2.denominator + fraction2.enumerator * fraction1.denominator;
		this.denominator = fraction1.denominator * fraction2.denominator;
	}
}