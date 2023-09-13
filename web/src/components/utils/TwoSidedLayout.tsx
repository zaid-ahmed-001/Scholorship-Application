import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import '../../Cube.scss'
import { GlobalStyles } from '@mui/joy';

export default function TwoSidedLayout({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: {xs: '55vh', lg: '60vh'},
        minWidth: '100%',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        py: {xs: 0, lg: 10},
        px: {xs: 0, lg: 5},
        mb: {xs: 10, lg: 10},
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
      <Box
        sx={(theme) => ({
          p: '1rem',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
          flexShrink: 999,
          maxWidth: '160ch',
          [theme.breakpoints.up(834)]: {
            alignItems: 'center',
            justifyContent: 'left',
            textAlign: 'left',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        {children}
      </Box>

    

      {/* <AspectRatio
        ratio={100 / 50}
        variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 100,
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
            '--AspectRatio-maxHeight': '520px',
            '--AspectRatio-minHeight': '400px',
          },
          borderRadius: 'sm',
          bgcolor: 'background.level2',
          flexBasis: '20%',
          mr: {lg: 2}
        })}
      > */}
      <Box
          sx={(theme) => ({
          width: '100%',
          height: '350',
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
          },
          borderRadius: 'sm',
          flexBasis: '20%',
          mr: {lg: 2},
          mb: {xs: 30}
        })} >
          <div className='stage-cube-cont'  >
              <Box className='cubespinner'>
                  <Box className='face1' sx={{bgcolor: 'background.body', color: 'primary.outlinedColor'}}>learning
                  </Box> 
                  <Box className='face2' sx={{bgcolor: 'background.body', color: 'primary.outlinedColor'}} >knowledge
                  </Box> 
                  <Box className='face3' sx={{bgcolor: 'background.body', color: 'primary.outlinedColor'}} >education
                  </Box> 
                  <Box className='face4' sx={{bgcolor: 'background.body', color: 'primary.outlinedColor'}} >wisdom
                  </Box> 
                  <Box className='face5' sx={{bgcolor: 'background.body', color: 'primary.outlinedColor'}} >intellect
                  </Box> 
                  <Box className='face6' sx={{bgcolor: 'background.body', color: 'primary.outlinedColor'}} >study
                  </Box> 
              </Box> 
          </div> 
      </Box>
      {/* </AspectRatio> */}
    </Container>

  );
}
