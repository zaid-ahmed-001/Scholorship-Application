import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import useScript from './components/tools/useScript';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function App() {
  const status = useScript(`https://unpkg.com/feather-icons`);
  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);
  return (
    <>
      <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
        <GlobalStyles
          styles={(theme) => ({
            '[data-feather], .feather': {
              color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
              margin: 'var(--Icon-margin)',
              fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
              width: '1em',
              height: '1em',
            },
          })}
        />
        <CssBaseline />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
       </CssVarsProvider>
    </>
  );    
}

export default App;
