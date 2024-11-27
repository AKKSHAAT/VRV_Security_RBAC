import React from 'react'
import { ProtectedComponent } from './ProtectedComponent'
import UserList from './UserList'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
    <h1>Dashboard</h1>
    <ProtectedComponent permission={'create'}>
        <Link to={'/newUser'}>New User</Link>
    </ProtectedComponent>

    <ProtectedComponent permission={'read'}>
        <UserList />
    </ProtectedComponent>
    </div>
  )
}
