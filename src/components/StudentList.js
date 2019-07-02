import React from 'react';
import { Card } from 'semantic-ui-react';

import Student from './Student';


const StudentList = (props) => {
  const { students } = props;

  const renderStudents = () => students.map(student => <Student student={student} key={student.studentId}/>)

  return (
    <Card.Group id="student-list" centered stackable>
      {renderStudents()}
    </Card.Group>
  );
}

export default StudentList;
