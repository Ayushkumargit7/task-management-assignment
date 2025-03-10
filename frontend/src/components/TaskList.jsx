import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://task-management-app-backend-n2fc.onrender.com/tasks');
      // const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await axios.post('https://task-management-app-backend-n2fc.onrender.com/tasks', newTask);
      // const response = await axios.post('http://localhost:5000/tasks', newTask);
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://task-management-app-backend-n2fc.onrender.com/tasks/${id}`);
      // await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading tasks...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Task Management App</h1>
      <TaskForm onAddTask={addTask} />
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet. Add one above!</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map(task => (
              <li key={task._id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    {task.description && <p className="text-gray-600 mt-1">{task.description}</p>}
                  </div>
                  <button 
                    onClick={() => deleteTask(task._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
