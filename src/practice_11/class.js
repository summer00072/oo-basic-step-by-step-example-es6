class Class {
	constructor(number) {
		this.number = number;
	};
	getDisplayName() {
		return `Class ${this.number}`;
	};
	registerAssignLeaderListener(teacher) {
		this.teacherOne = teacher;	
	};
	registerJoinListener(teacher) {
		this.teacherTwo = teacher;
    };
	assignLeader(student) {
		if (student.class.number == this.number) {
			this.leader = student;
			if (this.teacherOne && this.teacherOne.classes.indexOf(this.leader.class) != -1 ) {
				console.log(`I am Tom. I know ${student.name} become Leader of Class ${student.class.number}.`);
			}
		}
		 else {
			console.log(`It is not one of us.`);
		}
	};
	appendMember(student) {
		student.class = this;
		if (this.teacherTwo && this.teacherTwo.classes.indexOf(student.class) != -1 ) {
			console.log(`I am Tom. I know ${student.name} has joined Class ${student.class.number}.`);
		}				
	};
};
module.exports = Class;



