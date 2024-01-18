import './style.css'
import $routes from './routes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
    <StrictMode>
        <$routes />
    </StrictMode>
)
