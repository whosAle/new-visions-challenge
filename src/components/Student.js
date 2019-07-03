import React from 'react';
import { Card } from 'semantic-ui-react';

const Student = (props) => {
  const { student } = props;

  return (
    <Card>
      <Card.Content header={student.firstName + " "+ student.lastName} />
      <Card.Content>
          <p>School: {student.schoolName}</p>
          <p>Grade: {student.grade}</p>
          <p>Email: {student.email}</p>
          <p>Home Phone Number: {student.homePhoneNumber}</p>
          <p>advisor: {student.advisor}</p>
          <p>Guidance Counselor: {student.guidanceCounselor}</p>
          <p>Guidance Counselor Email: {student.guidanceCounselorEmail}</p>
          <p>Attendance Percentage: {student.attendancePercentage}</p>
      </Card.Content>

    </Card>
  );
}

export default Student;
