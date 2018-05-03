import Person from "../../src/practice_8/person.js";
//import Student from "../../src/practice_7/student.js";
class Teacher extends Person {
	constructor(id, name, age, Class) {
		super(id, name, age);
		this.class = Class;	
	};
	introduce() {
		if (!this.class) {
			return `${super.introduce()} I am a Teacher. I teach No Class.`;
		} else {
			return `${super.introduce()} I am a Teacher. I teach Class ${this.class.number}.`;
		}		
	};
};

module.exports = Teacher;



