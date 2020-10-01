import React from 'react';

const Error = ({mensaje}) => {
    return ( 

     <div className="alert text-center alert-dismissible alert-danger col-12">
         <h2 className="text-white " >{mensaje}</h2>
     </div>
     );
}
 
export default Error;