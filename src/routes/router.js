const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  getServices,
  addService,
  deleteService,
} = require("../controllers/serviceController");

const {
  getProject,
  addProject,
  deleteProject,
} = require("../controllers/projectController");
const {
  getCompany,
  updateCompany,
} = require("../controllers/companyController");
const auth = require("../middleware/auth");
router.post("/login", userController.login);
router.get("/company", getCompany);
router.put("/company", auth, updateCompany);
// router.post("/info", pageController.editInfo);
// router.delete("/service/:index", auth, pageController.deleteServiceByIndex);
router.delete("/project/:id", auth, deleteProject);
router.get("/project", getProject);
// router.post("/service", pageController.addService);
router.post("/project", addProject);
router.get("/admin-check", auth, userController.checkLogin);
router.get("/service", getServices);
router.post("/service", addService);
router.delete("/service/:id", auth, deleteService);
module.exports = router;
