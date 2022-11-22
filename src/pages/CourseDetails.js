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
      console.log(response.data)
    }
    getCourse()
  }, [])

  return (
    <div>
      <h2>Course Details</h2>
      <h1>{course.name}</h1>
      <h3>Students:</h3>
      <div>
        {course.students.map((student) => (
          <h1 key={student.id}>
            {student.name} {student.StudentCourses.grade}
          </h1>
        ))}
      </div>
    </div>
  )
}

export default CourseDetails
