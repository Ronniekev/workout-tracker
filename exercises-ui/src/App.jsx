import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react'

function App() {

  const [exerciseToEdit, setExerciseToEdit] =useState();

  return (
    <div className="app">
      <header>
        <h1>Excercise Tracker</h1>
        <p>Keep track of workouts and visualize your improvements!</p>
      </header>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
            <Route path="/create-exercise" element={ <CreateExercisePage/>}></Route>
            <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}></Route>
          </Routes>
        </Router>
        <footer>
        <p>&copy;2025PenateKevin </p>
      </footer>
    </div>
  );
}

export default App;