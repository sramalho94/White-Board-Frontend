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
      <h2>CourseDetails</h2>
      <h3></h3>
    </div>
  )
}

export default CourseDetails
