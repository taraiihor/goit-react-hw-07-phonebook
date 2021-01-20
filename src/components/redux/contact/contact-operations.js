import axios from 'axios';
import actions from './contact-action';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());
  axios
    .get('/contact', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(error));
};

export default { addContact };
