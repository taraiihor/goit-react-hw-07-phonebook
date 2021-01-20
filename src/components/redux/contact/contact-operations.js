import axios from 'axios';
import actions from './contact-action';

axios.defaults.baseURL = 'http://localhost:4040';
export const fetchContact = () => dispatch => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contact')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(error));
};
export const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());
  axios
    .post('/contact', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(error));
};

export const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contact/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(error));
};
