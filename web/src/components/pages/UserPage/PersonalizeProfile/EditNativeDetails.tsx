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

interface NativeFormElement extends HTMLFormElement {
    readonly nativeBorn: HTMLInputElement;
    readonly nativeEducation: HTMLInputElement;
}

export default function EditNativeDetails(props:any) {
    const [nativeCertificate , setnativeCertificate] = React.useState<File | null>(null);
    const [nativeCertificateuploadProgress, setnativeCertificateuploadProgress] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        if (event.target.files[0].type == 'application/pdf') {
          setnativeCertificate(event.target.files[0]);
          setnativeCertificateuploadProgress(0);
          setSelectedFile(event.target.files[0]);
          var name:string = event.target.name;
        }
        else {
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
            setnativeCertificateuploadProgress(progress);
          }
        };
        reader.readAsArrayBuffer(selectedFile);
      }
    };
    const uploadFile = async (fileData: ArrayBuffer, name: string) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setnativeCertificateuploadProgress(100)
      setTimeout(() => {
        setSelectedFile(null);
        setnativeCertificateuploadProgress(0)
      }, 1000);
    };
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
              Native Declaration
            </Typography>
          </Breadcrumbs>
        </Box>
          <Box sx={{ml: 1}}>
          <Typography level="h1" fontSize="xl3">
              Native Declaration
          </Typography>
                <form  
                onSubmit={(event: React.FormEvent<NativeFormElement>) => {
                event.preventDefault();
                props.dispatch({type: 'Next', payload: false})
                props.settabIndex(props.tabIndex+1)
                const data = {
                    nativeBorn: props.nativeBorn,
                    nativeEducation: props.nativeEducation
                };
                alert(JSON.stringify(data, null, 2));
                }}>
                    <Box
                    sx={{
                        pt: 3,
                        pb: 10,
                        display: 'grid',
                        gridTemplateColumns: {
                        xs: '100%',
                        sm: 'minmax(120px, 30%) 1fr',
                        lg: '280px 1fr minmax(120px, 208px)',
                        },
                        columnGap: { xs: 2, sm: 3, md: 4 },
                        rowGap: { xs: 2, sm: 2.5 },
                        '& > hr': {
                        gridColumn: '1/-1',
                        },
                    }}
                    >
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                        <FormLabel >Were you born in Madhya Pradesh?</FormLabel>
                        <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                        <RadioGroup
                            name="nativeBorn"
                            orientation="horizontal"
                            sx={{ my: 1 }}
                            value={props.nativeBorn}
                            onChange={(e)=>props.dispatch({type: 'nativeBorn', payload: e.target.value})}>
                            <Radio required value="Yes" label="Yes" />
                            <Radio required value="No" label="No" />
                        </RadioGroup>
                        </Box>
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                        <FormLabel >Have you received continuous education for atleast three years in any educational institute located in Madhya Pradesh? (Provision of education will not apply to disable candidates)</FormLabel>
                        <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                        <RadioGroup
                            name="nativeEducation"
                            orientation="horizontal"
                            sx={{ my: 1 }}
                            value={props.nativeEducation}
                            onChange={(e)=>props.dispatch({type: 'nativeEducation', payload: e.target.value})}>
                            <Radio required value="Yes" label="Yes" />
                            <Radio required value="No" label="No" />
                        </RadioGroup>
                        </Box>
                    </FormControl>
        
                    <Divider role="presentation" />
                    <FormLabel>Upload Domicile Certificate</FormLabel>
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
                            <input name='nativeCertificate' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (nativeCertificate==null) ? true : false }/>
                        </Button>
                        {nativeCertificate && <Box>&nbsp;{nativeCertificate?.name}</Box>}
                        </Typography>
                    </Card>
                    {(nativeCertificateuploadProgress!=0) && (
                    <>
                        <Divider role="presentation" />
                        <FormControl sx={{ display: { sm: 'contents' } }}>
                        <FormLabel></FormLabel>
                            <FileUpload
                            fileName={nativeCertificate?.name as string}
                            fileSize={nativeCertificate?.size}
                            progress={nativeCertificateuploadProgress}
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
                            checked={props.Agreement} onChange={(e)=>props.dispatch({type: 'Agreement', payload: e.target.checked})}/>
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