import React from 'react';
import * as SC from './styles';

const Header: React.FC = () => {
  return (
    <SC.Container>
      <SC.Content>
        <SC.QRLogo>
          <span>About</span>
          <strong>US</strong>
        </SC.QRLogo>
      </SC.Content>
    </SC.Container>
  );
};

export { Header };
