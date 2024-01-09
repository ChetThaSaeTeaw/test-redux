import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons : [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.persons.push(action.payload);
    },
    deleteContact: (state ,  action) => {
      const id = action.payload.id;
      state.persons = state.persons.filter(person => person.id !== id);
    }
  },
});

export const { setContact , deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

