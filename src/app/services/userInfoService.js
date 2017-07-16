angular.module('userInfoService', [])

.factory('userInfo', function($cookies, $location) {

	function set(data) {
		$cookies.putObject("currentUser", data);
	}

	function get() {
		var user = $cookies.getObject("currentUser") || {};
		return user;
	}

	function destroy() {
		$cookies.remove("currentUser");
		$location.path("/");
	}

	return {
		set: set,
		get: get,
		destroy: destroy
	}
});
