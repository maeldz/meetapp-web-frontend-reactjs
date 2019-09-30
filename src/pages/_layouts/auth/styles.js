import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 315px;

  img {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 44px;
      margin-bottom: 10px;
      border-radius: 4px;
      padding-left: 15px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      border: 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fd0440;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    a {
      margin-top: 20px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: bold;

      &:hover {
        color: rgba(255, 255, 255, 255);
      }
    }
  }
`;
