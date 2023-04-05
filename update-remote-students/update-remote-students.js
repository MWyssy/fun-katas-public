
function updateRemoteStudents (students) {
  const copyStudents = [...students].map((student) => {
    const copyStudent = {...student};
    return copyStudent;
  });
  if (copyStudents.length === 0) return copyStudents;
  
  const result = copyStudents.map((student) => {
    if (student.hasOwnProperty('location')) {
      return student;
    } else {
      student['location'] = 'remote';
      return student;
    }  
  });
  console.log(result)
  return result;
}

module.exports = updateRemoteStudents;
