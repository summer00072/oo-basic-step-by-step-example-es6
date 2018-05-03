import Person from "../../src/practice_11/person.js";
//import Student from "../../src/practice_7/student.js";
class Teacher extends Person {
	constructor(id, name, age, Classes) {
		super(id, name, age);
		if (Classes) {
			this.classes = [];
			for (var i = 0; i < Classes.length; i++) {
			this.classes.push(Classes[i]);
		}
		}
		
			
	};
	introduce() {
		if (!this.classes) {
			return `${super.introduce()} I am a Teacher. I teach No Class.`;
		} else {
			var classnumber = '';
			for (var i = 0; i < this.classes.length-1; i++) {
			classnumber += `${this.classes[i].number}, `;
		}
			classnumber += `${this.classes[this.classes.length-1].number}`;
			return `${super.introduce()} I am a Teacher. I teach Class ${classnumber}.`;
		}		
	};
	isTeaching(student) {
		for (var i = 0; i < this.classes.length-1; i++) {
			if (student.class.number == this.classes[i].number) {
				return true;
			}
		}
		return false;
	}

};

module.exports = Teacher;






