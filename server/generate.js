module.exports = function () {
  var faker = require("faker-js/faker");
  var _ = require("lodash");
  return {
    people: _.times(10, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      };
    }),
  };
};
