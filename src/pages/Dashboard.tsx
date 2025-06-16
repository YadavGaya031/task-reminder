import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import StreakTracker from '../components/StreakTracker';
import { Task } from '../types';

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if(user){
      fetchTasks();
    }
  }, [user]);

  const fetchTasks = async () => {
    if (!user) return;
    try{
      const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    const taskList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Task[];
    setTasks(taskList);
    }catch(error){
      console.error("failed to fetch tasks : ", error);
    }
  };

  const addTask = async (task: Omit<Task, 'id' | 'userId'>) => {
    if (!user) return;
    await addDoc(collection(db, 'tasks'), {
      ...task,
      userId: user.uid,
      completed: false,
      createdAt: new Date()
    });
    fetchTasks();
  };

  const toggleTask = async (taskId: string, completed: boolean) => {
    try{
      await updateDoc(doc(db, 'tasks', taskId), { completed });
    fetchTasks();
    }catch(error){
      console.error("error updating task: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="bg-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task Reminder Bot</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Today's Tasks</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Add Task
              </button>
            </div>
            <TaskList tasks={tasks} onToggle={toggleTask} />
          </div>
          <div>
            <StreakTracker tasks={tasks} />
          </div>
        </div>
      </main>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addTask}
      />
    </div>
  );
};

export default Dashboard;