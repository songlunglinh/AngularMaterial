'use strict';

angular.module('users').service('userService', UserService);

function UserService($q){
  var users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-1',
      content: 'I love cheese, especially airedale queso'
    },
    {
      name: 'George Duke',
      avatar: 'svg-2',
      content: 'Zombie ipsum reversuz ab viral inferno'
    },
    {
      name: 'Gener Delosreyes',
      avatar: 'svg-3',
      content: 'Raw deim pour-over readymade Etsy Pitchfo'
    },
    {
      name: 'Lawrence Ray',
      avatar: 'svg-4',
      content: 'Scratch the furniture spit up on light gra...'
    }
  ];
};
