app.directive('viewOne', function(){
	return {
		restrict: 'E',
		templateUrl: '../templates/viewOneGeneral.html',
		scope: {
			album: '=',
			artist: '=',
			playlist: '='
		}

	}
})