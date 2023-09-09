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

interface incomeFormElement extends HTMLFormElement {
    readonly incomeAgriculture: HTMLInputElement;
    readonly incomeBusiness: HTMLInputElement;
    readonly incomeProperty: HTMLInputElement;
    readonly familyMembers: HTMLInputElement;
    readonly incomeTotal: HTMLInputElement;
}

export default function EditIncomeDetails(props:any) {
    const [incomeCertificate , setincomeCertificate] = React.useState<File | null>(null);
    const [incomeCertificateuploadProgress, setincomeCertificateuploadProgress] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        if (event.target.files[0].type == 'application/pdf') {
          setincomeCertificate(event.target.files[0]);
          setincomeCertificateuploadProgress(0);
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
            setincomeCertificateuploadProgress(progress);
          }
        };
        reader.readAsArrayBuffer(selectedFile);
      }
    };
    const uploadFile = async (fileData: ArrayBuffer, name: string) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setincomeCertificateuploadProgress(100)
      setTimeout(() => {
        setSelectedFile(null);
        setincomeCertificateuploadProgress(0)
      }, 1000);
    };
    const incomeQuesList = [
      {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/, label: 'What`s your yearly income from the hectares / acres of agricultural land you own in the village?', formType:'number', decor: 'Rs', id: 'incomeAgriculture', properties: props.incomeAgriculture},
      {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/, label: 'What`s your yearly income from your Business?', formType:'number', decor: 'Rs', id: 'incomeBusiness', properties: props.incomeBusiness},
      {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/, label: 'What`s your yearly income from your House Property?', formType:'number', decor: 'Rs', id: 'incomeProperty', properties: props.incomeProperty},
      {slotPattern: '^[A-Za-z,\\s]*$' , pattern: /^[A-Za-z,\s]+$/, label: 'Members your Family Contains?', formType:'text', decor: '', id: 'familyMembers', properties: props.familyMembers},
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
                Income Details
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ml: 1}}>
          <Typography level="h1" fontSize="xl3">
              Income Details
          </Typography>
            <form  
                onSubmit={(event: React.FormEvent<incomeFormElement>) => {
                event.preventDefault();
                props.dispatch({type: 'Next', payload: false})
                props.settabIndex(props.tabIndex+1)
                const data = {
                    incomeAgriculture: props.incomeAgriculture,
                    incomeBusiness: props.incomeBusiness,
                    incomeProperty: props.incomeProperty,
                    familyMembers: props.familyMembers,
                    incomeTotal: props.incomeTotal
                };
                alert(JSON.stringify(data, null, 2));
                }}>
                <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
                    {
                    incomeQuesList.map((ques:any, id:any) => (
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
                            onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                        </FormControl>
                        <Divider role="presentation" />
                        </React.Fragment>
                    ))
                    }
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Total Income of Family</FormLabel>
                    <Select required name='incomeTotal' value={props.incomeTotal} onChange={(e, newValue) => props.dispatch({type: 'incomeTotal', payload: newValue})}>
                        <Option value="Less Than 1,00,000">
                        Less Than Rs: 1,00,000
                        </Option>
                        <Option value="Rs: 1,00,000 to Rs: 2,00,000">
                        Rs: 1,00,000 to Rs: 2,00,000
                        </Option>
                        <Option value="Rs: 2,00,000 to Rs: 3,00,000">
                        Rs: 2,00,000 to Rs: 3,00,000
                        </Option>
                        <Option value="Rs: 3,00,000 to Rs: 4,00,000">
                        Rs: 3,00,000 to Rs: 4,00,000
                        </Option>
                        <Option value="Rs: 4,00,000 to Rs: 5,00,000">
                        Rs: 4,00,000 to Rs: 5,00,000
                        </Option>
                        <Option value="Rs: 5,00,000 to Rs: 6,00,000">
                        Rs: 5,00,000 to Rs: 6,00,000
                        </Option>
                        <Option value="Rs: 6,00,000 to Rs: 7,00,000">
                        Rs: 6,00,000 to Rs: 7,00,000
                        </Option>
                        <Option value="More Than Rs: 7,00,000">
                        More Than Rs: 7,00,000
                        </Option>
                    </Select>
                    </FormControl>
                    <Divider role="presentation" />
                    <FormLabel>Upload Income Certificate</FormLabel>
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
                        <input name='incomeCertificate' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (incomeCertificate==null) ? true : false }/>
                        </Button>
                        {incomeCertificate && <Box>&nbsp;{incomeCertificate?.name}</Box>}
                    </Typography>
                    </Card>
                    {(incomeCertificateuploadProgress!=0) && (
                    <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                            fileName={incomeCertificate?.name as string}
                            fileSize={incomeCertificate?.size}
                            progress={incomeCertificateuploadProgress}
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
  