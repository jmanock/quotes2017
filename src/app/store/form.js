angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){

    $scope.Name = function(DogName){
      /*
        - Maybe a back button or side options
        - Remove button add button
        PROBLEM
          - Watch the if else changing makes the if else change
      */
      // console.log(DogName); WORKS
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


    }

  }
