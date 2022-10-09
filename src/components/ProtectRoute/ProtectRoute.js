import React from 'react';
import { Navigate, Outlet,  } from 'react-router-dom';

const ProtectRoute = ({email}) => {
   console.log('private :' ,email,);
   return (
      <div>
         email ? <Outlet/> : <Navigate to="/login" />;
      </div>
   );
};

export default ProtectRoute;