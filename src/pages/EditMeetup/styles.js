import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto 20px;
  max-width: 950px;

  form {
    display: flex;
    flex-direction: column;

    > button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 4px;
      height: 300px;
      background: rgba(0, 0, 0, 0.4);
      color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 20px;
      transition: background 0.2s;
      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }

      > svg {
        margin-bottom: 10px;
      }
    }

    input {
      height: 44px;
      margin-bottom: 10px;
      border-radius: 4px;
      padding-left: 15px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      border: 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      height: 200px;
      min-height: 57px;
      max-width: 950px;
      min-width: 950px;
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 20px 15px 0 15px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      border: 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > div {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;

      > button {
        display: flex;
        align-items: center;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        color: #fff;

        > svg {
          margin-right: 10px;
        }
      }

      > button#save {
        background: #f94d6a;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#f94d6a')};
        }
      }

      > button#back {
        margin-right: 15px;
        background: #4dbaf9;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#4dbaf9')};
        }
      }
    }

    input[name='date'] {
      width: 100%;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item--selected,
    .react-datepicker__day--selected {
      background-color: #f94d6a;
    }
  }

  span {
    color: #fd0440;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;
