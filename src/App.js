import React from 'react';
import Background from './Background/Background';
import './App.css';

function App() {
  const [currentTheme, setTheme] = React.useState('light');

  const lightTheme = {
    '--color-primary': '#ffffff',
  };
  const darkTheme = {
    '--color-primary': '#171c28',
  };

  const applyTheme = (nextTheme) => {
    const theme = nextTheme === 'dark' ? lightTheme : darkTheme;
    Object.keys(theme).map((key) => {
      const value = theme[key];
      // eslint-disable-next-line no-undef
      document.documentElement.style.setProperty(key, value);
      return '';
    });
  };

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
          setTheme(nextTheme);
          applyTheme(nextTheme);
        }}
      >
        Toggle theme
      </button>
      <Background />
    </div>
  );
}

export default App;
