import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  border-radius: 4px;
  padding: 12px 0;
  margin-top: 5px;
  font-weight: bold;
  color: #fff;
  background: #f94d6a;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f94d6a')};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
