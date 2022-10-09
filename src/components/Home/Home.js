import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';


const Home = ({email}) => {
   // To logout//
   const handleLogout = () => {
      sessionStorage.removeItem('Auth Token');
      navigate('/login')
  }
   // To protect home page by authToken
   let navigate = useNavigate();
   useEffect(() => {
       let authToken = sessionStorage.getItem('Auth Token')
      // its working if i set email or authToken//

       if (authToken) {
         // toast.success('Logged in successfully !');
         // setTimeout(() => {
         //    navigate('/home')
         // }, 2000);
         
       }

       if (!authToken) {
           navigate('/login')
       }
   }, [navigate])

   return (
      <div>
         <Typography variant='subtitle2' component="p">User Logged in :{email}</Typography>
         <Typography variant='h2' component='h1'>Welcome to Home Page!</Typography>
         <Button variant="contained" color="secondary" onClick={handleLogout}>Log out</Button>
      </div>
   );
};

export default Home;