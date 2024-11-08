
const UserContext = createContext({ name: 'Guest' });
const ThemeContext = createContext({ theme: 'light' })
const userContext = useContext(UserContext);
const themeContext = useContext(ThemeContext);



function Header() {
    return ( 
        
        <UserContext.Provider value='Guest'>
            
        </UserContext.Provider>
        
     );
}

export default Header;