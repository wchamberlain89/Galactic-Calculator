import { User } from "./../src/user.js";


describe("Years :", function(){
	const user = new User("1989-04-11");
	console.log(user);
	
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

