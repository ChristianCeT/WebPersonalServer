const express = require("express");
const CoursesController = require("../controllers/courses");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-courses", [md_auth.ensureAuth], CoursesController.addCourse);
api.get("/get-courses", CoursesController.getCourses);
api.delete(
  "/delete-course/:id",
  [md_auth.ensureAuth],
  CoursesController.deleteCourse
);
api.put(
  "/update-course/:id",
  [md_auth.ensureAuth],
  CoursesController.updateCourse
);

module.exports = api;
