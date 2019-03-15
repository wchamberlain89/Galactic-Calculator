import { User } from "./../src/user.js";
import { lifeExpectancy } from "./../src/lifeExpectancy.js";

describe("Years :", function(){
	const user = new User("1989-04-11", "male", "unitedstates");
	
	it("Calculate Earth User Based on Birthdate", function(){
		expect(user.age()).toEqual(29);
	});

	it("Calculate Mecury User Based on Birthdate", function(){
		expect(user.mercuryAge()).toEqual(124);
	}); 
	
	it("Calculate Venus User Based on Birthdate", function(){
		expect(user.venusAge()).toEqual(48);
	});

	it("Calculate Mars User Based on Birthdate", function(){
		expect(user.marsAge()).toEqual(15);
	});

	it("Calculate Jupiter User Based on Birthdate", function(){
		expect(user.jupiterAge()).toEqual(2);
	});

});

describe("Life Expectancy - Male", function(){
	
	const countries = Object.keys(lifeExpectancy);

	countries.forEach(function(country, index){
		

		let	user = new User("1989-04-11", "male", country);

		it("Should return a number for the life expectancy for " + country, function(){
			expect(typeof user.lifeExpectancy).toEqual("number");
		});

		it("Should return correct life expectancy for - " + country, function(){
			expect(user.lifeExpectancy).toEqual(lifeExpectancy[country].male);
		});

		it("Should return life expectancy no greater than 83 ", function(){
			expect(user.lifeExpectancy).toBeLessThan(84);
		});

		it("Should return life expectancy no less than 64 ", function(){
			expect(user.lifeExpectancy).toBeGreaterThan(63);
		});
	});
});

describe("Life Expectancy - Female", function(){
	
	const countries = Object.keys(lifeExpectancy);

	countries.forEach(function(country, index){
		
		let	user = new User("1989-04-11", "female", country);

		it("Should return a number for the life expectancy for " + country, function(){
			expect(typeof user.lifeExpectancy).toEqual("number");
		});

		it("Should return correct life expectancy for - " + country, function(){
			expect(user.lifeExpectancy).toEqual(lifeExpectancy[country].female);
		});

		it("Should return life expectancy no greater than 86 ", function(){
			expect(user.lifeExpectancy).toBeLessThan(87);
		});

		it("Should return life expectancy no less than 76 ", function(){
			expect(user.lifeExpectancy).toBeGreaterThan(75);
		});
	});
});

describe("Life Expectancy - All", function(){
	
	const countries = Object.keys(lifeExpectancy);

	countries.forEach(function(country, index){
		
		let	user = new User("1989-04-11", "all", country);

		it("Should return a number for the life expectancy for " + country, function(){
			expect(typeof user.lifeExpectancy).toEqual("number");
		});

		it("Should return correct life expectancy for - " + country, function(){
			expect(user.lifeExpectancy).toEqual(lifeExpectancy[country].all);
		});

		it("Should return life expectancy no greater than 84 ", function(){
			expect(user.lifeExpectancy).toBeLessThan(85);
		});

		it("Should return life expectancy no less than 70 ", function(){
			expect(user.lifeExpectancy).toBeGreaterThan(69);
		});
	});
});
