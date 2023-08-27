import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

let ThemeMode:string = 'dark'
export const GetTheme = () => {
    return ThemeMode;
}

export default function ColorSchemeToggle({ onClick, ...props }: IconButtonProps) {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return <IconButton size="sm" variant="plain" color="neutral" disabled />;
    }
    return (
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        aria-label="toggle light/dark mode"
        {...props}
        onClick={(event) => {
          if (mode === 'light') {
            setMode('dark');
            ThemeMode = 'dark'
          } else {
            setMode('light');
            ThemeMode = 'light'
          }
          onClick?.(event);
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    );
}