angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){
    $scope.next = function(DogName){
      /*
        - Maybe a back button or side options
        PROBLEM
          - Watch the if else changing makes the if else change
      */
      // console.log(DogName); WORKS
      if($scope.age === true){
        $scope.age = false;
        $scope.weight = true;
      }else{
        $scope.age = true;
        $scope.name = false;
      }



    }

  }
