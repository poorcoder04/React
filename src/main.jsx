import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
// import  TodoList from './App.jsx'
import Play01 from './components/play-01.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TodoList /> */}
    <Play01 />
  </StrictMode>,
)
