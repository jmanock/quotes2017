angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){

    $scope.Name = function(DogName){
      console.log(DogName);
      $scope.age = true;
      $scope.name = true;
    }

    $scope.Age = function(DogName){
      $scope.weight = true;
      $scope.age = false;
      console.log(DogName);
    }

    $scope.Weight = function(DogName){
      console.log(DogName);
      $scope.weight = false;
      $scope.state = true;
    }

    $scope.State = function(DogName){
      $scope.state = false;
      $scope.breed = true;
    }

    $scope.Breeds = function(DogName){

    }

  }
