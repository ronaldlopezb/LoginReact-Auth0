import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isAuthenticated} = useAuth0()
  return (
    <div className="App">
      <header className="App-header">
        
        
          <LoginButton />
        
        <Profile />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
