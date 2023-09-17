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

interface CasteFormElement extends HTMLFormElement {
    readonly casteCertificateNumber: HTMLInputElement;
    readonly casteCertificateIssueDate: HTMLInputElement;
    readonly caste: HTMLInputElement;
    readonly subCaste: HTMLInputElement;
}
const CasteModifystate = {
  casteCertificateNumber: '0001-458-9128',
  casteCertificateIssueDate: '2023/12/21',
  caste: 'OBC',
  subCaste: 'GG',
  Next: true,
  Agreement: false
}
function Castereducer(state:any, action:any) {
  switch (action.type) {
    case 'casteCertificateNumber': return {...state, casteCertificateNumber: action.payload}
    case 'casteCertificateIssueDate': return {...state, casteCertificateIssueDate: action.payload}
    case 'caste': return {...state, caste: action.payload}
    case 'subCaste': return {...state, subCaste: action.payload}
    case 'Agreement': return {...state, Agreement: action.payload}
    case 'Next': return {...state, Next: action.payload}
    default: throw new Error("Action not Found");
  }
}
export default function EditCasteDetails() {
    const [Castestate, Castedispatch] = React.useReducer(Castereducer, CasteModifystate);
    const [casteCertificate , setcasteCertificate] = React.useState<File | null>(null);
    const [casteCertificateuploadProgress, setcasteCertificateuploadProgress] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        if (event.target.files[0].type == 'application/pdf') { 
        setcasteCertificate(event.target.files[0]);
        setcasteCertificateuploadProgress(0);
        setSelectedFile(event.target.files[0]);
        var name:string = event?.target.name;
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
            setcasteCertificateuploadProgress(progress);
          }
        };
        reader.readAsArrayBuffer(selectedFile);
      }
    };
    const uploadFile = async (fileData: ArrayBuffer, name: string) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setcasteCertificateuploadProgress(100)
      setTimeout(() => {
        setSelectedFile(null);
        setcasteCertificateuploadProgress(0)
      }, 1000);
    };
    const casteQuesList = [
      {slotPattern: '^[0-9A-Za-z-/\\s]*$' , pattern: /^[0-9A-Za-z-/\s]+$/, label: 'Caste Certificate Number', formType:'text', decor: '', id: 'casteCertificateNumber', properties: Castestate.casteCertificateNumber},
      {slotPattern: '^[0-9-/,\s]*$' , pattern: /^[0-9-/,\s]+$/, label: 'Caste Certificate Issue Date', formType:'date', decor: '', id: 'casteCertificateIssueDate', properties: Castestate.casteCertificateIssueDate},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Caste', formType:'text', decor: '', id: 'caste', properties: Castestate.caste},
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Sub-Caste', formType:'text', decor: '', id: 'subCaste', properties: Castestate.subCaste},
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
                Caste Details
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ml: 1}}>
          <Typography level="h1" fontSize="xl3">
              Caste Details
          </Typography>
            <form  
            onSubmit={(event: React.FormEvent<CasteFormElement>) => {
            event.preventDefault();
            Castedispatch({type: 'Next', payload: false})
            Castestate.settabIndex(Castestate.tabIndex+1)
            const data = {
                casteCertificateNumber: Castestate.casteCertificateNumber,
                casteCertificateIssueDate: Castestate.casteCertificateIssueDate,
                caste: Castestate.caste,
                subCaste: Castestate.subCaste
            };
            alert(JSON.stringify(data, null, 2));
            }}>
                <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
                {
                    casteQuesList.map((ques:any, id:any) => (
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
                        onChange={(e)=>Castedispatch({type: ques.id, payload: e.target.value})} />
                        </FormControl>
                        <Divider role="presentation" />
                    </React.Fragment>
                    ))
                }
                    <FormLabel>Upload Caste Certificate</FormLabel>
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
                        <input name='casteCertificate' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (casteCertificate==null) ? true : false }/>
                        </Button>
                        {casteCertificate && <Box>&nbsp;{casteCertificate?.name}</Box>}
                    </Typography>
                    </Card>
                    {(casteCertificateuploadProgress!=0) && (
                    <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                            fileName={casteCertificate?.name as string}
                            fileSize={casteCertificate?.size}
                            progress={casteCertificateuploadProgress}
                        />
                    </FormControl>
                    </>
                    )}
                    <Divider role="presentation" />
    
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Agreement</FormLabel>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Agreement</FormLabel>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} >
                    <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." required name="Agreement"
                        checked={Castestate.Agreement} onChange={(e)=>Castedispatch({type: 'Agreement', payload: e.target.checked})}/>
                    </Box>
                    </FormControl>
                    <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }}>
                    <Button type='submit' size="sm" >Next</Button>
                    </Box>
                </Box>
              </form>
            </Box>      
        </Box>      
      </>
    )
}
  