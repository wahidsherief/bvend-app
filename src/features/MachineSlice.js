import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "config";
import { STATUS } from 'services/CommonService';
import { createAsyncReducerHandlers, createAsyncApiThunk, convertNameToPrefix } from "services/ReducerService";

const name = 'machine'

const prefix = convertNameToPrefix(name)

const url = (endpoint) => `${API_URL}/${endpoint}`;

export const fetch = createAsyncApiThunk(`${prefix}/fetch`, () => url(prefix), 'get', false);
export const save = createAsyncApiThunk(`${prefix}/save`, () => url(prefix), 'post', true);
export const update = createAsyncApiThunk(`${prefix}/update`, (data) => url(`${prefix}/${data.id}`), 'put', true);
export const remove = createAsyncApiThunk(`${prefix}/delete`, (id) => url(`${prefix}/${id}`), 'delete', true);
// export const assign = createAsyncApiThunk(`${prefix}/assign`, (id) => url(`${prefix}/${id}`), 'post', true);

const initialState = { data: [], status: STATUS.IDLE, validationErros: {} };

export const machine = createSlice({
    name,
    initialState,
    extraReducers: (builder) => {
        createAsyncReducerHandlers(builder, fetch);
        createAsyncReducerHandlers(builder, save);
        createAsyncReducerHandlers(builder, update);
        createAsyncReducerHandlers(builder, remove);
    },
});

export default machine.reducer;





