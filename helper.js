const db = require("./data/dbConfig")

module.exports = {
getProjects,
getResources,
getTasks,
addTask,
addProject,
addResource,
findById
}

function getProjects() {
 return db('project')
}

function getTasks(id) {
    if (!id) {
        return db('tasks')
    .join('project', 'tasks.projectId', "=", 'projects.id')
    .select('tasks.task', 'projects.project', 'projects.projectDescription')
    
    }
    return db('tasks')
    .join('project', 'tasks.projectId', "=", 'projects.id')
    .select('tasks.task', 'projects.project', 'projects.projectDescription')
    .where({projectId: id})
}

function getResources() {
    return db('resources')
}

function findById(id) {
    return db("project")
      .where({ id })
      .first();
  }


function addProject(newProject) {
    return db("project")
    .insert(newProject)
    .then(ids => {
      return findById(ids[0]);
    });
}
function addTask(newTask) {
    return db("tasks")
    .insert(newTask)
    .then(ids => {
      return findById(ids[0]);
    });
}
function addResource(newResource) {
    return db("resources")
    .insert(newResource)
    .then(ids => {
      return findById(ids[0]);
    });
}