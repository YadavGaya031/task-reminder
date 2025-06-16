import React from 'react';
import { Task } from '../types';
import { CheckCircle, Circle } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string, completed: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 rounded-lg ${
            task.completed ? 'bg-slate-800/50' : 'bg-slate-800'
          } flex items-center justify-between transition-all duration-200`}
        >
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onToggle(task.id, !task.completed)}
              className="text-2xl"
            >
              {task.completed ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <Circle className="text-slate-400" />
              )}
            </button>
            <div>
              <h3 className={`font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                {task.title}
              </h3>
              <p className="text-sm text-slate-400">{task.category}</p>
            </div>
          </div>
          <div className="text-sm text-slate-400">
            {new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ))}
      {tasks.length === 0 && (
        <div className="text-center text-slate-400 py-8">
          No tasks for today. Add some tasks to get started!
        </div>
      )}
    </div>
  );
};

export default TaskList;