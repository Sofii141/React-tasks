import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasksJSON } from './data/tasksJSON'
import { useState, useEffect } from 'react'

function App() {

  //para que app y taskForm puedan asceder al arreglo
  const [tasks, setTasks] = useState([]);

  //se va a ejecutar cuando cargue el comp taskList
  useEffect(() => {
    setTasks(tasksJSON);
  }, []);

  //funcion que crea una tarea 
  function createTask(task) {
    //areglo de tareas mas nueva tarea 
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }]);
  }

  return (
    <div>
      <TaskForm createTask = {createTask} />
      <TaskList tasks = {tasks} />
    </div>
  );
}

export default App;
