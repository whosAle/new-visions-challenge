import React, { useState } from 'react';

const StudentFilterAndSearch = (props) => {
  //Set up state for search and filter options to build a controlled form
  const [filterData, setFilterData] = useState({grade: "all", cohort: ""});
  const [searchQuery, setSearchQuery] = useState("");
  const [absentToggle, setAbsentToggle] = useState({action: false, threshold: 70});

  const handleGradeFilter = (event) =>{
    setFilterData({...filterData, [event.target.name]: Number(event.target.value)});
    props.onFilterClick(event.target.value);
  }

  const handleSearchChange = (event) =>{
    setSearchQuery(event.target.value);
    props.onSearchChange(event.target.value);
  }

  const handleThresholdChange = (event) =>{
    setAbsentToggle({...absentToggle, [event.target.name]: event.target.value});
  }

  const handleThresholdSubmit = (event) =>{
    event.preventDefault();
    props.onThresholdChange(Number(event.target.threshold.value));
  }

  const renderGradeDropdown = () => {
    return props.grades.map(grade => <option>{grade}</option>);
  }

  return (
    <div id="student-filters">
      <label name="search students" htmlFor="grade filter">Search Students By Name</label>
      <input id="student-search"
            value={searchQuery}
            onChange={handleSearchChange}/>

      <form onSubmit={handleThresholdSubmit}>
        <label name="absent Toggle" htmlFor="See Chronically Late Students">See Chronically Late Students Theshold:</label>
        <input type="number" name="threshold" value={absentToggle.threshold} onChange={handleThresholdChange}/>
      </form>

      <label name="grade filter" htmlFor="grade filter">Filter By Grade</label>
      <select name="grade" onChange={handleGradeFilter} value={filterData.grade}>
        <option>All</option>
        {renderGradeDropdown()}
      </select>

      <br/>
    </div>

  );

}

export default StudentFilterAndSearch;
