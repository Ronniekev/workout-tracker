import 'dotenv/config';
import * as exercisesModel from './exercises_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.listen(PORT, asyncHandler(async () => {
    await exercisesModel.connect(false)
    console.log(`Server listening on port ${PORT}...`);
}));
/**
 * Create a new exercise with the name, reps, weight, unit, and date provided in the body.
 */
app.post('/exercises', asyncHandler(async(req, res) => {
    const exercise = await exercisesModel.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date);
        if (exercise){
            return res.status(201).json(exercise)
        }else {
            return res.status(400).json({Error: "Invalid request"})
        }
}));

/**
 * Retrieve all exercises. 
 */
app.get('/exercises', asyncHandler(async(req, res) => {
    const exercises  = await exercisesModel.findExercises();
    res.status(200).json(exercises);
}));


/**
 * Retrieve the exercise corresponding to the ID provided in the URL.
 */
app.get('/exercises/:id', asyncHandler(async(req, res) => {
    const foundExercise = await exercisesModel.findExerciseByID(req.params.id);
    if (foundExercise) {
        res.status(200).json(foundExercise);
    } else {
        res.status(404).json({Error: "Not found"});
    }
}));

/**
 * Update the exercise whose id is provided in the path parameter and set
 * it to the parameters provided
 */

app.put('/exercises/:id', asyncHandler(async (req, res) =>{
    const updatedExercise = await exercisesModel.updateExercise(req.params.id, req.body.name, req.body.reps, req.body.weight,
        req.body.unit, req.body.date)
    if (updatedExercise === 1){
        return res.status(400).json({Error: "Invalid Request"})
       
    } else if (updatedExercise) {
        return res.status(200).json(updatedExercise)
    }else{
        return res.status(404).json({Error: "Not found"})
    }
}));

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:id', asyncHandler(async (req, res) =>{
    const deleted = await exercisesModel.deleteById(req.params._id);
    if (deleted > 0){
        return res.status(204).send()
    } 
    return res.status(404).json({ Error: "Not found"})
}))


