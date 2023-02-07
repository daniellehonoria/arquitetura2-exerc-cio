import express  from "express";
import {CoursesController} from "../controller/CoursesController";

export const coursesRouter = express.Router();

const coursesController = new CoursesController()

coursesRouter.get("/", coursesController.getCourses)
coursesRouter.post("/",coursesController.postCourse )
coursesRouter.put("/:id", coursesController.editCourse )
coursesRouter.delete("/:id", coursesController.deleteCourse)