import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  display: flex;
  margin: 50px auto 0;
  flex-direction: column;
  max-width: 950px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      display: flex;
      align-items: center;
      font-size: 32px;
      color: #fff;
    }

    button {
      display: flex;
      align-items: center;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      margin-left: 30px;
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

  ul {
    margin-top: 50px;

    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      > button {
        padding: 10px;
        border-radius: 4px;
        border: 0;
        background: #f94d6a;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.7;
        }

        &[disabled] {
          opacity: 0.5;
          cursor: default;
        }
        &[disabled]:hover {
          opacity: 0.5;
        }
      }

      > span {
        display: flex;
        margin: auto 0;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;

export const Meetup = styled.li`
  display: flex;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);

  strong {
    font-size: 18px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }

    button {
      display: flex;
      align-items: center;
      border: 0;
      margin-left: 30px;
      background: transparent;
    }
  }
`;
