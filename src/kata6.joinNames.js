const joinNames = people =>
  people.reduce((names, person, index) => {
    let substring = "";

    if (index === 0) {
      substring += person.name;
    } else if (index === people.length - 1) {
      substring += ` & ${person.name}`;
    } else {
      substring += `, ${person.name}`;
    }

    return names + substring;
  }, "");

module.exports = joinNames;
