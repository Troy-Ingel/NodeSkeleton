angular
.module('mainApp')
.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$location', '$window'];

function HomeController($scope, $location, $window){

	activate();

	///////////

	function activate(){
		getUsers();
	}
}







