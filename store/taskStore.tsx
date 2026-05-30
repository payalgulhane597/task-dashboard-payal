import { create } from "zustand";

export interface Task {
  id: string;
  title: string;
}

interface TaskStore {
  tasks: Task[];

  addTask: (task: Task) => void;

  deleteTask: (id: string) => void;

  updateTask: (id: string, title: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter(
        (task) => task.id !== id
      ),
    })),

  updateTask: (id, title) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, title }
          : task
      ),
    })),
}));