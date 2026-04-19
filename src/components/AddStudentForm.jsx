import { useState } from 'react'

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  function handleSubmit() {
    if (name === '' || score === '') {
      alert('Please fill both fields')
      return
    }
    onAdd({ name: name, score: Number(score) })
    setName('')
    setScore('')
  }

  return (
    <div className="card">
      <div className="card-top">
        <span className="card-title">● REGISTER STUDENT</span>
        <span className="card-title">ADD ENTRY</span>
      </div>
      <div className="form-row">
        <input type="text" placeholder="Student name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Score (0-100)" value={score} onChange={(e) => setScore(e.target.value)} />
        <button onClick={handleSubmit}>+ ADD</button>
      </div>
    </div>
  )
}

export default AddStudentForm