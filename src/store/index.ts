import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
    reducer: persistReducer(
        {
            storage,
            key: 'contact-manager',
            blacklist: ['contact'],
        },
        combineReducers({})
    ),
})

export default store
export const persistor = persistStore(store)

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
