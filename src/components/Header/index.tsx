import React from 'react';

import * as SC from './styles';

const Header: React.FC = () => {
  return (
    <SC.Container>
      <SC.Content>
        <SC.LogoItem>
          <span>About</span>
          <strong>US</strong>
        </SC.LogoItem>

        <SC.LogoItem>
          <span>Finance</span>
          <strong>One</strong>
        </SC.LogoItem>
      </SC.Content>
    </SC.Container>
  );
};

export { Header };
