import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import MP_Home from "./components/pages/MP_Home";
import MP_Sec from "./components/pages/MP_Sec";
import General from "./components/pages/general";
import useScript from './components/tools/useScript';
import Drawer from './components/tools/Drawer';

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
            <Route path='/MainPage' element={<Drawer/>}>
              <Route path="MP_Home" element={<MP_Home />} />
              <Route path="MP_Sec" element={<MP_Sec />} />
            </Route>
            <Route path="/general" element={<General />} />
          </Routes>
       </CssVarsProvider>
    </>
  );    
}

export default App;
