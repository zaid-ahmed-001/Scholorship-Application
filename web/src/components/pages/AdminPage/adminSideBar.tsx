/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ColorSchemeToggle from '../../utils/ColorSchemeToggle';
import { fontSize } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate ,  Outlet} from 'react-router-dom';


export const closeSidebar = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
};

export const openSidebar = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
};

export const toggleSidebar = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn');
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
};

export default function AdminSideBar() {
  React.useEffect(() => {
    document.title = "AdminPage - EduFundr";
    return () => {};
  }, []);
  const navigate = useNavigate();
  return (
    <>
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Sheet
        className="Sidebar"
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
            lg: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 10000,
          height: '100dvh',
          width: 'var(--Sidebar-width)',
          top: 0,
          px: 1.5,
          py: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider'
        }}
      >
        <GlobalStyles
          styles={(theme) => ({
            ':root': {
              '--Sidebar-width': '254px',
              [theme.breakpoints.up('lg')]: {
                '--Sidebar-width': '286px',
              },
            },
          })}
        />
        <Box
          className="Sidebar-overlay"
          sx={{
            position: 'fixed',
            zIndex: 9998,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
            transition: 'opacity 0.4s',
            transform: {
              xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
              lg: 'translateX(-100%)',
            },
          }}
          onClick={() => closeSidebar()}
        />
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography fontWeight="xl"> </Typography>
          <Typography fontWeight="xl"> &nbsp; <img src='https://cdn.discordapp.com/attachments/1144894054505664612/1149414171901960242/Logo.png' style={{height: 25}} /></Typography>
          <ColorSchemeToggle sx={{ ml: 'auto' }} />
        </Box>
        <Box
          sx={{
            minHeight: 0,
            overflow: 'hidden auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            '--List-nestedInsetStart': '40px',
          }}
        >  
          <ListItem nested >
            <ListItemButton onClick={()=>navigate('./ViewApplications')}>
              <ListItemDecorator> <PersonIcon />  </ListItemDecorator>
              <ListItemContent >Review Applications</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>


        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            '--List-nestedInsetStart': '40px',
          }}
        >  
          <ListItem nested >
            <ListItemButton onClick={()=>navigate('./CreateScholarship')}>
              <ListItemDecorator> <PersonIcon />  </ListItemDecorator>
              <ListItemContent >Create Scholarship</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>


        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            '--List-nestedInsetStart': '40px',
          }}
        >  
          <ListItem nested >
            <ListItemButton onClick={()=>navigate('./EditScholarship')}>
              <ListItemDecorator> <PersonIcon />  </ListItemDecorator>
              <ListItemContent >Edit Scholarship</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>

        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            '--List-nestedInsetStart': '40px',
          }}
        >  
          <ListItem nested >
            <ListItemButton onClick={()=>navigate('./Users')}>
              <ListItemDecorator> <PersonIcon />  </ListItemDecorator>
              <ListItemContent >Users</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        <Divider />
        <Box sx={(theme) => ({display: 'flex', gap: 1, alignItems: 'end', position: 'fixed', bottom: 10})}>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography fontSize="sm" fontWeight="lg">
            &nbsp;  Admin Panel
            </Typography>
            <Typography level="body-xs"> &nbsp;  @admin</Typography>
          </Box>
        </Box>
        <IconButton sx={{ ml: 'auto', mt: 'auto' }} onClick={()=>navigate('/')}> <ExitToAppOutlinedIcon  /> </IconButton>
      </Sheet>
      <Outlet />
      </Box>
    </>
  );
}
