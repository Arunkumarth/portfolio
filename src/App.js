import './App.css';
import {  Progress } from 'antd';
import {
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
 
      <div className='flex-container'>

        <section className='color-container'>
         <section className='outer-grid'>
         <div className='name'>
         <h2>Arunkumar.T</h2>
         {/* <p>fresher</p> */}
         <PhoneOutlined />
          <span>9597170376</span><br/>
          <MailOutlined />
          <span>t.arunkumar3112002@gmail.com</span>
         </div>
         <div className=' justify-end' >
         <img className='arun' src='./images/arun.jpg' width={190} height={200} alt='person' ></img>
         </div>
         </section>
        </section>
        
        {/* <section className='color-container c2'>
          <section className='outer-grid'>
            <section className='name'>
            <h2>Address</h2>
         <p> Do.No:9/5,Lakkumanaickenpatti,</p>
         <p>Kangeyam -638 111</p>
            </section>
          </section>
        </section> */}

        <section className='color-container '>
         <section className='outer-grid'>
          <h2>Courses</h2>

          <section className='justify-end'>
          <ul>
            <li>
              Completed HTML,CSS,Java Script course in Coursera
            </li>
            <li>
              Completed Python course in Guvi
              </li>
          </ul>
          </section>  
         </section>
        </section>
        <section className='color-container '>
          <section className='outer-grid'>
          <h2>Projects</h2>
            <section className='justify-end'>
              <li>Portfolio</li>
              <li>To Do List</li>
              <li>Age Calculator</li>
              <li>Task List</li>
            {/* <a href='#'>GitHub page URL</a> */}
            <br></br>

              <Link className='route' to='/projects'>Explore</Link>
            </section>
          </section>
            
        </section>
        <section className='color-container '>
          <section className='outer-grid'>
          <h2>Skills</h2>
          <ul className='justify-end'>
            <li>HTML and CSS</li>
            <Progress percent={100} size="small" />
            <li>Java Script</li>
            <Progress percent={90} size="small" status="active" />
            <li>React</li>
            <Progress percent={80} size="small" status="active" />

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
          <sectio className='outer-grid'>
          <h2>Other tools</h2>
          <ul className='justify-end'>
            <li>Redux and Saga</li>
            <li> React UI library -
            Ant Design
            </li>
            <li>Axios</li>
            <li>Version Control System-Git</li>
          </ul>
          </sectio>
        </section>
      </div>
    </div>
  );
}

export default App;
