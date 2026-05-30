import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        Task Dashboard
      </h1>

      <div className="flex flex-col gap-4">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/tasks">
          Tasks
        </Link>

        <Link href="/dashboard/team">
          Team Members
        </Link>
      </div>
    </div>
  );
}