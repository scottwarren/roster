(function() {
  var people = ['Malcolm', 'Nathan', 'Simon', 'Dane', 'Scott', 'Zak', 'Ben'];

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

  var groundskeeper = getPersonFromPeople(peopleIndex++);
  var chair = getPersonFromPeople(peopleIndex++);
  var minutes = getPersonFromPeople(peopleIndex++);

  var app = angular.module('rosterApp', []);

  app.controller('RosterCtrl', function ($scope) {
    $scope.columns = [
      {
        label: 'Groundskeeper',
        value: groundskeeper
      },
      {
        label: 'Chair',
        value: chair
      },
      {
        label: 'Minutes',
        value: minutes
      },
    ];
  });
})();
