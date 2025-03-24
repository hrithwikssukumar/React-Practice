import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Virat,Rohit} from './App.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Virat/>
    <Rohit/>
   </StrictMode>,
 
)


