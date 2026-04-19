import { useState } from 'react'

function StudentRow({ student, onUpdate }) {
  const [newScore, setNewScore] = useState(student.score)

  function handleUpdate() {
    onUpdate(student.id, Number(newScore))
  }

  const isPass = student.score >= 40

  return (
    <tr>
      <td>{student.name}</td>
      <td className={isPass ? 'score-pass' : 'score-fail'}>{student.score}</td>
      <td>
        <span className={isPass ? 'badge pass' : 'badge fail'}>
          ● {isPass ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td>
        <input type="number" value={newScore} onChange={(e) => setNewScore(e.target.value)} />
        <button onClick={handleUpdate}>SAVE</button>
      </td>
    </tr>
  )
}

export default StudentRow