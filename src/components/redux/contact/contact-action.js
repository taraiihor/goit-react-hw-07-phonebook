// import { v4 as uniqueId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
const fetchContactRequest = createAction('contact/fetchContactRequest');
const fetchContactSuccess = createAction('contact/fetchContactSuccess');
const fetchContactError = createAction('contact/fetchContactError');

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const deleteContactRequest = createAction('contacn/deleteContactRequest');
const deleteContactSuccess = createAction('contact/deleteContactSuccess');
const deleteContactError = createAction('contact/deleteContactError');

const changeFilter = createAction('contact/changeFilter');

// export const addContact = createAction(
//   'contact/addContact',
//   function prepare(name, number) {
//     return {
//       payload: {
//         id: uniqueId(),
//         name,
//         number,
//       },
//     };
//   },
// );

// const deleteContact = createAction('contact/deleteContact');
// export const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     id: uniqueId(),
//     name,
//     number,
//   },
// });
// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
const actions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  // deleteContact,
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};
export default actions;
