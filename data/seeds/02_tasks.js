exports.seed = function(knex, Promise) {
    return knex("tasks").insert([
      {
        task: "Task 1",
        taskDescription: "Task description 1",
        notes: "",
        projectId: 1,
        completed: false
      },
      {
        task: "Task 2",
        taskDescription: "Task description 2",
        notes: "",
        projectId: 1,
        completed: false
      },
      {
        task: "Task 3",
        taskDescription: "Task description 3",
        notes: "",
        projectId: 1,
        completed: false
      },
      {
        task: "Task 4",
        taskDescription: "Task description 4",
        notes: "",
        projectId: 2,
        completed: false
      },
      {
        task: "Task 5",
        taskDescription: "Task description 5",
        notes: "",
        projectId: 2,
        completed: false
      },
      {
        task: "Task 6",
        taskDescription: "Task description 6",
        notes: "",
        projectId: 2,
        completed: false
      },
      {
        task: "Task 7",
        taskDescription: "Task description 7",
        notes: "",
        projectId: 3,
        completed: false
      },
      {
        task: "Task 8",
        taskDescription: "Task description 8",
        notes: "",
        projectId: 3,
        completed: false
      }
    ]);
  };