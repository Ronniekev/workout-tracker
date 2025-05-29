import {ExerciseRow, EditExerciseRow} from './ExerciseRow';

export function ExerciseTable({exercises, onDelete, onEdit}){
    return(
        <table className="exercise-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise) => <ExerciseRow exercise={exercise} onDelete={onDelete} onEdit={onEdit} key={exercise._id}/>)}

            </tbody>
        </table>
    )
}


export function EditExerciseTable({name, reps, weight, unit, date, setName, setReps, setWeight, setUnit, setDate}){
    return(
        <table className="Edit-exercise">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
    
                <EditExerciseRow name={name} reps={reps} weight={weight} unit={unit} date={date} setName={setName}
                setReps={setReps} setWeight={setWeight} setUnit={setUnit} setDate={setDate}/>
            </tbody>
        </table>
    )
}