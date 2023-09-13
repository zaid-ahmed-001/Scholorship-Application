import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';

export default function OneSidedLayout({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: {xs: '50vh', lg: '60vh'},
        minWidth: '100%',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: {xs: 0, lg: 0},
        px: {xs: 0, lg: 7},
        mb: {xs: 10, lg: 0},
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 1,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
        <AspectRatio
        ratio={2 / 3}
        variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 100,
          maxWidth: 800,
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
            '--AspectRatio-maxHeight': '565px',
            '--AspectRatio-minHeight': '400px',
          },
          borderRadius: 'sm',
          bgcolor: 'background.level2',
          flexBasis: '10%',
        })}
      >
        <img
          src="https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </AspectRatio>

      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'right',
          gap: '1rem',
          maxWidth: {xs: '40ch', lg: '100ch'},
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        {children}
      </Box>

    </Container>
  );
}
