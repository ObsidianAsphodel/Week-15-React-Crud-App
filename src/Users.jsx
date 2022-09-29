import React from 'react'

const Users = ({id, FirstName, LastName, EmailAddress}) => {
  return (
    <>
        <tr>{id}</tr>
        <tr>{FirstName}</tr>
        <tr>{LastName}</tr>
        <tr>{EmailAddress}</tr>
    </>
  )
}

export default Users