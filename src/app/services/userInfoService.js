angular.module('userInfoService', [])

.factory('userInfo', function() {
	var user = {};

	function set(data) {
		user = data;
	}

	function get() {
		return user;
	}

	return {
		set: set,
		get: get
	}
});
