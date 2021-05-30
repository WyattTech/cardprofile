import React from 'react';


const{useState} = React;

function Counter () {
    const [count,setCount] = useState(0);


     return (

        <section className="sect4">
         <i onClick={()=>setCount(count+1)} className="fas fa-heart">{count}</i>
        </section>

     )
}

export default Counter;

