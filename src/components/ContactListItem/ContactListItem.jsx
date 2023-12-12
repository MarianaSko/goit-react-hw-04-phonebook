import {
  StyledContactItem,
  StyledBtn,
  StyledSpan,
} from './ContsctListItem.styled';

export const ContactListItem = ({ filteredContacts, onDeleteContact }) =>
  filteredContacts.map(item => (
    <StyledContactItem key={item.id}>
      <p>
        <StyledSpan>{item.name}:</StyledSpan> {item.number}
      </p>
      <StyledBtn onClick={() => onDeleteContact(item.id)}>Delete</StyledBtn>
    </StyledContactItem>
  ));
