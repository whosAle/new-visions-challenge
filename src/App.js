import React, { useState } from 'react';
import './App.css';

import { Container } from 'semantic-ui-react';

import map from 'lodash/map';
import uniq from 'lodash/uniq';

import studentsData from './data/students.json';

import StudentList from './components/StudentList';
import Filter from './components/Filter';


const App = () => {

  //Set up state
  const [absentThreshold, setAbsentThreshold] = useState(100);
  const [gradeFilter, setGradeFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  //Callback functions
  const handleFilterClick = (value) => {
    setGradeFilter(Number(value));
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

  //Helper Functions
  const filterByGrade = (array) => array.filter(student => student.grade === gradeFilter);

  const searchFilter = (students) => {
    /*
      filters through the array and selects the students with a first
      OR last name that matches with the search query
    */
    return students.filter(student => student.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    ||
    student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  }

  const filteredStudents = () => {
    /*
      filters through all of the students based on the selected filters.
      first checks if both filters are being used and compounds the filters.
      Otherwise it does each filter individually on top of the absent filter.
    */
    if (searchQuery && gradeFilter) {
      return searchFilter(filterByGrade(filterChronicallyAbsentStudents()));
    } else if (searchQuery) {
      return searchFilter(filterChronicallyAbsentStudents());
    } else if (gradeFilter) {
      return filterByGrade(filterChronicallyAbsentStudents());
    } else{
      return filterChronicallyAbsentStudents();
    }
  }

  const availableGrades = () => {
    /*
      uses lodash to map over all of the students to find all available grades then finds the unique values of that array. Then it sorts the array in numerical order
    */
    return uniq(map(studentsData, student => student.grade)).sort((a,b) => a-b);
  }

  return (
    <Container>
      <h1>Student Dashboard</h1>
      <Filter grades={availableGrades()} onFilterClick={handleFilterClick} onSearchChange={handleSearchChange} onThresholdChange={handleThresholdChange}/>
      <StudentList students={filteredStudents()}/>
    </Container>
  );
}

export default App;
