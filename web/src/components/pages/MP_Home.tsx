import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Drawer from "../tools/Drawer";
import Navbar from "../tools/Navbar";
import Button from '@mui/joy/Button';
import Chip, { chipClasses } from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { PersonalDetails } from './SignUp';


export default function MP_Home() {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
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
            <Tabs>
              <PersonalDetails />
            </Tabs>
        </Box>
      </Box>
    </>
  );
}
