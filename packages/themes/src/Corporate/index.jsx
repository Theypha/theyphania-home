import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Global from '@pagerland/common/src/components/Global';
import SvgUtils from '@pagerland/common/src/components/SvgUtils';

import theme from './theme';

const Theme = ({ children }) => {
  const darkMode = useDarkMode(false);

  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          ...theme.colors,
          ...theme.modes[darkMode.value ? 'dark' : 'light'],
        },
        mode: darkMode.value ? 'dark' : 'light',
      }}
    >
      <Global />
      {children}
      <SvgUtils />
    </ThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { default as theme } from './theme';
export default Theme;
