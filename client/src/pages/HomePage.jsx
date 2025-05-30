import { Link, useNavigate} from 'react-router-dom';
import {ExerciseTable} from '../components/ExerciseTable';
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

    const onDelete = async (id) => {
    try {
      await deleteExercise(id);
      setExercises((exercises) => exercises.filter((e) => e.id !== id));
    } catch (error) {
      alert(`Failed to delete exercise with id = ${id}: ${error.message}`);
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