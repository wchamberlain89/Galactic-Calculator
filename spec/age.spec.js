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
	// it("Calculate Venus User Based on Birthdate", function(){
	// 	expect(user.venus()).toEqual(461);
	// });

	// it("Calculate Mars User Based on Birthdate", function(){
	// 	expect(user.mars()).toEqual(151);
	// });

	// it("Calculate Jupiter User Based on Birthdate", function(){
	// 	expect(user.jupiter()).toEqual(21);
	// });

});

