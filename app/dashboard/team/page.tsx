export default function TeamPage() {
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      role: "UI Designer",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Team Members
      </h1>

      {members.map((member) => (
        <div
          key={member.id}
          className="border p-4 rounded mb-3"
        >
          <h2 className="font-bold">
            {member.name}
          </h2>

          <p>{member.email}</p>

          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}