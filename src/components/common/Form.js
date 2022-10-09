import React from 'react';
import './Form.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Buttons from './Buttons';

const Form = ({title, setPassword, setEmail, handleAction}) => {
   return (
      <div>
         <div className='headingContainer' style={{textAlign:'center', fontSize:'2rem', fontWeight:600,color:"#2979ff", margin:"3rem auto"}}>
            <Typography variant="h3" component="h2" color='secondary'>{title} Form</Typography>
         </div>
           <center >
               <Box 
                  className='innerBox'
                  component="form"
                  sx={{
                  '& > :not(style)': { m: 2.5, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  >
                  <TextField required id="email" color='secondary' label="Enter the Email" variant="standard" onChange={(e)=> setEmail(e.target.value)}/> <br />
                  <TextField required id="password" color='secondary' label="Enter the Password" type="password" variant="standard" onChange={(e)=> setPassword(e.target.value)} /> <br />
                  <Buttons title={title} handleAction={handleAction}/>
               </Box>  
               
           </center> 
           <p>Lorem ipsum dolor sit amet.</p>     

      </div>
   );
};

export default Form;