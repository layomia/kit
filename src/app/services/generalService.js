angular.module('generalService', [])

.factory('general', function(userInfo) {
	function userLoggedIn() {
    return Object.keys(userInfo.get()).length;
  }

	return {
		userLoggedIn: userLoggedIn,
	}
});
