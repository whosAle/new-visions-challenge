import React from 'react';
import './App.css';

import studentsData from './data/students.json';

import StudentList from './components/StudentList';


const App = () => {
  console.log(studentsData);

  return (
    <div>
      <h1>Dashboard</h1>
      <StudentList students={studentsData}/>
    </div>
  );
}

export default App;
