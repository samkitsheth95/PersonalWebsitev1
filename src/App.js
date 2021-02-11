import React from 'react';
import Home from './Home/Home';
import Background from './Background/Background';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import OtherProjects from './OtherProjects/OtherProjects';
import './App.css';

function App() {
  const [currentTheme, setTheme] = React.useState('dark');

  const lightTheme = {
    '--color-primary': '#ffffff',
    '--font-color': '#444452',
  };
  const darkTheme = {
    '--color-primary': '#171c28',
    '--font-color': '#e7e7e7',
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
      <div className="head">
        <div className="buttonsunmoon">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-brightness-high-fill sun" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
          <div className="form-switch sqq">
            <input
              onClick={() => {
                const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
                setTheme(nextTheme);
                applyTheme(nextTheme);
              }}
              className="switch form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-moon moon" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z" />
          </svg>
        </div>
      </div>
      <div className="container">
        <Home />
        <Background />
        <Skills />
        <Experience />
        <FeaturedProject />
        <OtherProjects />
      </div>
    </div>
  );
}

export default App;
