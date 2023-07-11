import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import Protected from './Components/Protected';

const App = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = useGoogleLogin({

    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      navigate('/dashboard');
    },

    onError: (error) => console.log('Login failed', error)
    
  });

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn onGoogleClick={login} />} />
        <Route path='/dashboard' element={
          // <Protected isSignedIn={!!user}>
            <Dashboard />
          // </Protected>
        } />
      </Routes>
    </>
  );
}

export default App;
