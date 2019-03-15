export class User {
	constructor(birthdate) {
		this.birthdate = new Date(birthdate);
	}

	ageMs() { 
		const currentDate = new Date();
		const diff = currentDate - this.birthdate;
		return diff;
	}

	age() { 
		return Math.floor(this.ageMs() / 31536000000);
	}

	mercuryAge() {
		return Math.floor(this.ageMs() / 31536000000 /.24);
	}

	venusAge() {
		return Math.floor(this.ageMs() / 31536000000 / .62);
	}

	marsAge() {
		return Math.floor(this.ageMs() / 31536000000 / 1.88);
	}

	jupiterAge() {
		return Math.floor(this.ageMs() / 31536000000 / 11.86);
	}
}