import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contact/contact.reducer';

export const rootReducer = combineReducers({
  contact : contactReducer
});