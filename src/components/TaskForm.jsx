import { useState } from 'react';

function TaskForm({ createTask }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // cuando se suba el formulario se ejecuta la siguiente funcion 
  const handleSubmit = (e) => {
    e.preventDefault();
    //se pasa la nueva tarea al arreglo de tareas
    createTask({
      title,
      description
    });

    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus 
        placeholder="Titulo de Tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea value={description} placeholder='Escribe la descripcion de la tarea'
        onChange={(e) => { setDescription(e.target.value) }}></textarea>
      <button>Save</button>
    </form>)
}

export default TaskForm;
