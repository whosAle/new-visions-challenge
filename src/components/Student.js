import React from 'react';



const Student = (props) => {
  const { student } = props;

  return (
    <div>
      <h3>{student.firstName + " "+ student.lastName}</h3>
      <p>School: {student.schoolName}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: {student.email}</p>
      <p>Home Phone Number: {student.homePhoneNumber}</p>
      <p>advisor: {student.advisor}</p>
      <p>Guidance Counselor: {student.guidanceCounselor}</p>
      <p>Guidance Counselor Email: {student.guidanceCounselorEmail}</p>
      <p>Attendance Percentage: {student.attendancePercentage}</p>

    </div>
  );
}

export default Student;
