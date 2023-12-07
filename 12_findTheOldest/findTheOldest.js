const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  return people.reduce(
    (oldest, person) => {
      const personAge = getAge(person, currentYear);
      const oldestAge = getAge(oldest, currentYear);

      return personAge > oldestAge ? person : oldest;
    },
    { yearOfBirth: currentYear, yearOfDeath: currentYear }
  ); // Initial value for reduce
};

function getAge(person, currentYear) {
  if (!person.yearOfDeath) {
    person.yearOfDeath = currentYear;
  }
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
