import styled, { keyframes } from 'styled-components';
import {
  Content as BaseContent,
  Container as BaseContainer,
} from '../_layouts/auth/styles';

export const Content = BaseContent;

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

export const Container = styled(BaseContainer)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }

  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;
