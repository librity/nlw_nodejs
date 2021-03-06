import { Router } from "express";

import UsersController from "../controllers/UsersController";
import SurveysController from "../controllers/SurveysController";
import SurveyAnswersController from "../controllers/SurveyAnswersController";
import NpsController from "../controllers/NpsController";

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const surveyAnswersController = new SurveyAnswersController();
const npsController = new NpsController();

router.post("/users", usersController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/survey_answers", surveyAnswersController.create);
router.get("/survey_answers/:id/answer/:value", surveyAnswersController.answer);

router.get("/nps/:survey_id", npsController.index);

export default router;
