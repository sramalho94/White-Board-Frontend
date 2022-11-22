import React from 'react'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddCourseForm = () => {
  const [formValues, setFormValues] = useState({
    name: ''
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newCourse = await axios.post('http://localhost:3001/api/course/create')
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
  
    return <div>AddCourseForm</div>
  }
}
export default AddCourseForm
