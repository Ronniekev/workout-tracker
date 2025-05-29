import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {EditExerciseTable} from '../components/ExerciseTable';
import {GiWeightLiftingUp} from "react-icons/gi"
import {FaHome} from 'react-icons/fa';

export const EditExercisePage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);
    
    const navigate = useNavigate();

    const editExercise = async () => {
        const updatedExercise=  {name, reps, weight, unit, date}
        const response = await fetch(
            `/exercises/${exerciseToEdit._id}`, {
                method: 'PUT', 
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(updatedExercise)
            }
        );

        if (response.status === 200){
            alert("Succesfully updated exercise")
        } else {
            alert("Failed to update exercise, status code = " + response.status)
        }
        navigate('/')
    
    };

    return (
        <div>
            <h4><button onClick= {()=> navigate('/')}><FaHome/></button></h4>
            <h4><button onClick= {()=> navigate('/create-exercise')}><GiWeightLiftingUp />New Exercise</button></h4>
            <h2>Edit Excercise</h2>
            
            <EditExerciseTable name={name} reps={reps} weight={weight} unit={unit} date={date} setName={setName}
                setReps={setReps} setWeight={setWeight} setUnit={setUnit}setDate={setDate}></EditExerciseTable>

            <button
                onClick={editExercise}
            >Add</button>

        </div>
    );
}

export default EditExercisePage;