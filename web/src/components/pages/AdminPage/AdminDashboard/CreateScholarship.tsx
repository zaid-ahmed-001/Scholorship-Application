import { Box, Breadcrumbs, Button, Divider, FormControl, FormLabel, Input, Link, Typography } from '@mui/joy';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import React from 'react';

interface CreateScholarship extends HTMLFormElement {
    readonly PersonalSamagraID: HTMLInputElement;
    readonly FamilySamagraID: HTMLInputElement;
    readonly HeadofFamily: HTMLInputElement;
    readonly RelationnShipHeadofFamily: HTMLInputElement;
    readonly GenderHeadofFamily: HTMLInputElement;
}

const CreateScholarshipinitstate = {
    CreateName: '',
    CreateDeadline: '',
    CreateDescription: '',
    CreateEligiblity: '',
    CreateDocuments: '',
}
function CreateScholarshipreducer(state:any, action:any) {
    switch (action.type) {
        case 'CreateName': return {...state, CreateName: action.payload}
        case 'CreateDeadline': return {...state, CreateDeadline: action.payload}
        case 'CreateDescription': return {...state, CreateDescription: action.payload}
        case 'CreateEligiblity': return {...state, CreateEligiblity: action.payload}
        case 'CreateDocuments': return {...state, CreateDocuments: action.payload}
        default: throw new Error("Action not Found");
    }
}
const CreateScholarship = () => {
    const [CreateScholarshipstate, CreateScholarshipdispatch] = React.useReducer(CreateScholarshipreducer, CreateScholarshipinitstate);
    const createschlarshipQuesList = [
        {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Name', formType:'text', decor: '', id: 'CreateName', properties: CreateScholarshipstate.CreateName},
        {slotPattern: '^[0-9/-\\s]$' , pattern: /^[0-9]+$/,label: 'Deadline', formType:'date', decor: '', id: 'CreateDeadline', properties: CreateScholarshipstate.CreateDeadline},
        {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Description', formType:'text', decor: '', id: 'CreateDescription', properties: CreateScholarshipstate.CreateDescription},
        {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Eligiblity', formType:'text', decor: '', id: 'CreateEligiblity', properties: CreateScholarshipstate.CreateEligiblity},
        {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Documents Required', formType:'text', decor: '', id: 'CreateDocuments', properties: CreateScholarshipstate.CreateDocuments}
    ];

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
                    Create Scholarship
                </Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ml: 1}}>
                <Typography level="h1" fontSize="xl3">
                    Create Scholarship
                </Typography>
                <form  
                    onSubmit={(event: React.FormEvent<CreateScholarship>) => {
                    event.preventDefault();
                    const data = {
                        CreateName: CreateScholarshipstate.CreateName,
                        CreateDeadline: CreateScholarshipstate.CreateDeadline,
                        CreateDescription: CreateScholarshipstate.CreateDescription,
                        CreateEligiblity: CreateScholarshipstate.CreateEligiblity,
                        CreateDocuments: CreateScholarshipstate.CreateDocuments
                    };
                    alert(JSON.stringify(data, null, 2));
                    }}>
                    <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
                        {
                            createschlarshipQuesList.map((ques:any, id:any) => (
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
                                onChange={(e)=>CreateScholarshipdispatch({type: ques.id, payload: e.target.value})} />
                                </FormControl>
                                <Divider role="presentation" />
                            </React.Fragment>
                            ))
                        }
                        <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }}>
                            <Button type='submit' size="sm" >Create</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    </>
    );
};

export default CreateScholarship;