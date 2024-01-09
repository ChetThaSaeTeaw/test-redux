import { createSelector } from "reselect";

//! Pattern
//* selectXXXXXX =  reducer name;
//* selectorXXXXXX = for export to use alway include selectXXXXXX to find some data that we need naja ;

const selectContact = (state) => state.contact;
// const selectGender = (_ , gender) => gender;
const selectGender = (_ , personGender) => personGender;

export const selectorContactPersons = createSelector(
  [selectContact],
  (contacts) => contacts.persons
);

// export const selectorGenderPersons = createSelector(
//   [selectContact , selectGender],
//   (contacts , gender) => {
//     console.log(contacts , gender);
//     const selectData = contacts.persons?.filter(person => person.gender == gender)?.map(person => person);
//     // {!gender ? contacts.person : selectData }
//     // {!gender ? console.log(contacts.person) : console.log(selectData) }
//     // console.log(selectData);
//     return selectData;
//   }
// );

export const selectorGenderPersons = createSelector(
  [selectContact , selectGender],
  (contacts , personGender) => {
    // console.log(contacts , personGender);
    const selectData = contacts.persons?.filter(person => person.gender === personGender.gender)?.map(person => person);
    // console.log(selectData);
    return selectData;
  }
);