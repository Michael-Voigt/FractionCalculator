class primeNumber {
	constructor() {
		this.primeArray = new Array();
	}

	next() {
		if (this.primeArray.length == 0) {
			// the first prime number is 2
			this.primeArray.push(2);
			return (2);
		} else if (this.primeArray.length == 1) {
			// the second prime number is 3
			this.primeArray.push(3);
			return (3);
		} else {
			// start with biggest prime number calculated so far
			let prime = this.primeArray[this.primeArray.length - 1];
			let isPrime = true;

			// calculate next prime number
			do {
				let index = 0;

				isPrime = true;
				// only an odd number can be a prime number -> add 2
				prime = prime + 2;

				// Is prime a prime number?
				while ((index < this.primeArray.length) && isPrime) {
					if ((prime % this.primeArray[index]) == 0) {
						isPrime = false;
					} else {
						index++;
					}
				}
			} while (isPrime == false);

			this.primeArray.push(prime);
			return (prime);
		}
	}
}