import { toast } from "react-toastify";
import { STATUS, transformErrorData } from "./CommonService";
import axiosInstance from "axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createAsyncApiThunk = (actionType, urlBuilder, method, showToast) =>
    createAsyncThunk(
        actionType,
        async (arg) => makeApiRequest(showToast, urlBuilder(arg), method, arg)
    );

export const createAsyncReducerHandlers = (builder, asyncAction) => {
    builder.addCase(asyncAction.pending, (state) => {
        state.status = STATUS.LOADING;
    });

    builder.addCase(asyncAction.fulfilled, (state, action) => {
        fulfilledReducer(state, action);
    });

    builder.addCase(asyncAction.rejected, (state, action) => {
        rejectedReducer(state, action);
    });
};

export const convertNameToPrefix = (str) => {
    return str.split(/(?=[A-Z])/).join('/').toLowerCase();
};


const responseWithToast = (response, showToast) => {
    return { ...response.data, showToast }
}

const makeApiRequest = async (showToast, url, method, data) => {
    try {
        const response = await axiosInstance[method](url, data);
        console.log(responseWithToast(response, showToast))
        return responseWithToast(response, showToast)
    } catch (error) {
        const transformedError = error && JSON.stringify(transformErrorData(error.response));
        throw new Error(transformedError);
    }
};

const fulfilledReducer = (state, action) => {
    if (action.payload.success) {
        state.status = STATUS.IDLE;
        state.data = action.payload.data;
        if (action.payload.showToast && action.payload.message) {
            toast.success(action.payload.message);
        }
    } else {
        state.status = STATUS.ERROR;
        toast.error('Unknown error.');
    }
};


const rejectedReducer = (state, action) => {
    state.status = STATUS.ERROR;

    if (action.error.message) {
        state.validationErrors = JSON.parse(action.error.message);
    }

    toast.error('Unknown error.');
};


