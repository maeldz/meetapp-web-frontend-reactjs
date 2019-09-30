import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto 20px;
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

    div {
      display: flex;
      flex-direction: row;

      button {
        display: flex;
        align-items: center;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        color: #fff;
        transition: background 0.2s;

        svg {
          margin-right: 10px;
        }
      }

      button#edit {
        margin-right: 15px;
        background: #4dbaf9;

        &:hover {
          background: ${darken(0.03, '#4DBAF9')};
        }
      }
      button#cancel {
        background: #f91f44;

        &:hover {
          background: ${darken(0.03, '#f91f44')};
        }
      }
    }
  }

  img {
    width: 940px;
    height: 300px;
    border-radius: 4px;
    margin: 50px 0 25px 0;
  }

  article {
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 30px;
    white-space: pre-line;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    span {
      color: rgba(255, 255, 255, 0.6);
    }

    span#date {
      margin-right: 30px;
    }
  }
`;
