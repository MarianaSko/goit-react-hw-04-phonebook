import { FilterWrapper, StyledLabel, StyledInput } from './Filter.styled';

export const Filter = ({ handleFilter }) => (
  <FilterWrapper>
    <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
    <StyledInput type="text" id="filter" onChange={handleFilter} />
  </FilterWrapper>
);
