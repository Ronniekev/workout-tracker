import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const Exercises_DB = 'exercises_db';
let connection = undefined;
let Exercise = undefined;
const exercises = 'exercises';
const Exercise_CLASS = "Exercise"

/**
 * This function connects to the MongoDB server.
 */
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        Exercise = createModel();
     } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}
/**
 * Define a schemal for an excercise collection, compile a model and return the model.
 * @returns A model object for the movieSchema 
 */
function createModel(){
    //Define Schema
    /**
     * 
     * @param {string} name
     * @param {Number} reps
     * @param {Number} weight
     * @param {String} unit
     * @param {String} date
     */
    const exerciseSchema = mongoose.Schema({
        name: {type: String, required: true}, 
        reps: {type: Number, required: true}, 
        weight: {type: Number, required: true},
        unit: {type: String, required: true},
        date: {type: String, required: true}

    });
    //Compile the model class from the schema
    //This should be after defining the schema
    return mongoose.model(Exercise_CLASS, exerciseSchema);
}
const isValidString = (parameter_str, weight) => {
    if (typeof(parameter_str) === 'string' && parameter_str.length > 0){
        if (weight){
            if (parameter_str === 'lbs' || parameter_str === 'kgs'){
                return true
            } else {
                return false
            }
        }
        return true
    } else {
        return false
    }
}
const isValidNumParam = (numParam) => {
    if (typeof(numParam) ===  'number' && numParam > 0){
        return true
    } else {
        return false
    }
}

const isValidDate = (date) => {
    // Test using a regular expression.
    const format = /^\d{4}-\d{2}-\d{2}$/;
    return format.test(date);    
}

const isParamValid = (objValue, definedFunction, unit) => {
    if(objValue && unit){
        if(definedFunction(objValue, unit)){
            return
        } else{
            return 'Error'
        }
    } else if (objValue){
        if(definedFunction(objValue)){
            return
        }
}
return 'Error'
}

async function createExercise(name, reps, weight, unit, date) {
    if (isValidString(name) && isValidNumParam(reps)
        && isValidNumParam(weight) && isValidString(unit, true) && isValidDate(date)) {
        
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save()
}
}

/**
 * Retrieve all exercises
 * @returns 
 */
const findExercises =  async() => {
    const exercises = await Exercise.find();
    return exercises
}

/**
 * Retrieve an exercise based on the ID
 * @param {Object} exercise_id
 * @returns 
 */
const findExerciseByID = async(exercise_id) => {
    const result = await Exercise.findById(exercise_id)
    return result
}

/**
 * Replace the title, year, language properties of the movie with the id value provided
     * @param {string} name
     * @param {Number} reps
     * @param {Number} weight
     * @param {String} unit
     * @param {String} date
 * @returns Number of documents modified
 */
async function updateExercise(_id, name, reps, weight, unit, date){
    const updateData = {};
    if (isParamValid(name, isValidString) === 'Error' || isParamValid(reps,isValidNumParam) === 'Error' || 
    isParamValid(weight, isValidNumParam,) === 'Error'
        || isParamValid(unit, isValidString, true) === 'Error' || isParamValid(date, isValidDate) === 'Error') {
            return 1;
        }
    
    updateData.name = name; 
    updateData.reps = reps;
    updateData.weight = weight;
    updateData.unit = unit
    updateData.date = date
    if (await findExerciseByID(_id)){
        const result = await Exercise.updateOne({_id: _id},{$set: updateData});
        return await findExerciseByID(_id)
    }
    return null
}

/**
 * Delete the exercise with provided id value
 * @param {String} _id 
 * @returns Count of deleted documents
 */
const deleteById = async(_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}

export { connect, createExercise, findExercises, updateExercise, findExerciseByID, deleteById};
