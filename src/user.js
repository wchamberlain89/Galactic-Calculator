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
		return Math.floor(this.ageMs()/31536000000);
	}

	mercuryAge() {
		var currentDate = new Date();
		var diff = currentDate - this.birthdate;
		return Math.floor(this.ageMs()/31536000000/.24);
	}
}