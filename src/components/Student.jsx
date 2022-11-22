import React from 'react'

const Student = ({name,email}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}

export default Student