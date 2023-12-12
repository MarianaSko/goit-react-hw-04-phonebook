import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledList } from './ContactList.style';

export const ContactList = ({ getFilteredContacts, onDeleteContact }) => {
  const filteredContacts = getFilteredContacts();

  return (
    <StyledList>
      <ContactListItem
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </StyledList>
  );
};
