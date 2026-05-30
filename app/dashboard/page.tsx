"use client";

import { useTaskStore } from "@/store/taskStore";

export default function Dashboard() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded p-4 shadow">
          <h2 className="text-gray-500">
            Total Tasks
          </h2>

          <p className="text-4xl font-bold">
            {tasks.length}
          </p>
        </div>

        <div className="border rounded p-4 shadow">
          <h2 className="text-gray-500">
            Completed Tasks
          </h2>

          <p className="text-4xl font-bold">
            0
          </p>
        </div>

        <div className="border rounded p-4 shadow">
          <h2 className="text-gray-500">
            Pending Tasks
          </h2>

          <p className="text-4xl font-bold">
            {tasks.length}
          </p>
        </div>
      </div>
    </div>
  );
}