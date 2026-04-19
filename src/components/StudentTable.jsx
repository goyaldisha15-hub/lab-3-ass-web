import StudentRow from './StudentRow'

function StudentTable({ students, onUpdate }) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="card-title">STUDENT RECORDS</span>
        <span className="card-title">{students.length} ENTRIES</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow key={student.id} student={student} onUpdate={onUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable