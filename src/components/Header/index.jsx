import React from 'react';

// Material
import { Container, Toolbar } from '@mui/material';

// Styles
import * as S from './styles';

const Header = () => {
  return (
    <S.AppBar position="static" color="secondary">
      <Toolbar>
        <Container disableGutters maxWidth="xl">
          <S.Content>
            <h1>Country</h1>
          </S.Content>
        </Container>
      </Toolbar>
    </S.AppBar>
  );
};

export default Header;
