import { PURGE } from 'redux-persist';
import api from '../../utilities/api';
import { formatNestError } from '../../utilities/error';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: StateType<ContactType> = { data: [], error: '', item: null, loading: false };

export const getContacts = createAsyncThunk<ContactType[]>('contact.slice/getContacts', async () => await api.get('contact'));
export const deleteContact = createAsyncThunk<void, number>('contact.slice/deleteContact', async id => await api.delete(`contact/${id}`));
export const createContact = createAsyncThunk<ContactType, Omit<ContactType, 'id'>>('contact.slice/createContact', async data => await api.post('contact', data));
export const updateContact = createAsyncThunk<ContactType, Partial<ContactType>>('contact.slice/updateContact', async data => await api.patch(`contact/${data.id}`, data));

const slice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        clearError: (state) => { state.error = ''; },
        resetLoading: (state) => { state.loading = false; },
    },
    extraReducers(builder) {
        // reset state
        builder.addCase(PURGE, () => initialState);

        builder.addCase(getContacts.fulfilled, (state, { payload }) => { state.data = payload; });
        builder.addCase(createContact.fulfilled, (state, { payload }) => { state.data.push(payload); });
        builder.addCase(deleteContact.fulfilled, (state, { meta }) => { state.data = state.data.filter(ele => ele.id != meta.arg) });
        builder.addCase(updateContact.fulfilled, (state, { payload }) => { state.data = state.data.map(ele => ele.id == payload.id ? payload : ele) });

        builder // common functionalities for the async requests
            .addMatcher(({ type }: any) => /^contact.*pending$/.test(type), (state: typeof initialState) => { state.error = ''; state.loading = true; })
            .addMatcher(({ type }: any) => /^contact.*fulfilled$/.test(type), (state: typeof initialState) => { state.error = ''; state.loading = false; })
            .addMatcher(({ type }: any) => /^contact.*rejected$/.test(type), (state: typeof initialState, { error }: any) => { state.error = formatNestError(error); state.loading = false; });
    },
});

export default slice.reducer;
export const { resetLoading, clearError } = slice.actions;
