const con = require("./index");

const Company = {
  getCompany: function (callback) {
    return con.query("SELECT * FROM company", callback);
  },
  updateCompany: function (
    { companyName, description, introduce, address, phone, email },
    callback
  ) {
    return con.query(
      "UPDATE company SET companyName = ?,description = ?, introduce = ?, address = ?, phone = ?, email = ? WHERE id = 1",
      [companyName, description, introduce, address, phone, email],
      callback
    );
  },
};
module.exports = Company;
