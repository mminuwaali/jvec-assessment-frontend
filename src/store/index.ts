import * as account from './slice/account.slice'
import * as contact from './slice/contact.slice'

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
        combineReducers({
            account: account.default,
            contact: contact.default,
        })
    ),
})

export default store
export const persistor = persistStore(store)

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector

store.subscribe(() => {
    const state = store.getState()

    if (state.account.error) setTimeout(() => store.dispatch(account.clearError()), 5000)
    if (state.contact.error) setTimeout(() => store.dispatch(contact.clearError()), 5000)
})
