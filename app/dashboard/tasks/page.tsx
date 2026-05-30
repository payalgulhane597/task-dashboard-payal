"use client";

import { useState } from "react";
import AddTask from "@/components/AddTask";
import { useTaskStore } from "@/store/taskStore";

export default function TasksPage() {
  const [search, setSearch] = useState("");

  const tasks = useTaskStore(
    (state) => state.tasks
  );

  const deleteTask = useTaskStore(
    (state) => state.deleteTask
  );

  const updateTask = useTaskStore(
    (state) => state.updateTask
  );

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Tasks
      </h1>

      <AddTask />

      <input
        type="text"
        placeholder="Search Task..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-2 w-full my-4"
      />

      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="border p-3 rounded mb-2 flex justify-between items-center"
        >
          <span>{task.title}</span>

          <div className="flex gap-2">
           <button
  onClick={() => {
    updateTask(
      task.id,
      task.title + " (Edited)"
    );
  }}
  className="bg-blue-500 text-white px-3 py-1 rounded"
>
  Edit
</button>
            <button
              onClick={() =>
                deleteTask(task.id)
              }
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}