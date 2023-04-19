import styled from 'styled-components';

export const WrapperForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  ::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 37px;
  padding: 5px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  border-color: #007bff;
  background-color: #abcdef;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #6495ed;
  }
`;
