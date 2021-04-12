const Project = require("../models/Project");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const getProject = (req, res) => {
  Project.getProject((error, projects) => {
    res.json(projects);
  });
};

const addProject = (req, res) => {
  const image = req.files.image;
  const filename = uuidv4() + ".jpg";
  image.mv(
    path.resolve(__dirname, "../public/assets/image/project", filename),
    function (err) {}
  );
  req.body.image = filename;

  Project.addProject(req.body, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(req.body);
    }
  });
};

const deleteProject = (req, res) => {
  Project.deleteProject(req.params.id, function (error, count) {
    if (error) {
      res.json(error);
    } else {
      res.json(count);
    }
  });
};

module.exports = { getProject, addProject, deleteProject };
