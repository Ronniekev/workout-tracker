const API_BASE = import.meta.env.VITE_API_URL;

export async function getExercises() {
  const response = await fetch(`${API_BASE}/exercises`);
  if (!response.ok) {
    throw new Error(`Failed to fetch exercises: ${response.statusText}`);
  }
  return response.json();
}

export async function deleteExercise(id) {
  const response = await fetch(`${API_BASE}/exercises/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete exercise with id ${id}: ${response.statusText}`);
  }
  return response;
}

export async function createExercise(exercise) {
  const response = await fetch(`${API_BASE}/exercises`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(exercise),
  });
  return response;
}

export async function editExercise(id, updatedExercise) {
  const response = await fetch(`${API_BASE}/exercises/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedExercise),
  });

  if (!response.ok) {
    throw new Error(`Failed to update exercise, status code = ${response.status}`);
  }

  return response.json();
}

