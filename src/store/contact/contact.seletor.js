import { createSelector } from "reselect";

//! Pattern
//* selectXXXXXX =  reducer name;
//* selectorXXXXXX = for export to use alway include selectXXXXXX to find some data that we need naja ;

const selectContact = (state) => state.contact;

export const selectorContactPersons = createSelector(
  [selectContact],
  (contacts) => contacts.persons
);

