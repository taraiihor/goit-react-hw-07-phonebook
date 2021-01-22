// import { v4 as uniqueId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// fetchContact.pending
// const fetchContactRequest = createAction('contact/fetchContactRequest');
// fetchContact.fulfilled
// const fetchContactSuccess = createAction('contact/fetchContactSuccess');
// fetchContact.rejected
// const fetchContactError = createAction('contact/fetchContactError');

// const addContactRequest = createAction('contact/addContactRequest');
// const addContactSuccess = createAction('contact/addContactSuccess');
// const addContactError = createAction('contact/addContactError');

// const deleteContactRequest = createAction('contacn/deleteContactRequest');
// const deleteContactSuccess = createAction('contact/deleteContactSuccess');
// const deleteContactError = createAction('contact/deleteContactError');

const changeFilter = createAction('contact/changeFilter');

const actions = {
  // fetchContactRequest,
  // fetchContactSuccess,
  // fetchContactError,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContact,
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError,

  changeFilter,
};
export default actions;
