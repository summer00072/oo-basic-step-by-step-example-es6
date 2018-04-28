import Person from "../../src/practice_6/person.js";

class Student extends Person {
	constructor(name, age, Class) {
		super(name, age);
		this.class = Class;
	};
	introduce() {
		return `${super.introduce()} I am a Student. I am at Class ${this.class}.`;
	};
};

module.exports = Student;


