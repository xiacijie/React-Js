"use strict";

class Human{
	constructor(){
		this.gender = 'male';
	}

	printGender(){
		console.log(this.gender);
	}
}

class Person extends Human{
	constructor(){
		super(); //excute the father's constructor
		this.name = "xia";

	}

	printMyname(){
		console.log(this.name);
	}
}

var person = new Person();
person.printGender();