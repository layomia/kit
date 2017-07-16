angular.module('userInfoService', [])

.factory('userInfo', function($cookies) {

	function set(data) {
		$cookies.putObject("currentUser", data);
	}

	function get() {
		var user = $cookies.getObject("currentUser") || {};
		return user;
	}

	function destroy() {
	}

	return {
		set: set,
		get: get,
		destroy: destroy
	}
});
