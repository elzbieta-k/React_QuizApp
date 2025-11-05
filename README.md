# React Trivia Quiz

An interactive quiz application built with modern React stack, featuring multiple categories, difficulty levels, and a persistent scoreboard.
<img width="1920" height="868" alt="screencapture-localhost-5173-React-QuizApp-2025-11-05-10_14_23" src="https://github.com/user-attachments/assets/ee61e137-609f-4667-ae09-759ed843308d" />

## Features
- 🎯 Multiple quiz categories from Open Trivia DB
- 🔄 Dynamic question loading and decoding
- 📊 Real-time score tracking
- 🏆 Persistent scoreboard using localStorage
- 📱 Responsive design for all devices
- 🌈 Modern UI with Tailwind CSS
- 🔍 Error handling and loading states

## Tech Stack
- React 18
- Vite
- React Router v6
- Zustand (State Management)
- TanStack Query
- Tailwind CSS
- Open Trivia Database API

## Getting Started

1. Clone the repository
```powershell
git clone https://github.com/yourusername/React_Project_Quiz.git
cd React_Project_Quiz
```

2. Install dependencies
```powershell
npm install
```

3. Start development server
```powershell
npm run dev
```

Visit `http://localhost:5173` to see the app.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests (if configured)
- `npm run lint` - Run ESLint

## Project Structure

```
React_Project_Quiz/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProgressBar.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Quiz.jsx
│   │   ├── ErrorPage.jsx
│   │   └── ...
│   ├── store/
│   │   └── QuizStore.js
│   ├── hooks/
│   │   └── quizApi.js
│   ├── router/
│   │   └── router.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
└── package.json
```

### Key Directories
- `components/` - Reusable UI components
- `pages/` - Route components
- `store/` - Zustand state management
- `hooks/` - Custom React hooks
- `router/` - React Router configuration

## License
Feel free to use this project for your own purposes.

---
Made with ❤️ by [Elzbieta Kukulka]
