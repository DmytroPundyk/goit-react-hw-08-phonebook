import { useEffect } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { List, Item, DeleteButton, Total } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../services/contacts.API';
import { getFilter } from '../../redux/contacts/contacts-selector';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, error } = useGetContactsQuery();
  const [onDelete] = useDeleteContactMutation();

  const normalizedFilter = filter.toLowerCase();
  let FilContacts = [];

  if (contacts) {
    FilContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }
  useEffect(() => {
    if (error) {
      toast.error(`Server error`);
    }
  }, [error]);

  return (
    <>
      {error && <Toaster />}
      {!error && contacts && (
        <List>
          <Total>Total contacts : {FilContacts.length}</Total>
          {FilContacts.map(({ id, name, phone }) => (
            <Item key={id}>
              {name} : {phone}
              {
                <DeleteButton
                  type="button"
                  name="delete"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </DeleteButton>
              }
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
