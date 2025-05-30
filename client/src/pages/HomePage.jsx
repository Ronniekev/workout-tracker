import { Link, useNavigate} from 'react-router-dom';
import {ExerciseTable, EditExerciseTable} from '../components/ExerciseTable';
import { useEffect, useState} from 'react';
import {GiWeightLiftingUp} from "react-icons/gi"
import {FaHome} from 'react-icons/fa';
import { getExercises, deleteExercise } from '../api/api';


function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate()

    const loadExercises = async () => {
    try {
      const data = await getExercises();
      setExercises(data);
    } catch (error) {
      alert('Error loading exercises: ' + error.message);
    }
  };


    useEffect( () => {
        loadExercises();
    }, []);

    const onDelete = async (_id) => {
    try {
      await deleteExercise(_id);
      setExercises((exercises) => exercises.filter((e) => e._id !== _id));
    } catch (error) {
      alert(`Failed to delete exercise with _id = ${_id}: ${error.message}`);
    }
  };
    const onEdit = (exercise) =>{
        setExerciseToEdit(exercise)
        navigate('/edit-exercise')
    }

    return (
        <>
            <h4><button onClick= {()=> navigate('/')}><FaHome/></button></h4>
            <h4><button onClick= {()=> navigate('/create-exercise')}><GiWeightLiftingUp />New Exercise</button></h4>

            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseTable>
        </>
    );
}

export default HomePage;