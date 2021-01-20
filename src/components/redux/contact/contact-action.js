// import { ADD, DELETE, CHANGE_FILTER } from './contact-types';
import { v4 as uniqueId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');
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
const deleteContact = createAction('contact/deleteContact');
const changeFilter = createAction('contact/changeFilter');

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
export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  changeFilter,
};
