import React from 'react';



const Student = (props) => {
  const { student } = props;

  return (
    <div>
      <h3>{student.firstName + " "+ student.lastName}</h3>
      <p>Attendance Percentage: {student.attendancePercentage}</p>

    </div>
  );
}

export default Student;
