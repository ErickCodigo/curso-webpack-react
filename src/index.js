import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'
import('./styles/global.scss')

const domNode = document.getElementById('app')
const root = createRoot(domNode)

root.render(<App />)
