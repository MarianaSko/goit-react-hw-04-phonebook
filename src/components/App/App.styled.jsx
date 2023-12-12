import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: 50px auto;
  width: 50%;
  padding: 20px;
  background-color: #d4d2d2;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const StyledMessage = styled.p`
  opacity: 0.6;
`;

export const StyledMainHeading = styled.h1`
  font-style: oblique;
  font-size: 30px;
  text-transform: uppercase;
  text-shadow: -4px 4px 8px rgba(21, 31, 144, 0.6);
`;

export const StyledHeading = styled.h2`
  font-style: oblique;
  text-transform: uppercase;
  text-shadow: -4px 4px 8px rgba(21, 31, 144, 0.6);
`;
