import { useState } from 'react'
import Inputs from './Inputs'
import Display from './Display'


function App() {

  const [students, setStudents] = useState([
    {
      firstname: "Christian",
      lastname: "Naira",
      batchname: 'WD63'
    },
  ])

  const displayStudent = students.map(each => (
    <Display firstname={each.firstname} lastname={each.lastname} batchname={each.batchname} />
  ))

  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [
      ...prevStudents, newStudent
    ]
    )
  }

  return (
    <>
      <div className="container mt-5 border p-5">
        <div className="row">
          <h2>Students</h2>
          <Inputs addThisStudent={addStudent} />
          {displayStudent}

        </div>
      </div>
    </>
  )
}

export default App
