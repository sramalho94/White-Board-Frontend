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
    const newCourse = await axios.post(
      'http://localhost:3001/api/course/create',
      {
        name: formValues.name
      }
    )
    console.log('created course')
  }
  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <h1>Hello</h1>
          <p>Add a New Course Below</p>
          <div className="input-wrapper">
            <input
              className="name"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="button1">
            <button className="regButton" disabled={!formValues.name}>
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCourseForm
