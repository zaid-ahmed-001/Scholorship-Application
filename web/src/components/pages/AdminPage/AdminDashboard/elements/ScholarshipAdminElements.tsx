import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Grid } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

type ScholarshipElementsProps = {
  category: React.ReactNode;
  description: string;
  image: string;
  title: React.ReactNode;
  arr: Array<string>;
  docReq: Array<string>;
  arrSec: Array<string>;
};

export default function ScholarshipAdminElements({
  category,
  title,
  description,
  image,
  arr,
  docReq,
  arrSec,
}: ScholarshipElementsProps) {
  const navigate = useNavigate();
  function HandleClick() {
    navigate('../ScholarshipEditForm', {state: {title: title }})
  }
  return (
  <>
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        transition: '250ms all',
        padding: {
          xs: 0,
          sm: 2,
        },
        boxShadow: 'none',
        borderRadius: 'sm',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        width="100%"
        spacing={2.5}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: 200,
            },
            marginBottom: {
              xs: -2.5,
              sm: 0,
            },
          }}
        >
          <AspectRatio
            ratio={26 / 22}
            sx={(theme) => ({
              borderRadius: 'xs',
              [theme.breakpoints.down('sm')]: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            })}
          >
            <img alt="" src={image} style={{ display: 'block'}} />
          </AspectRatio>
        </Box>
        <Stack
          sx={{
            padding: {
              xs: 2,
              sm: 0,
            },
          }}
          spacing={1}
          flex={1}
        >
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <div>
              <Typography fontWeight="md" fontSize="lg">
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: 'text.primary' }}
                >
                  {title}
                </Link>
              </Typography>
              <Typography color="primary" fontSize="sm" fontWeight="lg">
                {category}
              </Typography>
            </div>
          </Stack>
          {description}
          <Box  >
            <Accordion  >
              <Grid container spacing={3} sx={{mt: 2}}>
                <Grid xs>
                  <AccordionSummary indicator={''} >View More</AccordionSummary>
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'end'}} >
                <Button size="sm" onClick={()=>HandleClick()} >Edit</Button>
                </Grid>
              </Grid>
                <AccordionDetails > 
                <List>
                  <ListSubheader>Eligiblity</ListSubheader>
                    <ListItem nested key={1}>
                        <List>
                        {arr.map((__, index) => (
                            <ListItem key={index}>
                            <ListItemButton><ArrowRightIcon/>{arr[index]}</ListItemButton>
                            </ListItem>
                        ))}
                        </List>
                    </ListItem>
                </List>
                <List>
                  <ListSubheader>Documents Required</ListSubheader>
                    <ListItem nested key={21}>
                        <List>
                        {arrSec.map((__, index) => (
                            <ListItem key={index}>
                            <ListItemButton><ArrowRightIcon/>{arrSec[index]}</ListItemButton>
                            </ListItem>
                        ))}
                        </List>
                    </ListItem>
                </List>
                </AccordionDetails>

            </Accordion>
          </Box>
        </Stack>
      </Stack>
    </Card>
  </>
  );
}
