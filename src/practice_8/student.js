import Person from "../../src/practice_8/person.js";
//import Person from "../../src/practice_6/person.js";
class Student extends Person {
	constructor(id, name, age, Class) {
		super(id, name, age);
		this.class = Class;
	};
	introduce() {
		if (this.class.leader && this.class.leader.name == this.name) {
			return `${super.introduce()} I am a Student. I am Leader of ${this.class.getDisplayName()}.`;
		} else {
			return `${super.introduce()} I am a Student. I am at Class ${this.class.number}.`;
		}		
	};
};
module.exports = Student;
