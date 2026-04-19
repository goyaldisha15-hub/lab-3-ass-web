import { useState } from 'react'
import Header from './components/Header'
import AddStudentForm from './components/AddStudentForm'
import StudentTable from './components/StudentTable'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman',  score: 78 },
    { id: 2, name: 'Riya',  score: 45 },
    { id: 3, name: 'Karan', score: 80 },
    { id: 4, name: 'Neha',  score: 68 },
  ])

  const [nextId, setNextId] = useState(5)

  function addStudent(newStudent) {
    setStudents([...students, { id: nextId, ...newStudent }])
    setNextId(nextId + 1)
  }

  function updateScore(id, newScore) {
    setStudents(students.map((s) => s.id === id ? { ...s, score: newScore } : s))
  }

  const total   = students.length
  const passing = students.filter((s) => s.score >= 40).length
  const avg     = total ? Math.round(students.reduce((a, s) => a + s.score, 0) / total) : 0

  return (
    <div className="app">
      <Header />
      <AddStudentForm onAdd={addStudent} />
      <div className="card stats-card">
        <div className="stat-box">
          <p className="stat-label">TOTAL</p>
          <p className="stat-num">{total}</p>
        </div>
        <div className="stat-box">
          <p className="stat-label">PASSED</p>
          <p className="stat-num green">{passing}</p>
        </div>
        <div className="stat-box">
          <p className="stat-label">AVERAGE</p>
          <p className="stat-num">{avg}</p>
        </div>
      </div>
      <StudentTable students={students} onUpdate={updateScore} />
    </div>
  )
}

export default App