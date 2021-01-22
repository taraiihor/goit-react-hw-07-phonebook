import { combineReducers } from 'redux';
// import { addContact, deleteContact, changeFilter } from './contact-action';
import actions from './contact-action';
import { fetchContact, addContact, deleteContact } from './contact-operations';

import { createReducer } from '@reduxjs/toolkit';
// const contacTest = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
const contact = createReducer([], {
  // для асинхронного коду, create the thunk
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),

  // [actions.fetchContactSuccess]: (_, { payload }) => payload,
  // [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  // [actions.deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  // [actions.fetchContactError]: (_, { payload }) => payload,
  // [actions.fetchContactRequest]: () => null,
  [fetchContact.rejected]: (_, { payload }) => payload,
  [fetchContact.pending]: () => null,
});

const isLoading = createReducer(false, {
  // [actions.addContactRequest]: () => false,
  // [actions.addContactSuccess]: () => true,
  // [actions.addContactError]: () => false,
  // [actions.deleteContactRequest]: () => false,
  // [actions.deleteContactSuccess]: () => true,
  // [actions.deleteContactError]: () => false,
  // [actions.fetchContactRequest]: () => false,
  // [actions.fetchContactSuccess]: () => true,
  // [actions.fetchContactError]: () => false,
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
export default combineReducers({
  contact,
  isLoading,
  filter,
  error,
});
