class fraction {
	constructor() {
		this.enumerator = 0;
		this.denominator = 1;
	}

	input(string) {
		let number = prompt(string + ' (Number)', 0);
		this.enumerator = prompt(string + ' (Enumerator)', 100);
		this.denominator = prompt(string + ' (Denominator)', 100);
		if (number != 0) {
			this.enumerator = Number(this.enumerator) + Number(number) * Number(this.denominator);
		}
		this.reduce();
	}

	output() {
		// Convert to mixed fraction
		let number = 0;
		if (Number(this.enumerator) >= Number(this.denominator)) {
			number = (this.enumerator - (this.enumerator % this.denominator)) / this.denominator;
			this.enumerator = this.enumerator - number * this.denominator;
		}

		// output fraction
		if (this.enumerator == 0) {
			alert(number);
		} else {
			if (number == 0) {
				alert(this.enumerator + '/' + this.denominator);
			} else {
				alert(number + ' ' + this.enumerator + '/' + this.denominator);
			}
		}
	}

	reduce() {
		let upperLimit = Math.sqrt(Math.max(this.enumerator, this.denominator));
		let prime = new primeNumber();
		let devisor = prime.next();

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

	add(fraction1, fraction2) {
		this.enumerator = fraction1.enumerator * fraction2.denominator + fraction2.enumerator * fraction1.denominator;
		this.denominator = fraction1.denominator * fraction2.denominator;
		this.reduce();
	}

	substract(fraction1, fraction2) {
		this.enumerator = fraction1.enumerator * fraction2.denominator - fraction2.enumerator * fraction1.denominator;
		this.denominator = fraction1.denominator * fraction2.denominator;
		this.reduce();
	}

	multiply(fraction1, fraction2) {
		this.enumerator = fraction1.enumerator * fraction2.enumerator;
		this.denominator = fraction1.denominator * fraction2.denominator;
		this.reduce();
	}

	devide(fraction1, fraction2) {
		this.enumerator = fraction1.enumerator * fraction2.denominator;
		this.denominator = fraction1.denominator * fraction2.enumerator;
		this.reduce();
	}
}