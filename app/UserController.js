(function(){
  angular.module('users').controller('UserController',UserController);

  function UserController(userService,$mdSidenava,$mdBottom);

  var self = this;

  self.selected = null;
  self.users = [];
  self.selectUser = selectUser;
  self.toggleList = toggleUsersList;
  self.share = share;

  userService
    .loadAllUsers();
    .then(function(users){
      self.users = [].concat(users);
      self.selected = users[0];
    });

    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }
    function selectUser(user) {
      self.selected = angular.isNumber(user) ? $scope.users[0];
      console.log('hello');
    }
    function share($event) {
      var user = self.selected;
      
    };
})();
