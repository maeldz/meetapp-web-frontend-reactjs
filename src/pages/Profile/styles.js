import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto 0;
  max-width: 950px;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: right;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    div {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
      button {
        display: flex;
        align-items: center;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        color: #fff;
        background: #f94d6a;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#f94d6a')};
        }

        svg {
          margin-right: 10px;
        }
      }
    }

    span {
      color: #fd0440;
      align-self: flex-start;
      margin-bottom: 10px;
    }
  }
`;
