const Company = require("../models/Company");

const getCompany = (req, res) => {
  Company.getCompany((err, company) => {
    if (err) {
      res.json(err);
    } else {
      res.json(company);
    }
  });
};

const updateCompany = (req, res) => {
  Company.updateCompany(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
};

module.exports = { getCompany, updateCompany };
