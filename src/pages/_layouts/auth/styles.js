import styled from 'styled-components';
import chroma from 'chroma-js';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  overflow: hidden;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px 0 150px 0;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    font-size: 16px;
    color: #fff;
    margin-bottom: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  span {
    color: #ff4c65;
    align-self: flex-start;
    margin: -5px 0 10px 0;
    text-shadow: 1px 1px 1px rgba(255, 40, 40, 0.8);
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    transition: background-color 0.2s;

    &:hover {
      background: ${chroma('#3b93ff').darken(0.3)};
    }
  }

  a {
    color: #fff;
    margin: 15px 0;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
