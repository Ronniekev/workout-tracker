import '../App.css';
import { useState } from "react";
import {FaTrash, FaPencilAlt} from 'react-icons/fa';

export function ExerciseRow({exercise, onEdit, onDelete}){
    return(
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><button onClick={ () => onDelete(exercise._id)}>
                <FaTrash /></button></td>
            <td><button onClick={ () => onEdit(exercise)}>
                <FaPencilAlt /></button></td>
        </tr>

    );
}

export function EditExerciseRow({name, reps, weight, unit, date, setName, setReps, setWeight, setUnit, setDate}){
    return(
        <tr>
            <td><input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </td>
            <td>
                <input
                    type="number"
                    min='1'
                    value={reps}
                    onChange={e => setReps(e.target.valueAsNumber)} />
            </td>
            <td>
                <input
                    type="number"
                    min='1'
                    value={weight}
                    onChange={e => setWeight(e.target.valueAsNumber)} />
            </td>
            <td>
                <select name='unit' id="unit-select"
                    type="text"
                    value={unit}
                    onChange={e => setUnit(e.target.value)}>
                    <option value=''></option>
                    <option value='kgs'>kg</option>
                    <option value='lbs'>lbs</option>
                </select>
            </td>
            <td>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />
                <div>{date ? new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) : 'No date selected'}</div>
            </td>
            
        </tr>
    )
}