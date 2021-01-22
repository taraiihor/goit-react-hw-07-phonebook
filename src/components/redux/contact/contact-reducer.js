import { combineReducers } from 'redux';
// import { addContact, deleteContact, changeFilter } from './contact-action';
import actions from './contact-action';

import { createReducer } from '@reduxjs/toolkit';
// const contacTest = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
const contact = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  [actions.fetchContactError]: (_, { payload }) => payload,
  [actions.fetchContactRequest]: () => null,
});
// const contact = (state = contacTest, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
const loading = createReducer(false, {
  [actions.addContactRequest]: () => false,
  [actions.addContactSuccess]: () => true,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => false,
  [actions.deleteContactSuccess]: () => true,
  [actions.deleteContactError]: () => false,
  [actions.fetchContactRequest]: () => false,
  [actions.fetchContactSuccess]: () => true,
  [actions.fetchContactError]: () => false,
});
export default combineReducers({
  contact,
  loading,
  filter,
  error,
});
