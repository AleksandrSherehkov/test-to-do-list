

import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/SharedLayout/SharedLayout'

const TasksPage = lazy(() => import('./pages/TasksPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}