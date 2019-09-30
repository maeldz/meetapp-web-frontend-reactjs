import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 950px;
      height: 300px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
    }

    input {
      display: none;
    }
  }
`;
