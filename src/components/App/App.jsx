import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import s from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import * as storage from 'services/local-storage';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  normalize = name => {
    const words = name.split(' ');
    return words
      .map(word => {
        const capLetter = word.charAt(0).toUpperCase();
        const rest = word.substring(1);
        return `${capLetter}${rest}`;
      })
      .join(' ');
  };

  handleAddContact = (name, number) => {
    const normName = this.normalize(name);
    const isDuplicate = this.state.contacts.some(
      item => item.name === normName,
    );

    if (isDuplicate) {
      alert(`${normName} is already in contacts.`);
      return;
    }

    const newContact = {
      name: normName,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = storage.get('contacts');

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.contacts !== prevState.contacts) {
      storage.set('contacts', this.state.contacts);
    }
  }

  render() {
    return (
      <div className={s.app}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2 className={s.title}>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.handleFilter} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
