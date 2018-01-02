class fraction {
	constructor() {
		this.enumerator = 0;
		this.denominator = 1;
	}

	reduce() {
		let upperLimit = Math.sqrt(Math.max(this.enumerator, this.denominator));
		let prime = new primeNumber();
		let devisor = prime.next();

		while (devisor <= upperLimit) {
			// can the fraction be shortened by the prime number stored in divisor ?
			if (((this.enumerator % devisor) == 0) && ((this.denominator % devisor) == 0)) {
				this.enumerator = this.enumerator / devisor;
				this.denominator = this.denominator / devisor;
				upperLimit = Math.sqrt(Math.max(this.enumerator, this.denominator));
			} else {
				devisor = prime.next();
			}
		}

		// can the fraction be shortened by the minimum out of enumerator and denominator ?
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