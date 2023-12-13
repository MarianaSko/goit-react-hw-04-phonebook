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
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    ...(JSON.parse(localStorage.getItem('CONTACTS_DATA')) ?? []),
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (contacts?.length) {
      setContacts(contacts);
    }

    localStorage.setItem('CONTACTS_DATA', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (name, number) => {
    setContacts(prev => [...prev, { name, number, id: nanoid() }]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    for (let item of contacts) {
      if (item.name === name) {
        alert(`${item.name} is already in contacts.`);
        event.currentTarget.reset();
        return;
      }
    }
    createContact(name, number);
    event.currentTarget.reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <StyledMainHeading>Phonebook</StyledMainHeading>

      <ContactForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <StyledHeading>Contacts</StyledHeading>
      {contacts.length ? (
        <div>
          <Filter handleFilter={handleFilter} />
          <ContactList
            getFilteredContacts={getFilteredContacts}
            onDeleteContact={onDeleteContact}
          ></ContactList>
        </div>
      ) : (
        <StyledMessage>
          You don't have any contacts in your phonebook yet.
        </StyledMessage>
      )}
    </Container>
  );
};
