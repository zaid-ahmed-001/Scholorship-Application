import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import FileUpload from '../../../utils/FileUpload';
import CountrySelector from '../../../utils/CountrySelector';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Checkbox from '@mui/joy/Checkbox';
import Card, { CardProps } from '@mui/joy/Card';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';

interface SamagraFormElement extends HTMLFormElement {
  readonly PersonalSamagraID: HTMLInputElement;
  readonly FamilySamagraID: HTMLInputElement;
  readonly HeadofFamily: HTMLInputElement;
  readonly RelationnShipHeadofFamily: HTMLInputElement;
  readonly GenderHeadofFamily: HTMLInputElement;
}
const SamagraModifystate = {
  PersonalSamagraID: '4520113',
  FamilySamagraID: '8920113',
  HeadofFamily: 'Top G',
  RelationnShipHeadofFamily: 'Father G',
  GenderHeadofFamily: 'Male',
  Next: true,
  Agreement: false
}
function Samagrareducer(state:any, action:any) {
  switch (action.type) {
    case 'PersonalSamagraID': return {...state, PersonalSamagraID: action.payload}
    case 'FamilySamagraID': return {...state, FamilySamagraID: action.payload}
    case 'HeadofFamily': return {...state, HeadofFamily: action.payload}
    case 'RelationnShipHeadofFamily': return {...state, RelationnShipHeadofFamily: action.payload}
    case 'GenderHeadofFamily': return {...state, GenderHeadofFamily: action.payload}
    case 'Agreement': return {...state, Agreement: action.payload}
    case 'Next': return {...state, Next: action.payload}
    default: throw new Error("Action not Found");
  }
}
export default function EditSamagraDetails() {
    const [Samagrastate, Samagradispatch] = React.useReducer(Samagrareducer, SamagraModifystate);
    const [samagraCertificate , setsamagraCertificate] = React.useState<File | null>(null);
    const [samagraCertificateuploadProgress, setsamagraCertificateuploadProgress] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        if (event.target.files[0].type == 'application/pdf') {
          setsamagraCertificate(event.target.files[0]);
          setsamagraCertificateuploadProgress(0);
          setSelectedFile(event.target.files[0]);
          var name:string = event.target.name;
        } else {
          return
        }
      }
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileData = event.target?.result as ArrayBuffer;
          uploadFile(fileData, name);
        };
        reader.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setsamagraCertificateuploadProgress(progress);
          }
        };
        reader.readAsArrayBuffer(selectedFile);
      }
    };
    const uploadFile = async (fileData: ArrayBuffer, name: string) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setsamagraCertificateuploadProgress(100)
      setTimeout(() => {
        setSelectedFile(null);
        setsamagraCertificateuploadProgress(0)
      }, 1000);
    };
    const samagraQuesList = [
      {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/,label: 'Your Samagra ID', formType:'number', decor: '', id: 'PersonalSamagraID', properties: Samagrastate.PersonalSamagraID},
      {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/,label: 'Family Samagra ID', formType:'number', decor: '', id: 'FamilySamagraID', properties: Samagrastate.FamilySamagraID},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Name of Head of Family', formType:'text', decor: '', id: 'HeadofFamily', properties: Samagrastate.HeadofFamily},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Relationship with Head of Family', formType:'text', decor: '', id: 'RelationnShipHeadofFamily', properties: Samagrastate.RelationnShipHeadofFamily},
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
                  Personalize Profile
              </Link>
              <Typography color="primary" fontWeight={500} fontSize={12}>
                  Samagra Details
              </Typography>
            </Breadcrumbs>
          </Box>
        <Box sx={{ml: 1}}>
        <Typography level="h1" fontSize="xl3">
            Samagra Details
        </Typography>
                <form  
                onSubmit={(event: React.FormEvent<SamagraFormElement>) => {
                event.preventDefault();
                Samagradispatch({type: 'Next', payload: false})
                Samagrastate.settabIndex(Samagrastate.tabIndex+1)
                const data = {
                    PersonalSamagraID: Samagrastate.PersonalSamagraID,
                    FamilySamagraID: Samagrastate.FamilySamagraID,
                    HeadofFamily: Samagrastate.HeadofFamily,
                    RelationnShipHeadofFamily: Samagrastate.RelationnShipHeadofFamily,
                    GenderHeadofFamily: Samagrastate.GenderHeadofFamily
                };
                alert(JSON.stringify(data, null, 2));
                }}>
                <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
                    {
                        samagraQuesList.map((ques:any, id:any) => (
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
                            onChange={(e)=>Samagradispatch({type: ques.id, payload: e.target.value})} />
                            </FormControl>
                            <Divider role="presentation" />
                        </React.Fragment>
                        ))
                        }
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Gender of Head of Family</FormLabel>
                        <Select required name='GenderHeadofFamily' value={Samagrastate.GenderHeadofFamily} onChange={(e, newValue) => Samagradispatch({type: 'GenderHeadofFamily', payload: newValue})} >
                        <Option value="Female">Female</Option>
                        <Option value="Male">Male</Option>
                        <Option value="Others">Others</Option>
                    </Select>
                    </FormControl>
                    <Divider role="presentation" />
                    <FormLabel>Upload Samagra Certificate</FormLabel>
                    <Card
                    variant="outlined"
                    sx={[{borderRadius: 'sm', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', px: 3, flexGrow: 1}]}>
                    <Box sx={{ p: 1, bgcolor: 'background.level1', borderRadius: '50%' }}>
                        <Box
                        sx={{width: 32, height: 32, borderRadius: '50%', bgcolor: 'background.level2', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                        <i data-feather="upload-cloud" />
                        </Box>
                    </Box>
                    <Typography level="body-sm" textAlign="center">
                        <Button component="label" variant="plain" >Choose PDF File
                        <input name='samagraCertificate' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (samagraCertificate==null) ? true : false }/>
                        </Button>
                        {samagraCertificate && <Box>&nbsp;{samagraCertificate?.name}</Box>}
                    </Typography>
                    </Card>
                    {(samagraCertificateuploadProgress!=0) && (
                    <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                            fileName={samagraCertificate?.name as string}
                            fileSize={samagraCertificate?.size}
                            progress={samagraCertificateuploadProgress}
                        />
                    </FormControl>
                    </>
                    )}
                    <Divider role="presentation" />
        
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Agreement</FormLabel>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Agreement</FormLabel>
                    <Box
                        sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        }}
                    >
                    <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." required name="Agreement"
                    checked={Samagrastate.Agreement} onChange={(e)=>Samagradispatch({type: 'Agreement', payload: e.target.checked})}/>
                    </Box>
                    </FormControl>
                    <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                    <Button name='PersonalSubmit' type='submit' size="sm" >Next</Button>
                    </Box>
                </Box>
            </form>
            </Box>
        </Box>
      </>
    )
}
  