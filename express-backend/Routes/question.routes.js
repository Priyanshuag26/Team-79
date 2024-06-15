const express = require("express");
const {QuestionModel} = require("../Models/Question.model");

const QuestionRouter = express.Router();



QuestionRouter.get("/get", async(req, res) =>{
    const techStack = req.query.techStack;
    try {
        const Questions = await QuestionModel.find({techStack});
        res.status(200).json(Questions);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

module.exports={
    QuestionRouter
}