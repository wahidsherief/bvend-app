import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { useNavigate } from "react-router-dom";
import { STATUS } from 'services';



export const productCategory = createSlice({
    name: 'productCategory',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        create: (state, action) => {
            state.categories.push(action.payload)
        },
        update: (state, action) => {
            state.categories.forEach((category) => {
                if (category.id === action.payload.id) {
                    category.category = action.payload.category
                    category.brand = action.payload.brand
                }
            })
        },
        remove: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(getCategories.rejected, (state) => {
                state.status = STATUS.ERROR
            })

        // .addCase(createCategory.pending, (state) => {
        //     state.status = STATUS.LOADING
        // })
        // .addCase(createCategory.fulfilled, (state, action) => {
        //     state.data = action.payload
        //     state.status = STATUS.IDLE
        // })
        // .addCase(createCategory.rejected, (state) => {
        //     state.status = STATUS.ERROR
        // })
    }
})

export const { create, update, remove } = productCategory.actions
export default productCategory.reducer;





// const updateCategoryPath = 'category/update'
// const updateCategoryURL = `${API_URL}product/categgory/update`

// const deleteCategoryPath = 'category/delete'
// const deleteCategoryURL = `${API_URL}product/categgory/delete`


const getCategoryPath = 'category/fetch'
const getCategoryURL = `${API_URL}product/categories`

export const getCategories = createAsyncThunk(
    getCategoryPath,
    async () => {
        try {
            const response = await axios.get(getCategoryURL)
            return [...response.data]
        } catch (err) {
            return err.message
        }
    }
)

const createCategoryPath = 'category/create'
const createCategoryURL = `${API_URL}product/category/create`
export const createCategory = createAsyncThunk(
    createCategoryPath,
    async (data) => {
        try {
            await axios.post(createCategoryURL, data)
        } catch (err) {
            return err.message
        }
    }
)

