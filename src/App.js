import React, { useState } from 'react';
import './App.css';

import map from 'lodash/map';
import uniq from 'lodash/uniq';


import studentsData from './data/students.json';

import StudentList from './components/StudentList';
import Filter from './components/Filter';


const App = () => {


  const [absentThreshold, setAbsentThreshold] = useState(70);
  const [filterQuery, setFilterQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = (value) => {
    setFilterQuery(value);
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  }

  const handleThresholdChange = (value) => {
    setAbsentThreshold(value);
  }

  const filterChronicallyAbsentStudents = () => {

    return studentsData.filter(student => student.attendancePercentage < absentThreshold);
  }

  const availableGrades = () => {
    /*
      uses lodash to map over all of the students to find all available grades then finds the unique values of that array. Then it sorts the array in numerical order
    */
    return uniq(map(studentsData, student => student.grade)).sort((a,b) => a-b);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Filter grades={availableGrades()} onFilterClick={handleFilterClick} onSearchChange={handleSearchChange} onThresholdChange={handleThresholdChange}/>
      <StudentList students={filterChronicallyAbsentStudents()}/>
    </div>
  );
}

export default App;
