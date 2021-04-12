const Service = require("../models/Service");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const getServices = (req, res) => {
  Service.getServices((error, services) => {
    res.json(services);
  });
};

const addService = (req, res) => {
  const image = req.files.image;
  const filename = uuidv4() + ".jpg";
  image.mv(
    path.resolve(__dirname, "../public/assets/image/service", filename),
    function (err) {}
  );
  req.body.image = filename;

  Service.addService(req.body, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(req.body);
    }
  });
};

const deleteService = (req, res) => {
  Service.deleteService(req.params.id, function (error, count) {
    if (error) {
      res.json(error);
    } else {
      res.json(count);
    }
  });
};

module.exports = { getServices, addService, deleteService };
