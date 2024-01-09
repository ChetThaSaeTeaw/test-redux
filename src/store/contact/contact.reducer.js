import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   persons : [],
// };

const initialState = {
  persons : [
    {
      id : 1,
      name : "Naruto",
      email : "Naruto@gmail.com",
      gender : "male",
      message : "Hello Hinata"
    },{
      id : 2,
      name : "Hinata",
      email : "Hinata@gmail.com",
      gender : "female",
      message : "Hello Naruto"
    },{
      id : 3,
      name : "Orochimaru",
      email : "Orochimaru@gmail.com",
      gender : "unknown",
      message : "Hello Labs"
    }
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action) => {
      const checkId = state.persons.find(person => person.id === action.payload.id);
      const checkEmail = state.persons.find(person => person.email === action.payload.email);
      { checkId || checkEmail ? alert("Id or Email is already!") : state.persons.push(action.payload) }
    },
    deleteContact: (state ,  action) => {
      const id = action.payload.id;
      state.persons = state.persons.filter(person => person.id !== id);
    }
  },
});

export const { setContact , deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

