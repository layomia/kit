angular.module('generalService', [])

.factory('general', function(userInfo) {
	function userLoggedIn() {
    return Object.keys(userInfo.get()).length;
  }

	function currentUser() {
		return userInfo.get();
	}

	return {
		userLoggedIn: userLoggedIn,
		currentUser: currentUser
	}
});
