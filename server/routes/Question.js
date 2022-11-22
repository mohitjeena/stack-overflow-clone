import express from "express"
import {AskQuestion,getAllQuestion,deleteQuestion,voteQuestion} from "../controllers/Question.js"
import auth from "../middlewares/auth.js"

const router=express.Router()

router.post("/Ask",auth,AskQuestion)
router.get("/get",getAllQuestion)
router.delete("/delete/:id",auth, deleteQuestion)
router.patch("/vote/:id",auth,voteQuestion)
export default router