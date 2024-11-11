
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import { createContext, useState } from 'react';

export const UserContext = createContext("Guest");
export const ThemeContext = createContext("light");


function App() {

  const [userName, setUserName] = useState("Guest");
  const [theme, setTheme] = useState("light");

  const changeUserName = (e) => {
    const newUserName = e.target.closest('div').querySelector('input').value;
    setUserName(newUserName);
  }

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={userName}>
        <Header />
        <input />
        <button onClick={changeUserName}>Change name</button>
        <Profile />
        
        <div>
          <button onClick={changeTheme}>Change Theme</button>
        </div>

      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
