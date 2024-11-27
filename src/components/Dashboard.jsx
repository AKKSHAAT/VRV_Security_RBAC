import React from 'react'
import { ProtectedComponent } from './ProtectedComponent'
import { usersData } from '../Auth/authProvider'
import UserList from './UserList'

export const Dashboard = () => {
  return (
    <div>
    <h1>Dashboard</h1>
    <ProtectedComponent permission={'create'}>
        <button>New User</button>
    </ProtectedComponent>

    <ProtectedComponent permission={'read'}>
        <UserList />
    </ProtectedComponent>
    </div>
  )
}
