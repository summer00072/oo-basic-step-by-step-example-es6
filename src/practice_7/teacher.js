import Person from "../../src/practice_7/person.js";
//import Student from "../../src/practice_7/student.js";
class Teacher extends Person {
	constructor(name, age, Class) {
		super(name, age);
		this.class = Class;	
	};
	introduce() {
		if (!this.class) {
			return `${super.introduce()} I am a Teacher. I teach No Class.`;
		} else {
			return `${super.introduce()} I am a Teacher. I teach Class ${this.class.number}.`;
		}		
	};
	introduceWith(student) {
		if (this.class.number == student.class.number) {
			return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
		} else {
			return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
		}
	}
};

module.exports = Teacher;


