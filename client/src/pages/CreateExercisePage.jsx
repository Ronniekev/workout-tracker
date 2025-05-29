import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {EditExerciseTable} from '../components/ExerciseTable';
import {GiWeightLiftingUp} from "react-icons/gi"
import {FaHome} from 'react-icons/fa';


export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise =  {name, reps, weight, unit, date}
        const response = await fetch(
            '/exercises', {
                method: 'POST', 
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newExercise)
            }
        );

        if (response.status === 201){
            alert("Succesfully added exercise")
        } else {
            alert("Failed to add exercise, status code = " + response.status)
        }
        navigate('/')
    
    };

    return (
        <div>
            <h4><button onClick= {()=> navigate('/')}><FaHome/></button></h4>
            <h4><button onClick= {()=> navigate('/create-exercise')}><GiWeightLiftingUp />New Exercise</button></h4>
            <h2>Add Exercise</h2>
            <EditExerciseTable name={name} reps={reps} weight={weight} unit={unit} date={date} setName={setName}
                setReps={setReps} setWeight={setWeight} setUnit={setUnit} setDate={setDate}></EditExerciseTable>

            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default CreateExercisePage;