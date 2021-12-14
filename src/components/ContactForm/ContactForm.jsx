import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputContact = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddContact = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleAddContact}>
        <label className={s.field}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputContact}
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
            value={this.state.number}
            onChange={this.handleInputContact}
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
  }
}

ContactForm.propTypes = { onAddContact: PropTypes.func.isRequired };

export default ContactForm;
