"use client";

import { useState } from "react";
import { useTaskStore } from "@/store/taskStore";

export default function AddTask() {
  const [title, setTitle] = useState("");

  const addTask = useTaskStore(
    (state) => state.addTask
  );

  const handleAdd = () => {
    if (!title.trim()) return;

    addTask({
      id: crypto.randomUUID(),
      title,
    });

    setTitle("");
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-3">
        Add Task
      </h2>

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Task Title"
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}