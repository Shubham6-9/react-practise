# Random Dog Image Viewer

A simple and interactive React application that displays random dog images fetched from the Dog API. This project demonstrates fundamental React concepts and modern web development practices.

## Features

- 🐕 Displays random dog images from the Dog API
- 🔄 One-click image refresh functionality
- ⚡ Built with Vite for optimal performance

## Technical Stack

- React 19.0.0
- Vite 6.2.0
- Modern JavaScript (ES6+)
- CSS for styling

## Project Structure

```
src/
├── components/
│   └── Dog.jsx       # Main component for dog image display
├── App.jsx           # Root component
├── App.css           # Styles for App component
├── index.css         # Global styles
└── main.jsx         # Application entry point
```

## Key Features

- **Real-time Image Fetching**: Uses the Dog API (dog.ceo/api) to fetch random dog images
- **State Management**: Implements React hooks (useState, useEffect) for efficient state handling
- **Interactive UI**: Simple button interface to fetch new images
- **Responsive Design**: Adapts to different screen sizes

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Development

This project uses:
- ESLint for code quality
- React Strict Mode for better development experience
- Modern React practices with functional components and hooks

## API Reference

The application uses the [Dog API](https://dog.ceo/dog-api/) to fetch random dog images. The API endpoint used is:
```
https://dog.ceo/api/breeds/image/random
```
