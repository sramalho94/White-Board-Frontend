import React from 'react'

const Student = ({name,courses}) => {
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
  const calculateAverage = () => {
    let average=0
    
    for (let i=0; i < courses.length; i++){
      average += parseInt(courses[i].StudentCourses.grade)
    }
    average = Math.floor(average / courses.length)
    return average
  }
  return (
    <div>
      <h1>{name}</h1>
      {courses?.map((course)=>(
        <h3 key={course.id}>{convertGrade(calculateAverage())} </h3>
      ))}
      <h2>{}</h2>
    </div>
  )
}

export default Student