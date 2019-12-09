import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Wrapper } from './styles';

function AuthLayout({ transitionKey, children }) {
  return (
    <Wrapper className="Teste">
      <TransitionGroup component={null}>
        <CSSTransition timeout={300} classNames="page" key={transitionKey}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
  transitionKey: PropTypes.string,
};

AuthLayout.defaultProps = {
  transitionKey: '0',
};

export default AuthLayout;
