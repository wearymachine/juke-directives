app.directive('albumList', function() {
	return {
		restrict: 'E',
		templateUrl: '../templates/artist-albums.html',
		scope: {
			albums: '='
		}

	}
})