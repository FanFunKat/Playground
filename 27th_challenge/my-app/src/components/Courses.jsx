import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import HTML from './courses/HTML.jsx';
import CSS from './courses/CSS.jsx';
import JavaScript from './courses/JavaScript.jsx';


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to='html'>HTML</NavLink></li>
        <li><NavLink to='css'>CSS</NavLink></li>
        <li><NavLink to='javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    <Routes>
      <Route path="html" element={<HTML />} />
      <Route path="css" element={<CSS />} />
      <Route path="javascript" element={<JavaScript />} />
    </Routes>
  </div>
);

export default Courses;