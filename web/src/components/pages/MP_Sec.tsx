import * as React from 'react';
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import { AcademicDetails, PersonalDetails } from './SignUp';

export default function MP_Home() {
  return (
    <>

          <Box
            component="main"
            className="MainContent"
            sx={(theme) => ({
              '--main-paddingTop': {
                xs: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
                md: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
              },
              px: {
                xs: 2,
                md: 3,
              },
              pt: 'var(--main-paddingTop)',
              pb: {
                xs: 2,
                sm: 2,
                md: 3,
              },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              height: '100dvh',
              gap: 1,
              overflow: 'auto',
            })}
          >
            <Tabs value={1}>
                <h1>Academic Details</h1>
                <br></br>
              <AcademicDetails />
            </Tabs>
        </Box>

    </>
  );
}
