import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Resume from '../Resume/Resume';
import WorkDetails from '../WorkDetails/WorkDetails';
import Bolgs from '../Blogs/Bolgs';
import BlogDetail from '../BlogDetail/BlogDetail';
import Contact from '../Contact/Contact';
import Team from '../Team/Team';
// import Navber from '../Nav/Navber'



const AllRoute = () => {
    return (
        <div>
          
               
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/resume' element={<Resume/>} />
                    <Route path='/work' element={<Work/>} />
                    <Route path='/blog' element={<Bolgs/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/my_team_members' element={<Team/>} />
                    {/* Dynamic Route */}
                    <Route path='/detailsOn/:workId' element={<WorkDetails/>} />
                    <Route path='/blogDetail/:blogId' element={<BlogDetail/>} />
                </Routes>
               

        </div>
    );
};

export default AllRoute;