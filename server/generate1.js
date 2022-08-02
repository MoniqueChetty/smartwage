module.export = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    surveys: _.times(100, function (n) {
      return {
        id: n,
        surveyName: faker.random.words(5),
        createdby: faker.name.findName(),
        response: 135823975 + n,
        launchdate: faker.date.between(
          "2022-01-01T00:00:00.000Z",
          "2022-07-01T00:00:00.000Z"
        ),
        closedate: faker.date.between(
          "2022-07-01T00:00:00.000Z",
          "2022-08-20T00:00:00.000Z"
        ),
        status: faker.random.boolean(),
        questions: _.times(10, function (b) {
          return {
            id: b,
            createdAt: faker.date.between(
              "2022-07-01T00:00:00.000Z",
              "2022-08-20T00:00:00.000Z"
            ),
            name: faker.name.findName(),
            answer: faker.random.words(15),
          };
        }),
      };
    }),
  };
};
