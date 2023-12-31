import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import { toggleSidebar } from './userSideBar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function UserNavbar() {
  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'flex', lg: 'none' },
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        py: 1,
        px: 2,
        gap: 1,
        boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '52px',
            },
            [theme.breakpoints.up('lg')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <MenuRoundedIcon />
      </IconButton>
      <img src='https://cdn.discordapp.com/attachments/1144894054505664612/1149414171901960242/Logo.png' style={{height: 25}} />
      {/* <ColorSchemeToggle id={undefined} /> */}
    </Sheet>
  );
}