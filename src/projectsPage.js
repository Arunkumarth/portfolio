import { Link } from 'react-router-dom';
import './App.css'
function Projects(){

    return(
       <section className="pro-container">
        <div className='image-flex'>
            <h1>To-Do List</h1>
            <img className='pro-image' src="./images/todo.png" alt='To-do list'></img>
          
        </div>
        <hr></hr>
        <div className='image-flex'>
            <h1>Task List</h1>
            <img className='pro-image' src="./images/tasklist.png" alt='Task list'></img>
        </div>
            <hr></hr>
        <div className='image-flex'>
            <h1>Age Calculator</h1>
            <img className='pro-image' src="./images/agecalc.png" alt='Age calculator'></img>
            <br></br>
            <Link className='route' to='/portfolio/'>Go back to Home</Link>
            
        </div>

       </section>
    );
}
export default Projects;
