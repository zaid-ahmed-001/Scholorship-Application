import * as React from 'react';
import {useState, ChangeEvent} from 'react';
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
import { Breadcrumbs, Checkbox, Divider, FormControl, FormLabel, Grid, Input } from '@mui/joy';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ShowAlert from '../../../../utils/ShowAlert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useLocation } from 'react-router-dom';

interface EditScholarship extends HTMLFormElement {
    readonly PersonalSamagraID: HTMLInputElement;
    readonly FamilySamagraID: HTMLInputElement;
    readonly HeadofFamily: HTMLInputElement;
    readonly RelationnShipHeadofFamily: HTMLInputElement;
    readonly GenderHeadofFamily: HTMLInputElement;
}

const EditScholarshipinitstate = {
    EditName: '',
    EditDeadline: '',
    EditDescription: '',
    EditEligiblity: '',
    EditDocuments: '',
}
function EditScholarshipreducer(state:any, action:any) {
    switch (action.type) {
        case 'EditName': return {...state, EditName: action.payload}
        case 'EditDeadline': return {...state, EditDeadline: action.payload}
        case 'EditDescription': return {...state, EditDescription: action.payload}
        case 'EditEligiblity': return {...state, EditEligiblity: action.payload}
        case 'EditDocuments': return {...state, EditDocuments: action.payload}
        default: throw new Error("Action not Found");
    }
}

export default function ScholarshipEditForm() {
  React.useEffect(() => {
    document.title = "Scholarship Application - EduFundr";
    return () => {};
  }, []);
  const location = useLocation();
  //const arr = location.state.arrData;

  const [EditScholarshipstate, EditScholarshipdispatch] = React.useReducer(EditScholarshipreducer, EditScholarshipinitstate);
  const EditschlarshipQuesList = [
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Name', formType:'text', decor: '', id: 'EditName', properties: EditScholarshipstate.EditName},
      {slotPattern: '^[0-9/-\\s]$' , pattern: /^[0-9]+$/,label: 'Deadline', formType:'date', decor: '', id: 'EditDeadline', properties: EditScholarshipstate.EditDeadline},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Description', formType:'text', decor: '', id: 'EditDescription', properties: EditScholarshipstate.EditDescription},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Eligiblity', formType:'text', decor: '', id: 'EditEligiblity', properties: EditScholarshipstate.EditEligiblity},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Documents Required', formType:'text', decor: '', id: 'EditDocuments', properties: EditScholarshipstate.EditDocuments}
  ];
  return (
    <Stack spacing={2} sx={{
      mt: {xs: 1, lg: 1},
      width: {xs: '90%', lg: '80%'}
    }}>
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
                md: 4,
            },
            mt: {xs: 1, lg: 1},
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                    Admin Dashboard
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                {location.state.title} Application 
                </Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ml: 1}}>
                <Typography level="h1" fontSize="xl3">
                    Edit Scholarship
                </Typography>
                <form  
                    onSubmit={(event: React.FormEvent<EditScholarship>) => {
                    event.preventDefault();
                    const data = {
                        EditName: EditScholarshipstate.EditName,
                        EditDeadline: EditScholarshipstate.EditDeadline,
                        EditDescription: EditScholarshipstate.EditDescription,
                        EditEligiblity: EditScholarshipstate.EditEligiblity,
                        EditDocuments: EditScholarshipstate.EditDocuments
                    };
                    alert(JSON.stringify(data, null, 2));
                    }}>
                    <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
                        {
                            EditschlarshipQuesList.map((ques:any, id:any) => (
                            <React.Fragment key={id}>
                                <FormControl  sx={{ display: { sm: 'contents' } }}>
                                <FormLabel>{ques.label}</FormLabel>
                                <Input
                                type={ques.formType}
                                placeholder=''
                                startDecorator={ques.decor}
                                name={ques.id}
                                required
                                slotProps={{
                                    input: {
                                    pattern: ques.slotPattern,
                                    },
                                }}
                                onKeyPress={(e) => {
                                    if (!ques.pattern.test(e.key)) {
                                    e.preventDefault();
                                    }
                                }}
                                value={ques.properties}
                                onChange={(e)=>EditScholarshipdispatch({type: ques.id, payload: e.target.value})} />
                                </FormControl>
                                <Divider role="presentation" />
                            </React.Fragment>
                            ))
                        }
                        <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }}>
                            <Button type='submit' size="sm" >Edit</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    </Stack>
  );
}