import Person from "../../src/practice_7/person.js";
//import Student from "../../src/practice_7/student.js";
class Teacher extends Person {
	constructor(name, age, Class) {
		super(name, age);
		this.class = Class.number;	
	};
	introduce() {
		if (!this.class) {
			return `${super.introduce()} I am a Teacher. I teach No Class.`;
		} else {
			return `${super.introduce()} I am a Teacher. I teach Class ${this.class}.`;
		}		
	};
	introduceWith(student) {
		if (this.class == student.class) {
			return `${super.introduce()} I am a Teacher. I teach ${student.name}.;
		} else {
			return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.;
		}
	}
};

module.exports = Teacher;


