import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 950px;
  padding: 20px 0;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;
    align-items: center;

    div {
      text-align: right;

      strong {
        display: block;
        font-weight: bold;
        color: #fff;
      }
      span {
        color: #999;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  button {
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
  }
`;
