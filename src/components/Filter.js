import React, { useState } from 'react';

import { Form, Grid, Checkbox } from 'semantic-ui-react';

const StudentFilterAndSearch = (props) => {
  //Set up state for search and filter options to build a controlled form
  const [filterData, setFilterData] = useState({grade: "all", cohort: ""});
  const [searchQuery, setSearchQuery] = useState("");
  const [absentToggle, setAbsentToggle] = useState({active: false, threshold: 100});

  //Event Handlers
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
    props.onThresholdChange(Number(event.target.value));
  }

  const handleThresholdSubmit = (event) =>{
    event.preventDefault();
    props.onThresholdChange(Number(event.target.threshold.value));
  }

  const handleToggleChange = (event) => {
    if (absentToggle.active) {
      props.onThresholdChange(100);
    };
    setAbsentToggle({...absentToggle, active: !absentToggle.active})
  }

  //Render Helper Functions
  const renderGradeDropdown = () => {
    return props.grades.map(grade => <option>{grade}</option>);
  }

  return (
    <div id="student-filters">
    <Grid columns={3} divided>
      <Grid.Column>
        <Form>
          <Form.Field>
            <label name="search students" htmlFor="grade filter">Search Students By Name</label>
            <input id="student-search"
                  value={searchQuery}
                  onChange={handleSearchChange}/>
          </Form.Field>
        </Form>
      </Grid.Column>

      <Grid.Column>
        <Form onSubmit={handleThresholdSubmit}>
          <Form.Field>
            <label name="absent Toggle" htmlFor="See Chronically Late Students">Set Chronically Late Students Theshold:</label>
            <input type="number" name="threshold" value={absentToggle.threshold} onChange={handleThresholdChange}/>
          </Form.Field>
        </Form>

{//        <Checkbox toggle label="Toggle Absent Threshold" onChange={handleToggleChange}/>
}
      </Grid.Column>

      <Grid.Column>
        <Form>
          <Form.Field>
            <label name="grade filter" htmlFor="grade filter">Filter By Grade</label>
            <select name="grade" onChange={handleGradeFilter} value={filterData.grade}>
              <option>All</option>
              {renderGradeDropdown()}
            </select>
          </Form.Field>
        </Form>
      </Grid.Column>

    </Grid>
    </div>
  );

}

export default StudentFilterAndSearch;
