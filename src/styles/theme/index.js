import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

import shape from 'styles/theme/shape';
import palette from 'styles/theme/palette';
import typography from 'styles/theme/typography';
import componentsOverride from 'styles/theme/overrides';
import shadows, { customShadows } from 'styles/theme/shadows';

const themeOptions = {
  palette,
  shape,
  typography,
  shadows,
  customShadows,
};

const theme = createTheme(themeOptions, ptBR);
theme.components = componentsOverride(theme);

export default theme;
