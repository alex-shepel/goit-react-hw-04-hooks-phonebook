import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const Fields = {
  NAME: 'name',
  NUMBER: 'number',
};

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputContact = e => {
    const { name, value } = e.target;

    switch (name) {
      case Fields.NAME:
        setName(value);
        return;
      case Fields.NUMBER:
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleAddContact}>
      <label className={s.field}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.field}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputContact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = { onAddContact: PropTypes.func.isRequired };

export default ContactForm;
