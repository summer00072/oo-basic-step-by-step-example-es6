class Class {
	constructor(number) {
		this.number = number;
	};
	getDisplayName() {
		return `Class ${this.number}`;
	};
	assignLeader(student) {
		if (student.class.number == this.number) {
			this.leader = student;
		}
	};
};
module.exports = Class;
