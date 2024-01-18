import './style.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
    <StrictMode>
        <h1>hello world</h1>
    </StrictMode>
);
