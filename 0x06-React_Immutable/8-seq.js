import { Seq, fromJS } from 'immutable';

// Function to print best students
export function printBestStudents(grades) {
  // Convert the plain object to an Immutable Map
  const immutableGrades = fromJS(grades);

  // Filter students with score >= 70 using Seq
  const bestStudents = Seq(immutableGrades).filter(student => student.get('score') >= 70);

  // Map over the result to capitalize the first letter of first and last names
  const formattedStudents = bestStudents.map(student =>
    student.set('firstName', student.get('firstName').charAt(0).toUpperCase() + student.get('firstName').slice(1))
      .set('lastName', student.get('lastName').charAt(0).toUpperCase() + student.get('lastName').slice(1))
  );

  // Convert the Seq back to an object and print to the console
  console.log(formattedStudents.toJS());
}
