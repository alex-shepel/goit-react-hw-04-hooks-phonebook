import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filter, contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.entry}>
              <span>{name}</span>
              <span className={s.number}>{number}</span>
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
