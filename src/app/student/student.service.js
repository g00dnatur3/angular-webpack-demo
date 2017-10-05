export default class StudentService {
	constructor($http) {
		this.$http = $http
		this.url = 'http://localhost:9000/student';
	}

	handlers(onComplete) {
		return [
			function fulfilled(resp) {
				onComplete(null, resp.data);
			},
			function refjected(resp) {
				const err = {status: resp.status, data: resp.data};
				onComplete(err);
			}
		]
	}

	get(onComplete) {
		const promise = this.$http.get(this.url);
		promise.then.apply(promise, this.handlers(onComplete));
	}

	put(student, onComplete) {
		const promise = this.$http.post(this.url, student);
		promise.then.apply(promise, this.handlers(onComplete));
	}

	isEmailUnique(email, onComplete) {
		const promise = this.$http.post(this.url + '/emailunique', {email: email});
		promise.then.apply(promise, this.handlers(onComplete));
	}
}
