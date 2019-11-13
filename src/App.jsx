import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';

function App(props){
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        window.onkeydown = (e)=>{
            if( e.keyCode===37 && currentPage >0){
                 setCurrentPage(currentPage -1);
            }
            else if
                (e.keyCode===39 && currentPage < Math.floor(props.users.length/10)){
                   setCurrentPage( currentPage +1 );
                }
        }
    });
        
    const setPage=(e)=>{
        setCurrentPage( e.target.textContent - 1 );
    }
            
    const getPagesNumbers=()=>{
        let arr =[];
        let count = Math.floor(props.users.length / 10);
        for(let i =0; i<=count; i++){
            arr.push(i);
        }
        return arr;
    }
    
    const cP = currentPage;
    const lastPage = props.users.length;
        
    const links = getPagesNumbers().slice((cP>5 ? cP-5 : 0), ( cP>5 ? cP+5 : 10)).map((elem, index)=>{
        return <button  
            key={index}
            className ={ elem === currentPage ? 'checked': undefined } 
            onClick ={setPage}> {elem +1}
        </button>;    
    })
 
    const list = props.users.map((elem, index)=>{
        return <User
            number = {index +1}
            key = {index}
            name = {elem.name}
            surname = {elem.surname}
            age= {elem.age}
            sex = {elem.sex}
        />
    });
                 
    const pages = list.slice( cP * 10, cP *10 +10);
               
    return ( 
        <div className="appWrapper">
            <div className="pages">
                {cP>5 && '...'}
                {links}
                {cP +5 < lastPage/10 && '...'}
            </div>
            <table>
                <tbody>
                    {pages}
                </tbody>
            </table> 
        </div>
    )
} 

export default App;
