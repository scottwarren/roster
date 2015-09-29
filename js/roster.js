(function() {
  var people = ['Scott', 'Tony', 'Saajid', 'Luca'];

  var now = moment();

  var weekNumber = now.get('week');
  var peopleIndex = weekNumber % people.length;

  var getPersonFromPeople = function(index) {
    // we are trying to make the index less than the people's length so that we do
    // not get an index out of bounds error
    while (index >= people.length) {
      index -= people.length;
    }

    return people[index];
  };

  var onCall = getPersonFromPeople(peopleIndex++);
  var onCallBackup = getPersonFromPeople(peopleIndex++);

  var app = angular.module('rosterApp', []);

  app.controller('RosterCtrl', function ($scope) {
    $scope.columns = [
      {
        label: 'On call',
        value: onCall
      },
      {
        label: 'Backup on call',
        value: onCallBackup
      }
    ];
  });
})();
