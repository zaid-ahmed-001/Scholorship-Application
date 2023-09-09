/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
// icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Card, { CardProps } from '@mui/joy/Card';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const listItems = [
  {
    id: 'INV-1234',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'O',
      name: 'Olivia Ryhe',
      email: 'olivia@email.com',
    },
  },
  {
    id: 'INV-1233',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Steve Hampton',
      email: 'steve.hamp@email.com',
    },
  },
  {
    id: 'INV-1232',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'C',
      name: 'Ciaran Murray',
      email: 'ciaran.murray@email.com',
    },
  },
  {
    id: 'INV-1231',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'M',
      name: 'Maria Macdonald',
      email: 'maria.mc@email.com',
    },
  },
  {
    id: 'INV-1230',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'C',
      name: 'Charles Fulton',
      email: 'fulton@email.com',
    },
  },
  {
    id: 'INV-1229',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
  {
    id: 'INV-1229',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
  {
    id: 'INV-1229',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
];

export default function AppliedScholarshipList() {
  return (
  <Box >
      <Box sx={{ display: { xs: 'block', sm: 'none' } , mt: 9.5, width: '100%', ml: 1}}>
        <Box sx={{ display: {xs: 'flex', md: 'none', lg: 'none'}, alignItems: 'center' , mb: 2}}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon />}
          >
          <Link
            underline="none"
            color="neutral"
            aria-label="Home"
          >
              <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            fontSize={12}
            fontWeight={500}
          >
              Scholarship Data
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
              Applied Scholarship
          </Typography>
          </Breadcrumbs>
        </Box>
      <List
            key="1"
            size="sm"
            sx={{
              '--ListItem-paddingX': 0,
            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}
            >
              <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                <ListItemDecorator>
                  <Avatar size="sm" sx={{ml: 2.5}}>Z</Avatar>
                </ListItemDecorator>
                <div>
                  <Typography level="body-sm" fontWeight={600} gutterBottom>
                  Chavi Jain Scholarship : Fresh
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                  0863CS221189
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                  Apply Date : 01 Sep 2023
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                  Paid Date :  
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Link level="body-sm" component="button">
                      Amount : Rs 26,000
                    </Link>
                    <Chip
                      variant="soft"
                      size="sm"
                      startDecorator={
                        {
                          Paid: <CheckRoundedIcon />,
                          Refunded: <AutorenewRoundedIcon />,
                          Cancelled: <BlockIcon />,
                        }['Refunded']
                      }
                      color={
                        {
                          Paid: 'success',
                          Refunded: 'neutral',
                          Cancelled: 'danger',
                        }['Refunded'] as ColorPaletteProp
                      }
                    >
                    In-Process
                    </Chip>
                  </Box>
                </div>
              </ListItemContent>
              <Chip
                variant="soft"
                size="sm"
                startDecorator={
                  {
                    Paid: <CheckRoundedIcon />,
                    Refunded: <AutorenewRoundedIcon />,
                    Cancelled: <BlockIcon />,
                  }['Paid']
                }
                color={
                  {
                    Paid: 'success',
                    Refunded: 'neutral',
                    Cancelled: 'danger',
                  }['Paid'] as ColorPaletteProp
                }
              >
              Approved
              </Chip>
             
              {/* Payment Status
              <Chip
                variant="soft"
                size="sm"
                startDecorator={
                  {
                    Paid: <CheckRoundedIcon />,
                    Refunded: <AutorenewRoundedIcon />,
                    Cancelled: <BlockIcon />,
                  }['Paid']
                }
                color={
                  {
                    Paid: 'success',
                    Refunded: 'neutral',
                    Cancelled: 'danger',
                  }['Paid'] as ColorPaletteProp
                }
              >
              Approved
              </Chip> */}
            </ListItem>
            <ListDivider />
          </List>

        {/* {listItems.map((listItem) => (
          <List
            key={listItem.id}
            size="sm"
            // sx={{
            //   '--ListItem-paddingX': 0,
            // }}
          >
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}
            >
              <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                <ListItemDecorator>
                  <Avatar size="sm">{listItem.customer.initial}</Avatar>
                </ListItemDecorator>
                <div>
                  <Typography fontWeight={600} gutterBottom>
                    {listItem.customer.name}
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                    {listItem.customer.email}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 0.5,
                      mb: 1,
                    }}
                  >
                    <Typography level="body-xs">{listItem.date}</Typography>
                    <Typography level="body-xs">&bull;</Typography>
                    <Typography level="body-xs">{listItem.id}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Link level="body-sm" component="button">
                      Download
                    </Link>
                  </Box>
                </div>
              </ListItemContent>
              <Chip
                variant="soft"
                size="sm"
                startDecorator={
                  {
                    Paid: <CheckRoundedIcon />,
                    Refunded: <AutorenewRoundedIcon />,
                    Cancelled: <BlockIcon />,
                  }[listItem.status]
                }
                color={
                  {
                    Paid: 'success',
                    Refunded: 'neutral',
                    Cancelled: 'danger',
                  }[listItem.status] as ColorPaletteProp
                }
              >
                {listItem.status}
              </Chip>
            </ListItem>
            <ListDivider />
          </List>
        ))} */}
      </Box>
  </Box>
  );
}
