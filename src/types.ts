export interface Task {
  id: string;
  userId: string;
  title: string;
  category: string;
  dueDate: string;
  completed: boolean;
  createdAt: Date;
}