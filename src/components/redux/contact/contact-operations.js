import axios from 'axios';
// import actions from './contact-action'; // валідбного коду
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';
// export const fetchContact = () => dispatch => {
//   dispatch(actions.fetchContactRequest());
//   axios
//     .get('/contact')
//     .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
//     .catch(error => dispatch(error));
// };
// export const addContact = (name, number) => dispatch => {
//   const contact = { name, number };
//   dispatch(actions.addContactRequest());
//   axios
//     .post('/contact', contact)
//     .then(({ data }) => dispatch(actions.addContactSuccess(data)))
//     .catch(error => dispatch(error));
// };
// export const deleteContact = contactId => dispatch => {
//   dispatch(actions.deleteContactRequest());
//   axios
//     .delete(`/contact/${contactId}`)
//     .then(() => dispatch(actions.deleteContactSuccess(contactId)))
//     .catch(error => dispatch(error));
// };
// асинхронний код
// export const fetchContact = () => async dispatch => {
//   dispatch(actions.fetchContactRequest());
//   try {
//     const { data } = await axios.get(`/contact`);
//     dispatch(actions.fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchContactError(error));
//   }
// };
// export const addContact = (name, number) => async dispatch => {
//   const contact = { name, number };
//   dispatch(actions.addContactRequest());
//   try {
//     const { data } = await axios.post(`/contact`, contact);
//     dispatch(actions.addContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.addContactError(error));
//   }
// };
// export const deleteContact = contactId => async dispatch => {
//   dispatch(actions.deleteContactRequest());
//   try {
//     await axios.delete(`/contact/${contactId}`);
//     dispatch(actions.deleteContactSuccess(contactId));
//   } catch (error) {
//     dispatch(actions.deleteContactError(error));
//   }
// };

// асинхронний код, create the thunk
export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contact`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, { rejectWithValue }) => {
    const contact = { name: data, number: data };

    try {
      const { data } = await axios.post(`/contact`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contact/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
