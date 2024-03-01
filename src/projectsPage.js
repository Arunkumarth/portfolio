import './App.css'
function Projects(){

    return(
        <>
        <div className='project-flex'>
            <div className='projectContentFlex'>
                <div className='projectDiscription'>
            <h1>To-Do List</h1>
                <p>
                A to-do list app is a digital tool designed to help users organize and manage their tasks, responsibilities, and activities.
                Link: <a href='https://arunkumarth.github.io/To-do_List/'>To-Do List</a>

                </p>
                </div>
                <div className='project-image'>
            <img className='pro-image' src="./images/todo.png" alt='To-do list'></img>
                     
                </div>
            </div>
            <div className='projectContentFlex'>
    
                <div className='project-image'>
            <img className='pro-image' src="./images/tasklist.png" alt='Task list'></img>

                </div>
                <div className='projectDiscription'>
            <h1>Task List</h1>
                <p>
                A task list app is a streamlined digital tool for efficiently creating, managing, and tracking tasks. Users can categorize, prioritize, and set deadlines, ensuring they stay organized and productive.
                Link: <a href='https://arunkumarth.github.io/Task_List/' target='blank'> Task List
                </a>

                    
                </p>
                </div>
            </div>
            <div className='projectContentFlex'>
                <div className='projectDiscription'>
            <h1>Age Calculator</h1>
                <p>
                An age calculator is a simple tool that calculates a person's age based on their birthdate and the current date. It's commonly used to determine a person's exact age in years, months, and days. 
                </p>
                </div>
                <div className='project-image'>
            <img className='pro-image' src="./images/agecalc.png" alt='Age calculator'></img>
                     
                </div>
            </div>
        </div>
       
     
       
       
       </>
    );
}
export default Projects;
