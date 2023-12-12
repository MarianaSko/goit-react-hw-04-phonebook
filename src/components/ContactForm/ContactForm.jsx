import { Component } from 'react';
import {
  StyledForm,
  StyledListItem,
  StyledBtn,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <StyledForm onSubmit={this.props.handleSubmit}>
        <ul>
          <StyledListItem>
            <StyledLabel htmlFor="name">Name </StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              required
              onChange={this.props.handleChange}
            />
          </StyledListItem>
          <StyledListItem>
            <StyledLabel htmlFor="number">Number </StyledLabel>
            <StyledInput
              type="tel"
              name="number"
              id="number"
              required
              onChange={this.props.handleChange}
            />
          </StyledListItem>
        </ul>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    );
  }
}
