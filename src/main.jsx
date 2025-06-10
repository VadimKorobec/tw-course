import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Part2 from './Part2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Part2/>
  </StrictMode>,
)
