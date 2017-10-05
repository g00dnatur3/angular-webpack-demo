export default class StudentService {
	constructor($http) {
		//this.$http = $http
		this.idGenerator = 0;
		this.model = []; 
	}
	get() {
		return this.model; // in-place of $http.get
	}
	put(student) {
		student.id = this.idGenerator++;
		this.model.push(student); // in-place of $http.put
		return student;
	}
	isEmailUnique(email) {
		if (!email) return false;
		for (var i=0; i<this.model.length; i++) {
			if (this.model.email === email) return false;
		}
		return true;
	}
}
