import { createSlice } from "@reduxjs/toolkit";
import { machineListData } from "assets/data";


export const machine = createSlice({
    name: 'machine',
    initialState: machineListData,
    reducers: {
        create: (state, action) => {
            state.machines.push(action.payload)
        },
        update: (state, action) => {
            // console.log(action.payload)
            state.machines.forEach((machine) => {
                if (machine.id === action.payload.id) {
                    machine.name = action.payload.name
                    machine.category = action.payload.category
                    machine.description = action.payload.description
                    machine.image = action.payload.image
                }
            })
        },
        remove: (state, action) => {
            state.machines = state.machines.filter((machine => machine.id !== action.payload))
        }
    }
})

export const { create, update, remove } = machine.actions
export default machine.reducer;