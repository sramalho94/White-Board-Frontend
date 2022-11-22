import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Student from '../components/Student'
import { Link } from 'react-router-dom'
const Students = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get(
        'http://localhost:3001/api/students/students'
      )
      setStudents(response.data)
    }
    getStudents()
  }, [])
  return (
    <div className="students-wrapper">
      <h1 className="students-title">Students</h1>
      {students?.map((student) => (
        <div key={student.id}>
          <div className="student-card">
            <Student name={student.name} courses={student?.courses} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Students
