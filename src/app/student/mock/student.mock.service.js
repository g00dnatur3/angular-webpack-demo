import angular from 'angular';

export default class StudentService {
	constructor() {
		console.log('Mock StudentService Created');
		this.idGenerator = 0;
		this.model = [];
	}

	get(onComplete) {
		onComplete(null, angular.copy(this.model));
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
