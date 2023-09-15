import * as React from 'react';
import { useState, useRef, MouseEvent } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ScrollContainer from 'react-indiana-drag-scroll';
import Tooltip from '@mui/joy/Tooltip';
// Icons import
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Chip, GlobalStyles, Link, Textarea } from '@mui/joy';
import ColorSchemeToggle from '../../utils/ColorSchemeToggle';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { style } from '@mui/system';
import TwoSidedLayout from '../../utils/TwoSidedLayout';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import OneSidedLayout from '../../utils/OneSidedLayout';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

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

export default function HomePage() {
  return (
    <>
        <Header />
        <SideBar />
        <Body />
        <About />
        <HomePageCardsGroup />
        <ContactUs />
        <Footer />
    </>
  );
}

function ContactUs() {
    return (
        <div id='contact'>
            <Box  sx={{display: 'flex', justifyContent: 'left', width: '100%', ml: {xs: 1, lg:7}, mb: {xs: 3, sm:0}}}> 
                <Typography color="primary" fontWeight="lg" variant='outlined' sx={{borderRadius: 10, py: 1, px: 2,fontSize:{lg: 'lg', xs: 'sm'}, mx: {xs: 1, lg: 0}}}>
                    CONTACT
                </Typography>
            </Box>
         <OneSidedLayout>

         <Chip size="lg" variant="outlined" color="neutral" sx={{mt: 7}}>
         Feel free to drop us a line. We're here to help!
        </Chip>
        <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
            Connect with Edufundr: Contact Us for Queries And Support
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Got questions, suggestions, or need assistance? Contact Edufundr today!
        </Typography>
        <Box
            component="form"
            sx={{
            display: 'flex',
            gap: 1,
            my: 2,
            alignSelf: 'stretch',
            flexBasis: '70%',
            }}
        >
            <Input
                required
                name="email"
                type="email"
                size="lg"
                placeholder="Enter Your Mail"
                sx={{ flex: 'auto' }}
            />
            <Divider />
            <Input
                required
                name="name"
                type="text"
                size="lg"
                placeholder="Enter Your Full Name"
                sx={{ flex: 'auto' }}
            />
        </Box>
        <Box
            component="form"
            sx={{
            display: 'flex',
            alignSelf: 'stretch',
            justifySelf: 'stretch',
            gap: 1,
            }}
        >
            <Textarea
                placeholder="Type in here…"
                sx={{width: '100%'}}
                minRows={9}
                maxRows={9}
            />
        </Box>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'right',
            width: '100%'
            }}
        >
            <IconButton type="submit" size="lg" variant="solid" color="primary" ><ArrowUpwardIcon/></IconButton>
        </Box>

        </OneSidedLayout>
        </div>
    )
}

function Body() {
    return (
    <div id='home'>
        <Box 
        sx={(theme) => ({
           width: '100%',
           minHeight: '100vh',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundSize: 'cover',
           backgroundImage:
           'url("https://cdn.discordapp.com/attachments/1144894054505664612/1151938554944028712/bg_3_1.png")',
           [theme.getColorSchemeSelector('dark')]: {
               backgroundImage: 'url("https://cdn.discordapp.com/attachments/1144894054505664612/1151228548749725767/bg_4.png")',
           },
           p: 8,
       })} >
           <Typography textAlign='center'>
               <Typography fontSize='5.25rem' fontWeight='700' textAlign='center' color='primary' > Edufundr </Typography> <br /> 
               <Typography fontSize='2rem' fontWeight='700' textAlign='center' variant='solid' sx={{bgcolor: 'neutral.outlinedColor', color: 'neutral.outlinedHoverBg'}} > Empowering Tomorrow's Leaders, Today. </Typography> 
           </Typography>
       </Box>
    </div>
    )
}

function Footer() {
    const openLinks = () => {
        window.open('https://www.instagram.com/shashankmishra7738/', 'a');
    };
    return (
        <Box 
        component="footer"
        sx={{
            height: '100%',
            width: '100%',
            py: 3,
            mt: 10,
            pl: {xs: 3, lg: 7},
            pr: {xs: 3, lg: 7},
            display: 'flex',
            justifyContent: 'space-between',
            gap: 10
        }}
        >
            <Typography  level="body-xs" textAlign="left" >
            © EduFundr By Zaid Ahmed & Shashank Mishra {new Date().getFullYear()}
            </Typography>
            <Typography  level="body-lg" textAlign="right" sx={{display: 'flex', gap: 2}}>
            <Tooltip title="Zaid Ahmed" placement="left-start" variant='plain'>
                <Link color='neutral' href='https://heylink.me/zaidahmed/' target='_blank' >
                    <CodeIcon />
                </Link>
            </Tooltip>
            <Tooltip title="Shashank Mishra" placement="top-end" variant='plain'>
                <Link color='neutral' href='https://heylink.me/shashankmishra/' target='_blank' >
                    <DataObjectIcon />
                </Link>
            </Tooltip>
            </Typography>
        </Box>
    )
}

function HomePageCardsGroup () {
    return (
        <Box sx={{pb: {xs: 4, sm:15}}}>
            <Box  sx={{display: 'flex', justifyContent: 'left', width: '100%', pb: 3, ml: {lg: 7, xs: 1}, mt:2}}> 
                <Typography color="primary" fontWeight="lg" variant='outlined' sx={{borderRadius: 10, py: 1, px: 2,fontSize:{lg: 'lg', xs: 'sm'}, mx: {xs: 1, lg: 0}}}>
                    REVIEWS
                </Typography>
            </Box>
            <Box  sx={{overflow:'hidden', pb: 2, ml: {lg: 7, xs: 2}, width: '94%'}}> 
                <ScrollContainer style={{display: 'flex', justifyContent: 'left', gap: 15 }}>
                    <HomePageCards Title="Kalash Jain" Desc="This website was a game-changer for my education funding" Image="https://cdn.discordapp.com/attachments/1144894054505664612/1151195914145370262/profile.png" />
                    <HomePageCards Title="Rishi Vyas" Desc="Effortless scholarship discovery and straightforward applications" Image="https://cdn.discordapp.com/attachments/1144894054505664612/1151195914145370262/profile.png" />
                    <HomePageCards Title="Bittu" Desc="A lifesaver with hidden scholarships and timely reminders" Image="https://cdn.discordapp.com/attachments/1144894054505664612/1151195914145370262/profile.png" />
                    <HomePageCards Title="Aryan" Desc="Funding success and improved writing skills" Image="https://cdn.discordapp.com/attachments/1144894054505664612/1151195914145370262/profile.png" />
                    <HomePageCards Title="Kunal Sahu" Desc="Motivating community for a debt-free education" Image="https://cdn.discordapp.com/attachments/1144894054505664612/1151195914145370262/profile.png" />
                    <HomePageCards Title="Ullah" Desc="Game-changer for affordable education" Image="https://cdn.discordapp.com/attachments/1144894054505664612/1151195914145370262/profile.png" />
                </ScrollContainer>
            </Box>
        </Box>
    )
}

function HomePageCards(props:any) {
    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                width: 320,
                minWidth: {xs: 320},
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
            >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img
                src={props.Image}
                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                loading="lazy"
                alt=""
                />
            </AspectRatio>
            <CardContent>
                <Typography level="title-lg" id="card-description">
                    {props.Title}
                </Typography>
                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                <Link
                    overlay
                    underline="none"
                    href="#interactive-card"
                    sx={{ color: 'text.tertiary' }}
                >
                    {props.Desc}
                </Link>
                </Typography>
                {/* <Chip
                    variant="outlined"
                    color="primary"
                    size="sm"
                    sx={{ pointerEvents: 'none' }}
                    >
                   {props.Chip}
                </Chip> */}
            </CardContent>
        </Card>
    )
}

function About() {
    return (
        <div id='about'>
            <TwoSidedLayout >
                <Box  sx={{display: 'flex', justifyContent: 'left', width: '100%', pb: 2}} > 
                    <Typography color="primary" fontWeight="lg" variant='outlined' sx={{borderRadius: 10, py: 1, px: 2,fontSize:{lg: 'lg', xs: 'sm'}, mx: {xs: 1, lg: 0}}}>
                        ABOUT
                    </Typography>
                </Box>
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                    sx={{mb: '1rem'}}
                >
                <Typography color="primary" >EduFundr </Typography> -  Unlocking the Future of Education Through Scholarships
                </Typography>
                <Typography fontSize="xl" textColor="text.secondary" lineHeight="lg">
                Welcome to EduFundr, your gateway to a brighter educational future! At EduFundr, we are dedicated to empowering students like you by connecting you with life-changing scholarship opportunities. Whether you're pursuing higher education, vocational training, or a specialized skill, our platform is designed to help you achieve your dreams without the burden of student debt.
                </Typography>
            </TwoSidedLayout>
        </div>
    )
}

function SideBar() {
    const navigate = useNavigate();
    return (
    <Box sx={{ display: {xs: 'flex', sm: 'none'}}}>
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
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pb: 4}}>
      <IconButton
            onClick={() => toggleSidebar()}
            size="sm"
            variant="soft"
            sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
        <Typography fontWeight="xl"> </Typography>
        <Typography fontWeight="xl"> &nbsp; <img src='https://cdn.discordapp.com/attachments/1144894054505664612/1149414171901960242/Logo.png' style={{height: 25}} /></Typography>
      </Box>

      <Divider />
      <Button
          size="sm"
          variant="plain"
          color="neutral"
          sx={{ display: 'flex'}}
      >
        <ScrollLink
            to='home'
            smooth={false}
            duration={500}
            offset={0}
            style={{appearance: 'none'}}
        >
            HOME
        </ScrollLink>
      </Button><Divider />
      <Button
          size="sm"
          variant="plain"
          color="neutral"
          sx={{ display: 'flex'}}
      >
        <ScrollLink
            to='about'
            smooth={false}
            duration={500}
            offset={-50}
            style={{appearance: 'none'}}
        >
            ABOUT
        </ScrollLink>
      </Button><Divider />
      <Button
          size="sm"
          variant="plain"
          color="neutral"
          sx={{ display: 'flex'}}
      >
        <ScrollLink
            to='contact'
            smooth={false}
            duration={500}
            offset={300}
            style={{appearance: 'none'}}
        >
            CONTACT
        </ScrollLink>
      </Button><Divider />
      <Button
        onClick={()=>navigate('./SignIn')}
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<LoginIcon />}
          sx={{ display: 'flex', py: 1.5}}
      >
          SIGN IN
      </Button>

      <Divider />
      <Box sx={(theme) => ({display: 'flex', gap: 1, alignItems: 'end', position: 'fixed', bottom: 10})}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography fontSize="sm" fontWeight="lg">
          &nbsp;  Created By
          </Typography>
          <Typography level="body-xs"> &nbsp;  @ZaidAhmed & @ShashankMishra</Typography>
        </Box>
      </Box>
    </Sheet>
    </Box>
    )
}

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <Box
            component="header"
            className="Header"
            sx={[
                {
                p: 2,
                gap: 2,
                bgcolor: 'background.body',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                // borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                },
            ]}>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
                >
                    <IconButton
                        onClick={() => toggleSidebar()}
                        size="sm"
                        variant="soft"
                        sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" fontWeight="xl" sx={{ml: {lg: 5}}}>
                        <img src='https://cdn.discordapp.com/attachments/1144894054505664612/1149414171901960242/Logo.png' style={{height: 25}} />
                    </Typography>
                    
                </Box>
    
    
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 , mr: {lg: 5}}}>
                    <Button
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                    >
                        <ScrollLink
                            to='home'
                            smooth={false}
                            duration={500}
                            offset={0}
                            style={{appearance: 'none'}}
                        >
                            HOME
                        </ScrollLink>
                    </Button>
                    <Button
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                    >
                        <ScrollLink
                            to='about'
                            smooth={false}
                            duration={500}
                            offset={0}
                            style={{appearance: 'none'}}
                        >
                            ABOUT
                        </ScrollLink>
                    </Button>
                    <Button
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                    >
                        <ScrollLink
                            to='contact'
                            smooth={false}
                            duration={500}
                            offset={50}
                            spy={true}
                            style={{appearance: 'none'}}
                        >
                            CONTACT
                        </ScrollLink>
                    </Button>
                    <Button
                        onClick={()=>navigate('./SignIn')}
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        startDecorator={<LoginIcon />}
                        sx={{ display: { xs: 'none', sm: 'inline-flex' }, bgcolor: 'white', color: 'black',
                        "&:hover": {
                            color: 'white',
                            backgroundColor: 'black',
                            outlineColor: 'black',
                        },  
                        }}
                    >
                        SIGN IN
                    </Button>
                    <ColorSchemeToggle />
                </Box>
    
                
            </Box>
        </>
      );
}
