angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });

  function FormCtrl($scope){
    /*
      - More than one Question at a time
    */
    $scope.so = [
      {Name:'Florida'},
      {Name:'Illinois'},
      {Name:'Georiga'}
    ]
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

    // $scope.State = function(DogName){
    //   $scope.state = false;
    //   $scope.breed = true;
    //   console.log(DogName);
    // }
    //
    // $scope.Breeds = function(DogName){
    //   $scope.breed = false;
    //   $scope.color = true;
    //   console.log(DogName);
    // }

    $scope.Color = function(DogName){
      console.log(DogName);
      $scope.color = false;
      $scope.gender = true;
    }

    $scope.Gender = function(DogName){
      console.log(DogName);
    }
    $scope.States = function(DogName){
      console.log(DogName);
    }
    $scope.Something = function(DogName){
      console.log(DogName);
    }
    $scope.SomethingElse = function(DogName){
      console.log(DogName);
    }

  }
