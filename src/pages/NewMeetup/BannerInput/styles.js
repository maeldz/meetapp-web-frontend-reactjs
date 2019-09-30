import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    div {
      display: flex;
      text-align: center;
    }

    input {
      display: none;
    }
  }
`;

export const ImagePreview = styled.div.attrs(props => ({
  preview: props.preview,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  width: 950px;
  height: 300px;
  margin-bottom: 20px;
  transition: opacity 0.2s;

  ${props =>
    props.preview
      ? css`
          background: url(${props.preview});
          background-size: 100% 100%;
        `
      : css`
          background: rgba(0, 0, 0, 0.4);
        `}

  &:hover {
    opacity: 0.8;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    span {
      color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
      font-size: 16px;
    }

    svg {
      margin-bottom: 10px;
    }
  }
`;
