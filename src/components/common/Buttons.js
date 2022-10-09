import React from 'react';
import Button from '@mui/material/Button';
const Buttons = ({title, handleAction}) => {
   return (
      <div>
         <Button variant="contained" color="secondary" onClick={handleAction}>{title}</Button>
       
         
      </div>
   );
};

export default Buttons;