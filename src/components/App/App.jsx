import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import {
  Container,
  StyledMessage,
  StyledMainHeading,
  StyledHeading,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('CONTACTS_DATA'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(
        'CONTACTS_DATA',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  createContact = contact => {
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: contact.name, number: contact.number, id: nanoid() },
      ],
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    for (let item of this.state.contacts) {
      if (item.name === this.state.name) {
        alert(`${item.name} is already in contacts.`);
        event.currentTarget.reset();
        return;
      }
    }
    this.createContact(this.state);
    event.currentTarget.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <StyledMainHeading>Phonebook</StyledMainHeading>

        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <StyledHeading>Contacts</StyledHeading>
        {this.state.contacts.length ? (
          <div>
            <Filter handleFilter={this.handleFilter} />
            <ContactList
              getFilteredContacts={this.getFilteredContacts}
              onDeleteContact={this.onDeleteContact}
            ></ContactList>
          </div>
        ) : (
          <StyledMessage>
            You don't have any contacts in your phonebook yet.
          </StyledMessage>
        )}
      </Container>
    );
  }
}
