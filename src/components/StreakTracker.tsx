import React, { useMemo } from 'react';
import { Task } from '../types';

interface StreakTrackerProps {
  tasks: Task[];
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ tasks }) => {
  const streaks = useMemo(() => {
    const categories = ['DSA', 'Project', 'Academics', 'Development', 'Other'];
    return categories.map(category => {
      const categoryTasks = tasks.filter(task => task.category === category);
      const completedTasks = categoryTasks.filter(task => task.completed).length;
      const totalTasks = categoryTasks.length;
      return {
        category,
        streak: completedTasks,
        total: totalTasks
      };
    });
  }, [tasks]);

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Streak Tracker</h2>
      <div className="space-y-4">
        {streaks.map(({ category, streak, total }) => (
          <div key={category} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{category}</span>
              <span className="text-sm text-slate-400">
                {streak}/{total} tasks
              </span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{
                  width: `${total > 0 ? (streak / total) * 100 : 0}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {tasks.length === 0 && (
        <div className="text-center text-slate-400 py-4">
          Complete tasks to build your streak!
        </div>
      )}
    </div>
  );
};

export default StreakTracker;