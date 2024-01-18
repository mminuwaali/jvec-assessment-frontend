import './style.css'
import $routes from './routes'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <$routes />
            </PersistGate>
        </Provider>
    </StrictMode>
)
