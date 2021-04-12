const con = require("./index");

const Project = {
  getProject: function (callback) {
    return con.query("SELECT * FROM projects", callback);
  },
  addProject: function (project, callback) {
    return con.query(
      "INSERT INTO projects (name,description,image) VALUES (?,?, ?)",
      [project.name, project.description, project.image],
      callback
    );
  },
  deleteProject: function (id, callback) {
    return con.query("delete from projects where id=?", [id], callback);
  },
  updateService: function (id, project, callback) {
    return con.query(
      "update projects set name=?,description=?,image=? where id=?",
      [project.name, project.description, project.image, id],
      callback
    );
  },
};
module.exports = Project;
