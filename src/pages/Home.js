import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Course } from '../components/Course'
import { Link } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [courses, setCourses] = useState(null)
  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get(
        'http://localhost:3001/api/course/courses/students'
      )
      setCourses(response.data)
      console.log(response.data)
    }
    getCourses()
  }, [])

  return (
    <div>
      <h1>Courses </h1>
      {courses?.map((course) => (
        <div key={course.id}>
          <Course name={course.name} />
          <Link to={`/course/details/${course.id}`}>{course.name} details</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
