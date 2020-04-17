exports.seed = function(knex, Promise) {
    return knex("resources").insert([
      {
        resource: "Resource 1",
        resourceDescription: "Resource Description 1"
      },
      {
        resource: "Resource 2",
        resourceDescription: "Resource Description 2"
      },
      {
        resource: "Resource 3",
        resourceDescription: "Resource Description 3"
      },
      {
        resource: "Resource 4",
        resourceDescription: "Resource Description 4"
      },
      {
        resource: "Resource 5",
        resourceDescription: "Resource Description 5"
      },
      {
        resource: "Resource 6",
        resourceDescription: "Resource Description 6"
      },
      {
        resource: "Resource 7",
        resourceDescription: "Resource Description 7"
      }
    ]);
  };