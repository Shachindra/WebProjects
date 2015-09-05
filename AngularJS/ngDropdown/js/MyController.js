app.controller('SetupController',
	function($scope) {
		$scope.greeting = {
			text: 'Hello'
		};
		$scope.clock = new Date();
		var updateClock = function() {
			$scope.clock = new Date();
		};
		setInterval(function() {
			$scope.$apply(updateClock);
			}, 1000);
		updateClock();
	}
);

app.controller('DropDownController',
	function($scope) {
		$scope.countryName = null;
		$scope.filteredType = '';
		$scope.countryList = [	'Afganistan',
								'Austria',
								'Bangladesh',
								'Cuba',
								'Canada',
								'China',
								'Denmark',
								'Finland',
								'Ghana',
								'Germany',
								'Hungary',
								'India',
								'Indonesia',
								'Italy',
								'Jerusalem',
								'Myanmar',
								'Netherlands',
								'Oman',
								'Portugal',
								'Qatar',
								'Russia',
								'Syria',
								'Sri Lanka',
								'Singapore',
								'Trinidad & Tobago',
								'Ukraine',
								'United States of America',
								'Venezuela',
								'Zimbabwe',
								];
		var exprs = $scope.countryList;
		$scope.expr = '';
		
		$scope.selectVal = function(cName){
			$scope.countryName = cName;
			exprs.pop(cName);
			//$scope.countryList = null;
		};
		
		$scope.removeExp = function(index){
			exprs.splice(index, 1);
			countryList = '';
		};
	}
);
/* 
app.controller('PeopleController',
	function($scope) {
		$scope.people = [ 
			{	name: "Sarah", city: "San Francisco"		},
			{	name: "Michael", city: "Seattle"			},
			{	name: "Sebastian", city: "Washington D.C."	},
			{	name: "Tommy", city: "Pontiac"				},
			{	name: "Samuel", city: "New Jersey"			},
			{	name: "Samantha", city: "Wisconsin"			},
			{	name: "Ariyana", city: "Las Vegas"			},
			{	name: "Jennifer", city: "New York"			}
		]; 
	}
); */
