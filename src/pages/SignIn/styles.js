import styled, { keyframes } from 'styled-components';
import {
  Content as BaseContent,
  Container as BaseContainer,
} from '../_layouts/auth/styles';

export const Content = BaseContent;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

export const Container = styled(BaseContainer)`
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }

  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;
