import Header from './components/Header';
import Btn from './components/Btn';
import Counter from './components/Counter';
import './App.css';

function App() {

   

  return (
    <>
    <main className="mainWrapper">
    <div className="contentWrapper">

        <Header/>

    <section className="sect2">
      <h1>Hello!</h1>


        <Btn />


     <br /> 
      <div className="sect4">
        <Counter/>
      </div>

       <footer className="sect5">
         <a href="https://github.com/WyattTech" target="_blank" rel="noreferrer noopener"><i className="fab fa-github-alt"></i></a>
         <a href="https://codepen.io/wyatttech" target="_blank" rel="noreferrer noopener"><i className="fab fa-codepen"></i></a>
        </footer>

    </section>
    

    </div>
      
  

   
  
    </main>
    

     
    </>
  );
}

export default App;
