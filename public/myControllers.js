angular.module("myApp", ["ngRoute"])
            .controller("loadData", ["$scope", function($scope) {
                //Characters Array
          $scope.chars = [
            {nombre:"Jon Snow 1", temporada:"1",capitulo:"1"},
			      {nombre:"Jon Snow 2", temporada:"2",capitulo:"2"},
			      {nombre:"Jon Snow 3", temporada:"3",capitulo:"3"},
			      {nombre:"Jon Snow 4", temporada:"4",capitulo:"4"},
		        {nombre:"Jon Snow 5", temporada:"5",capitulo:"5"},
	          {nombre:"Jon Snow 6", temporada:"6",capitulo:"6"},
			      {nombre:"Jon Snow 7", temporada:"7",capitulo:"7"}];

              //New Character
          $scope.newChar = function(){

            $scope.chars.push({nombre: $scope.nombre,temporada: $scope.temporada,capitulo: $scope.capitulo});
            $('#charRows').html($scope.chars);
            //clear the fields after pushing the char
            $scope.nombre = "";
            $scope.temporada = "";
            $scope.capitulo = "";
          }

        }])

		  .controller("loadHeaderTable", function($scope) {
          $scope.columnas = [
		  {name:'Nombre', temp:'Temporada', cap:'Capitulo',lnk:'Links'}];
          })
		  .constant("VIEWS", {
          view01: "view/view01.html",
          view02: "view/view02.html"
		  })
		  .config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
          $routeProvider.when("/", {
            templateUrl: VIEWS.view01
          })
		  .when("/view02", {
            templateUrl: VIEWS.view02
          })
		  .otherwise({
            redirectTo: "/"
        });
		}]);
