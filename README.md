# Task Management Dashboard

A simple Task Management Dashboard built using Next.js, TypeScript, Tailwind CSS, and Zustand.

## Features

### Authentication

- Login Page
- Form Validation
- Navigation to Dashboard

### Dashboard

- Total Tasks Card
- Pending Tasks Card
- Completed Tasks Card

### Task Management

- Add Task
- Edit Task
- Delete Task
- Search Tasks
- Zustand State Management

### Team Members

- View Team Members
- Team Information Cards

### Navigation

- Sidebar Navigation
- Dashboard Page
- Tasks Page
- Team Members Page

### UI

- Responsive Layout
- Tailwind CSS Styling
- Clean Dashboard Design

---

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Zustand

---

## Folder Structure

```text
task-dashboard
│
├── app
│   ├── dashboard
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── tasks
│   │   │   └── page.tsx
│   │   └── team
│   │       └── page.tsx
│   │
│   ├── login
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── AddTask.tsx
│   └── Sidebar.tsx
│
├── store
│   └── taskStore.ts
│
├── public
│
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/task-dashboard.git
```

Move into project:

```bash
cd task-dashboard
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Routes

### Home

```text
/
```

### Login

```text
/login
```

### Dashboard

```text
/dashboard
```

### Tasks

```text
/dashboard/tasks
```

### Team Members

```text
/dashboard/team
```

---

## State Management

Zustand is used for:

- Adding Tasks
- Updating Tasks
- Deleting Tasks
- Managing Dashboard Data

---

## Deployment

This application can be deployed on Vercel.

Build command:

```bash
npm run build
```

Production start:

```bash
npm start
```

---

## Future Enhancements

- Dark Mode
- Task Status Tracking
- Due Dates
- Priority Levels
- API Integration
- User Authentication
- Database Support

---

## Author

Payal Gulhane

Frontend Developer Internship Assignment

## Deployment Link
## Dashboard Link
https://task-dashboard-payal.vercel.app/dashboard
## Login page Link
https://task-dashboard-payal.vercel.app/login