import { styled } from '@mui/material/styles';

import { AppBar as MuiAppBar } from '@mui/material';

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
}));

export const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1, 0),

  h1: {
    textTransform: 'uppercase',
    fontSize: 30,
  },
}));
