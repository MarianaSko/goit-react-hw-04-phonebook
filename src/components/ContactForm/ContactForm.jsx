import {
  StyledForm,
  StyledListItem,
  StyledBtn,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

export const ContactForm = ({ handleSubmit, handleChange }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <ul>
        <StyledListItem>
          <StyledLabel htmlFor="name">Name </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="number">Number </StyledLabel>
          <StyledInput
            type="tel"
            name="number"
            id="number"
            required
            onChange={handleChange}
          />
        </StyledListItem>
      </ul>
      <StyledBtn type="submit">Add contact</StyledBtn>
    </StyledForm>
  );
};
