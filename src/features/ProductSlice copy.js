// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import axiosInstance from "axiosInstance";
// import { API_URL } from "config";
// import { STATUS, transformErrorData } from 'services/CommonService';

// /* fetch all items */
// export const fetchProduct = createAsyncThunk(
//     'product/fetch',
//     async () => {
//         const url = `${API_URL}/product`
//         try {
//             const response = await axiosInstance.get(url)
//             return response.data
//         } catch (error) {
//             const transformedError = error && JSON.stringify(transformErrorData(error.response))
//             throw new Error(transformedError)
//         }
//     }
// )

// /* save new item */
// export const saveProduct = createAsyncThunk(
//     'product/product/save',
//     async (data) => {
//         try {
//             const url = `${API_URL}product`;
//             const headers = {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 }
//             }
//             const response = await axios.post(url, data, headers)
//             return response.data
//         } catch (error) {
//             const transformedError = error && JSON.stringify(transformErrorData(error.response))
//             throw new Error(transformedError)
//         }
//     }
// )

// /* update existing item */
// export const updateProduct = createAsyncThunk(
//     'product/update',
//     async (data) => {
//         const url = `${API_URL}product/${data.id}`;
//         const headers = {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             }
//         }
//         try {
//             const response = await axios.post(url, getFormData(data), headers)
//             return response.data
//         } catch (err) {
//             return err.message
//         }
//     }
// )

// /* delete item */
// export const deleteProduct = createAsyncThunk(
//     'product/delete',
//     async (data) => {
//         const url = `${API_URL}product/${data}`;
//         try {
//             const response = await axios.delete(url)
//             return response.data
//         } catch (err) {
//             return err.message
//         }
//     }
// )

// const getFormData = data => {
//     const formData = new FormData();

//     formData.append('_method', 'PUT')
//     formData.append('name', data.name)
//     formData.append('product_categories_id', data.product_categories_id)
//     data.image !== null && formData.append('image', data.image)
//     // formData.append('is_active', data.is_active)

//     return formData;
// }

// const initialState = {
//     data: [],
//     status: STATUS.IDLE,
//     validationErrors: {}
// }


// export const product = createSlice({
//     name: 'product',
//     initialState,
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProduct.pending, (state) => {
//                 state.status = STATUS.LOADING
//             })
//             .addCase(fetchProduct.fulfilled, (state, action) => {
//                 if (action.payload.success) {
//                     state.data = action.payload.data
//                     state.status = STATUS.IDLE
//                 } else {
//                     state.status = STATUS.ERROR
//                 }
//             })
//             .addCase(fetchProduct.rejected, (state, action) => {
//                 state.status = STATUS.ERROR
//             })

//             .addCase(saveProduct.pending, (state) => {
//             })
//             .addCase(saveProduct.fulfilled, (state, action) => {
//                 if (action.payload.data.success) {
//                     state.data = action.payload.data.data
//                     state.status = STATUS.IDLE
//                 } else {
//                     state.status = STATUS.ERROR
//                 }
//             })
//             .addCase(saveProduct.rejected, (state, action) => {
//                 state.status = STATUS.ERROR
//                 state.validationErrors = action.error.message ? JSON.parse(action.error.message) : {}
//             })

//             .addCase(updateProduct.pending, (state) => {
//                 state.status = STATUS.LOADING
//             })
//             .addCase(updateProduct.fulfilled, (state, action) => {
//                 state.data = action.payload
//                 state.status = STATUS.IDLE
//             })
//             .addCase(updateProduct.rejected, (state, action) => {
//                 state.status = STATUS.ERROR
//                 state.validationErrors = action.error.message ? JSON.parse(action.error.message) : {}
//             })

//             .addCase(deleteProduct.pending, (state) => {
//                 state.status = STATUS.LOADING
//             })
//             .addCase(deleteProduct.fulfilled, (state, action) => {
//                 state.data = action.payload
//                 state.status = STATUS.IDLE
//             })
//             .addCase(deleteProduct.rejected, (state, action) => {
//                 state.status = STATUS.ERROR
//                 state.validationErrors = action.error.message ? JSON.parse(action.error.message) : {}
//             })
//     }
// })

// export default product.reducer;


