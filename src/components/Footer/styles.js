import { styled } from '@mui/material/styles';

export const Wrapper = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(10),
  textAlign: 'center',

  a: {
    color: theme.palette.grey[500],
    textDecoration: 'none',
  },
}));
