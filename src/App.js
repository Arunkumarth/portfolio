import './App.css';
import { Progress } from 'antd';
import {
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import Projects from './projectsPage';

function App() {
  const [show,showChange]=useState(0);
  function showProjects(){
    showChange(a=>!a);
  }
  return (
    <div className="App">
      
      
      <div className='flex-container'>
    \
        <section className='color-container'>
         <section className='outer-grid'>
         <div className='name'>
         <h2>Arunkumar.T </h2>
         {/* <p>fresher</p> */}
         <PhoneOutlined />
          <span>9597170376</span><br/>
          <MailOutlined />
          <span>t.arunkumar3112002@gmail.com</span>
         </div>
         <div className=' justify-end' >
         <img className='arun' src='./images/arun.jpg' width={170} height={180} alt='person' ></img>
         </div>
         </section>
        </section>
      

        <section className='color-container '>
         <section className='outer-grid'>
          <h2>Courses</h2>
          <br></br>
          {/* <section className='justify-end'> */}
            <span>
              1. Completed HTML,CSS,Java Script course in Coursera
            </span>
          <br></br>

            <span>
              2. Completed Python course in Guvi
              </span>
          {/* </section>   */}
         </section>
        </section>
        <section className='color-container '>
         <div className='project-grid'>
             <h2>Projects</h2>
           {show?null:<>
            <section className='justify-end'>
              <li>Portfolio</li>
              <li>To Do List</li>
              <li>Age Calculator</li>
              <li>Task List</li>
              <button className='btn-more hov' onClick={showProjects}>More info</button>
            </section>
           </>}
              {/* <Link className='route' to='/projects'>Explore</Link> */}
            <section>
            {show?<>
            <button className='btn-close hov' onClick={showProjects}>close</button>
            <Projects/>
            </>:null}
            </section>

         </div>

        </section>
        <section className='color-container '>
          <section className='outer-grid'>
          <h2>Skills</h2>
          <ul className='justify-end'>
            <li>HTML and CSS</li>
            <Progress percent={95} trailColor='white' size="small" status="active"/>
            <li>Java Script</li>
            <Progress percent={90} trailColor='white'  size="small" status="active" />
            <li>React</li>
            <Progress percent={80} trailColor='white'  size="small" status="active" />

          </ul>
          </section>
        </section>

        <section className='color-container '>
         <section className='outer-grid'>
         <h2>Education</h2>
            <div className='justify-end'>
           <h3>
            B.E-EEE 
           </h3>
            <p>University: Anna University</p>
           <p>Year: 2019-2023</p>
           <p>CGPA: 8.38</p>
           <br/>
           <br/>
           <h3>School Grade</h3>
           <p>HSC:80.3%</p>
           <p>SSLC:96%</p>
            </div>

         </section>
        </section>
        <section className='color-container '>
          <section className='outer-grid'>
          <h2>Tools used</h2>
         <div className='justify-end'>
         <ul >
            <li>Redux and Saga</li>
            <li> React UI library -
            Ant Design
            </li>
            <li>Axios</li>
            <li>Version Control System-Git</li>
          </ul>
         </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
