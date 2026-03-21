# PassVault - Your Own Password Manager

PassVault is a simple, secure, and intuitive password manager built with React and Vite. It allows you to store and manage your website credentials locally on your device.

## Features

- **Store Credentials**: Save your website URLs, usernames, and passwords securely.
- **Local Storage**: All data is stored locally in your browser leveraging `localStorage`—no external databases, maximizing your privacy.
- **Show/Hide Passwords**: Easily toggle the visibility of your stored passwords.
- **One-Click Copy**: Quickly copy websites, usernames, or passwords directly to your clipboard.
- **Edit & Delete**: Manage your saved credentials by editing existing entries or deleting ones you no longer need.
- **Notifications**: Integrated with `react-toastify` for sleek and responsive user feedback (e.g., when a password is copied or saved).
- **Modern UI**: Styled with Tailwind CSS for a seamless and responsive user experience, featuring Lordicon animated icons.

## Tech Stack

- [React](https://reactjs.org/) (v19)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [UUID](https://github.com/uuidjs/uuid) for unique identifier generation

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
   ```bash
   git clone <github-repo-url>
   ```
2. Navigate to the project directory
   ```bash
   cd PassVault
   ```
3. Install dependencies
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).