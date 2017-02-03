angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){
    $scope.next = function(DogName){
      /*
        - Needs to show the next question on click
        - Add the dog name to the other questions
        - This should be the button all the way down
        - Only have the button clickable if the box is filled in
      */
      // console.log(DogName); WORKS
    }

  }
