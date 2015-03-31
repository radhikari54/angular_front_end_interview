'use strict';

angular.module('myApp.all', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/all', {
    templateUrl: 'all/all.html',
    controller: 'AllCtrl'
  });
}])

.controller('AllCtrl', ['$scope', '$q', 'dataCollection', function($scope, $q, dataCollection) {
	var promise = dataCollection.getQuestionsArray();

	//get innerHTML for all questions except for coding
	function getInnerHTML(response) {
		var readableQuestions = [];

		for (var i = 0; i < response.length - 1; i++) { //processing all question categories before coding questions
			var categorySet = {};
			var questionsList = [];

			categorySet.category = $scope.questionsObj[i].category;

			for (var j = 0; j < response[i].questions.length; j++) {
				questionsList.push(response[i].questions[j].innerHTML)
			}
			categorySet.questions = questionsList;
			readableQuestions.push(categorySet);
		}

		return readableQuestions;
	}

	function getInnerHTMLCoding(response) {
		var readableQuestions = [];

		return readableQuestions;
	}


	promise.then(function(response) {
		$scope.questionsObjAll = getInnerHTML(response);
		//$scope.questionsObjCoding = getInnerHTMLCoding(response);
		console.log('controllers $scope.questionsObj: ' + $scope.questionsObjAll);
	}, function(error) {
		console.log('error: ' + error);
	});

}]);