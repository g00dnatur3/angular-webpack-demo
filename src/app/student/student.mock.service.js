export default class StudentService {
	constructor() {
		this.idGenerator = 0;
		this.model = [];
	}

	get(onComplete) {
		onComplete(null, this.model);
	}

	post(student, onComplete) {
		student.id = this.idGenerator++;
		this.model.push(student);
		onComplete(null, student);
	}

	isEmailUnique(email, onComplete) {
		const unique = this.model.every(function(st) {
			if (st.email === email) return false;
			else return true;
		})
		onComplete(null, {unique: unique});
	}
}
