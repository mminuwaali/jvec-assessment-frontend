import { PURGE } from 'redux-persist';
import api from '../../utilities/api';
import { formatNestError } from '../../utilities/error';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: Pick<StateType<any>, 'error' | 'loading'> & { user: null | UserType } = { error: '', user: null, loading: false };

export const login = createAsyncThunk<{ token: string, user: UserType }, Partial<UserType>>('account.slice/login', async data => await api.post("/login/", data));
export const register = createAsyncThunk<{ token: string, user: UserType }, Partial<UserType>>('account.slice/register', async data => await api.post("/register/", data));

const slice = createSlice({
    initialState,
    name: 'account',
    reducers: {
        clearError: (state) => { state.error = ''; },
        resetLoading: (state) => { state.loading = false; },
    },
    extraReducers(builder) {
        // reset state
        builder.addCase(PURGE, () => initialState);

        builder.addCase(login.fulfilled, (state, { payload }) => { localStorage.setItem('token', payload.token); state.user = payload.user; });
        builder.addCase(register.fulfilled, (state, { payload }) => { localStorage.setItem('token', payload.token); state.user = payload.user; });

        builder // common functionalities for the async requests
            .addMatcher(({ type }: any) => /^account.*pending$/.test(type), (state: typeof initialState) => { state.error = ''; state.loading = true; })
            .addMatcher(({ type }: any) => /^account.*fulfilled$/.test(type), (state: typeof initialState) => { state.error = ''; state.loading = false; })
            .addMatcher(({ type }: any) => /^account.*rejected$/.test(type), (state: typeof initialState, { error }: any) => { state.error = formatNestError(error); state.loading = false; });
    },
});

export default slice.reducer;
export const { resetLoading, clearError } = slice.actions;
