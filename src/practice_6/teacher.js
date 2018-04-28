import Person from "../../src/practice_6/person.js";

class Teacher extends Person {
	constructor(name, age, Class) {
		super(name, age);
		this.class = Class;	
	};
	introduce() {
		if (!this.class) {
			return `${super.introduce()} I am a Teacher. I teach No Class.`;
		} else {
			return `${super.introduce()} I am a Teacher. I teach Class ${this.class}.`;
		}		
	};
};

module.exports = Teacher;

