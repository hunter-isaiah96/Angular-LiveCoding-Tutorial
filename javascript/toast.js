var Toast = angular.module('toast', []);

Toast.run(function($rootScope){
	$rootScope.toast = {};
	$rootScope.toast.type = '';
	$rootScope.toast.title = '';
	$rootScope.toast.text = '';
	$rootScope.hasToast = false;
});

Toast.directive('ngToast', function($rootScope){
	return{
		restrict: 'A',
		template: '<span class="toast {{toast.type}}" ng-if="hasToast">'
		+ '<i class="fa" style="margin-right: 10px;" ng-class="{\'fa-check-circle\': toast.type == \'success\', \'fa-exclamation-triangle\': toast.type == \'warning\', \'fa-exclamation-circle\': toast.type == \'info\', \'fa-times-circle\': toast.type == \'error\'}"></i>'
		+'<strong>{{toast.title}}</strong><span style="margin-left: 10px;">{{toast.text}}</span></span>'
	}
});

Toast.factory('Toast', ['$rootScope', '$timeout', function($rootScope, $timeout){
	var dataFactory = {}, num = 0, timeOut, canceled = false;
	dataFactory.makeText = function(type, title, text, timeout){
		$rootScope.toast.type = type;
		$rootScope.toast.title = title;
		$rootScope.toast.text = text;
		$rootScope.toast.timeout = timeout;
		canceled = false;
		$timeout(function(){
			$rootScope.hasToast = true;
		}, 100)
		num++;
		timeOut = $timeout(function(){
			if(canceled === false){
				if(num == 1){
					$timeout(function(){
						$rootScope.hasToast = false;
					});
				}
				num--;
			}
		}, $rootScope.toast.timeout);
	};
	return dataFactory;
}]);