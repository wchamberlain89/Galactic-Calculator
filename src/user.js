import {lifeExpectancy} from './lifeExpectancy.js'



export class User {
	constructor(birthdate, gender, country) {
		this.birthdate = new Date(birthdate);
		this.gender = gender;
		this.country = country;
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

	getLifeExpectancy() {
		return lifeExpectancy[this.country][this.gender];
	}
}