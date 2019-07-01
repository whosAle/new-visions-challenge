import React from 'react';

import Student from './Student';


const StudentList = (props) => {
  const { students } = props;

  const renderStudents = () => students.map(student => <Student student={student} key={student.studentId}/>)

  return (
    <div id="student-list">
      {renderStudents()}
    </div>
  );
}

export default StudentList;
