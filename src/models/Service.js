const con = require("./index");

const Service = {
  getServices: function (callback) {
    return con.query("SELECT * FROM services", callback);
  },
  addService: function (service, callback) {
    return con.query(
      "INSERT INTO services (name,description,image) VALUES (?,?, ?)",
      [service.name, service.description, service.image],
      callback
    );
  },
  deleteService: function (id, callback) {
    return con.query("delete from services where id=?", [id], callback);
  },
  updateService: function (id, service, callback) {
    return con.query(
      "update services set name=?,description=?,image=? where id=?",
      [service.name, service.description, service.image, id],
      callback
    );
  },
};
module.exports = Service;
