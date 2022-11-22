import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const CourseDetails = () => {
  const [course, setCourse] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const getCourse = async () => {
      const response = await axios.get(`http://localhost:3001/api/course/${id}`)
      setCourse(response.data)
    }
    getCourse()
  }, [])

  const convertGrade = (grade) => {
    let gradeVar
    switch (grade) {
      case 1:
        gradeVar = 'D'
        break
      case 2:
        gradeVar = 'C'
        break
      case 3:
        gradeVar = 'B'
        break
      case 4:
        gradeVar = 'A'
        break
      default:
        gradeVar = 'N/A'
    }
    return gradeVar
  }

  return (
    <div className="course_details">
      <h2>Course Details</h2>
      <h1>{course?.name}</h1>
      <h3>Students:</h3>
      <div>
        {course?.students.map((student) => (
          <div key={student.id}>
            Name: {student.name} Grade:{' '}
            {convertGrade(student.StudentCourses.grade)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetails
