export class User {
	constructor(birthdate) {
		this.birthdate = new Date(birthdate);
	}

	age() { 
		var currentDate = new Date();
		var diff = currentDate - this.birthdate;
		return Math.floor(diff/31536000000);
	}
}