import React from 'react';

import PropTypes from 'prop-types';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

function Layout({ children, className, title }) {
  return (
    <Container className={className}>
      <GlobalStyle />
      <SEO title={title} />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
