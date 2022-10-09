import Form from "./components/common/Form";
import {  Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { app } from './components/common/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
import Home from "./components/Home/Home";
// Now let's add the toast messages for our errors.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// <----customize theme---->
const theme = createTheme({
  // palette:{
  //   primary : {
  //     // main: "#f50057",
  //     // main: "#ff5722",
  //     // main: purple[500]
  //   },
  //   // secondary:{
  //   //   main: "#4dd0e1",
  //   // }
  // },
  typography: {
    fontFamily: "Comic Sans MS"
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  },
});

function App() {
  const [email, setEmail] = useState('');
  // console.log({email});
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
 let {from} = location.state || {from: {pathname: '/'}};
  // let {from} = location.state?.from || '/' ;
  

  const handleAction = (id) => {
    // console.log({id});
    const auth = getAuth();
    // For Register page //
    if(id === 2) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          setTimeout(() => {
            // navigate(from)
            navigate('/home', {replace: true})
          }, 2000);
        // sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        // console.log(res);
    
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email Already in Use');
        }
        console.log(error);
       
      });
    }

    // For Login Page//
    if(id === 1) {
      signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success('Logged in successfully !');
          setTimeout(() => {
            // navigate(from)
            // toast.success('Logged in successfully !');
            navigate('/home', {replace: true})
         
          }, 6000);
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        // console.log(res);
    
      })
        // we are going to use another package for handling toast error messages called React Toastify.
        // Install it using this command: npm i react-toastify 
      .catch((error) => {
        // const errorMessage = error.message;
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
        console.log(error);
       
      });
    }
    
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [navigate])
  return (
    <>
        {/* Added Error handler toast */}
        <ToastContainer position="bottom-center"/>
    
    <ThemeProvider theme={theme}>
  
      <Routes>
        <Route path='/login' element={<Form title='Login' 
                                            setEmail={setEmail} 
                                            setPassword={setPassword}
                                            handleAction = {()=> handleAction(1)} />}
                                            />

        <Route path='/register' element={<Form title='Register' 
                                                setEmail={setEmail} 
                                                setPassword={setPassword}
                                                handleAction ={()=> handleAction(2)} />}
                                                />
        <Route path='/home' element={<Home email={email}/>}/>  

         {/* <Route path="/*" element={<ProtectRoute email={email}/>}>
              <Route path='home' element={<Home email={email}/>}/>
        </Route>   */}
       

      </Routes>
  
    
    </ThemeProvider>
    </>
    
  );
}

export default App;
