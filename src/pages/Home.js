import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Course } from '../components/Course'

const Home = () => {
  const navigate = useNavigate()
  const [courses, setCourses] = useState(null)
  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get(
        'http://localhost:3001/api/course/courses'
      )
      setCourses(response.data)
      console.log(response.data)
    }
    getCourses()
  }, [])

  return (
    <div>
      <h1>Courses </h1>
      {courses.map((course) => (
        <Course name={course.name} key={course.id} />
      ))}
    </div>
  )
}

export default Home
