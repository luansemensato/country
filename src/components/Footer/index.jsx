// Material
import { Container, Typography } from '@mui/material';

// Styles
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        <Typography variant="body1">
          <a href="https://luansemensato.com" target="_blank" rel="noopener noreferrer">Luan Semensato | Front-end Developer</a>
        </Typography>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
