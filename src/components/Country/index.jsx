import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

// Material
import { CircularProgress, Container, Typography } from '@mui/material';

// API
import client from 'api/client';
import { COUNTRY } from 'api/queries';

// Styles
import * as S from './styles';

function Country({ code }) {
  const {
    data: { country } = {},
    loading,
    error,
  } = useQuery(COUNTRY, {
    client,
    variables: { code },
  });

  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        {loading && <CircularProgress color="secondary" size={60} />}

        {error && <Typography variant="h1">Ops! Não foi possível carregar as informações do país.</Typography>}

        {country && (
          <>
            <Typography variant="h2">{country.emoji}</Typography>
            <Typography variant="h1">{country.native}</Typography>

            {country.states?.map(state => (
              <Typography key={state.code} variant="overline">
                {state.name} ({state.code});{' '}
              </Typography>
            ))}
          </>
        )}
      </Container>
    </S.Wrapper>
  );
}

Country.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Country;
