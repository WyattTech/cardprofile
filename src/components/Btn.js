import React from 'react';
import {useState} from 'react';


 function Btn() {

     //const [state, setState] = useState(initialState)
     const [name, setName] = useState(" ")
     const [skill, setSkills] = useState(" ")
     
     const handleName =()=> { 

        name ? setName("") : setName("My name is April") //React Conditional 


     }

     const handleSkill =()=> {

        skill ? setSkills("") : setSkills("I'm a frontend web developer")//React Conditional 

     } 

    return (

        <section  className="sect3">
         <p>{name}</p>
         <button  className="btn" onClick={handleName} value="Name">Name</button>
         <p>{skill}</p>
         <button className="btn2" onClick={handleSkill} value="Skill">Skill</button>
        </section>
    );
     
}

export default Btn;