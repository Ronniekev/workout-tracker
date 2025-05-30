import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {EditExerciseTable} from '../components/ExerciseTable';
import {GiWeightLiftingUp} from "react-icons/gi"
import {FaHome} from 'react-icons/fa';
import { editExercise } from '../api.js';

export const EditExercisePage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);
    
    const navigate = useNavigate();

    const handleEditExercise = async () => {
    try {
      await editExercise(exerciseToEdit._id, { name, reps, weight, unit, date });
      alert("Successfully updated exercise");
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
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
            >Update</button>

        </div>
    );
}

export default EditExercisePage;