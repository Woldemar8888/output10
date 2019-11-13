import React from 'react';

const User =(props)=> {
             return <tr>
                 <td>{props.number}</td>
                 <td>{props.name}</td>
                 <td>{props.surname}</td>
                 <td>{props.age}</td>
                 <td>{props.sex}</td>  
             </tr> 
        }

export default User;