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

interface PersonlFormElement extends HTMLFormElement {
    readonly firstName: HTMLInputElement;
    readonly lastName: HTMLInputElement;
    readonly fatherName: HTMLInputElement;
    readonly eMail: HTMLInputElement;
    readonly contactNumber: HTMLInputElement;
    readonly enrollmentNumber: HTMLInputElement;
    readonly dateofBirth: HTMLInputElement;
    readonly gender: HTMLInputElement;
    readonly religion: HTMLInputElement;
    readonly country: HTMLInputElement;
    readonly MaritalStatus: HTMLInputElement;
    readonly SpouseName: HTMLInputElement;
    readonly Disabled: HTMLInputElement;
    readonly Orphan: HTMLInputElement;
    readonly Agreement: HTMLInputElement;
}

export default function EditPersonalDetails(props: any) {
    const [PassportSize , setPassportSize] = React.useState<File | null>(null);
    const [PassportSizeuploadProgress, setPassportSizeuploadProgress] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0 ) {
        if (event.target.files[0].type == 'application/pdf') {
          setPassportSize(event.target.files[0]);
          setPassportSizeuploadProgress(0);
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
            setPassportSizeuploadProgress(progress);
          }
        };
        reader.readAsArrayBuffer(selectedFile);
      }
    };
    const uploadFile = async (fileData: ArrayBuffer, name: string) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setPassportSizeuploadProgress(100)
      setTimeout(() => {
        setSelectedFile(null);
        setPassportSizeuploadProgress(0)
      }, 1000);
    };
    const personalQuesList = [
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Father`s Name', formType:'text', decor: '', id: 'fatherName', properties: props.fatherName},
      {slotPattern: '^[/\S+@\S+\.\S+/]*$', pattern: /\S+@\S+\.\S+/, label: 'Email', formType:'email', decor: <i data-feather="mail" />, id: 'eMail', properties: props.eMail},
      {slotPattern: '^[0-9-\\s]*$' , pattern: /^[0-9-\s]+$/, label: 'Contact Number', formType:'number', decor: "+91", id: 'contactNumber', properties: props.contactNumber},
      {slotPattern: '^[0-9-,/\\s]*$' , pattern: /^[0-9/,-\s]+$/, label: 'Date of Birth', formType:'date', decor: "", id: 'dateofBirth', properties: props.dateofBirth},
      {slotPattern: '^[A-Za-z0-9-,/\\s]*$' , pattern: /^[A-Za-z0-9/,-\s]+$/, label: 'Enrollment Number', formType:'text', decor: "", id: 'enrollmentNumber', properties: props.enrollmentNumber}
    ];
    return (
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
                Personal Details
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ml: 1}}>
          <Typography level="h1" fontSize="xl3">
              Personal Details
          </Typography>
            <form  
            name='PersonalSubmit' method = "post"
            onSubmit={(event: React.FormEvent<PersonlFormElement>) => {
            event.preventDefault();
            props.dispatch({type: 'Next', payload: false})
            const data = {
                firstName: props.firstName,
                lastName: props.lastName,
                fatherName: props.fatherName,
                eMail: props.eMail,
                contactNumber: props.contactNumber,
                dateofBirth: props.dateofBirth,
                enrollmentNumber: props.enrollmentNumber,
                gender: props.Gender,
                country: props.country,
                religion: props.Religion,
                MaritalStatus: props.MaritalStatus,
                SpouseName: props.SpouseName,
                Disabled: props.Disabled,
                Orphan: props.Orphan,
                Agreement: props.Agreement,
            };
            alert(JSON.stringify(data, null, 2));
            }}>
                <Box sx={{pt: 3,pb: 10,display: 'grid',gridTemplateColumns: {  xs: '100%',  sm: 'minmax(120px, 30%) 1fr',  lg: '280px 1fr minmax(120px, 208px)',},
                    columnGap: { xs: 2, sm: 3, md: 4 },rowGap: { xs: 2, sm: 2.5 },'& > hr': {  gridColumn: '1/-1',},}} >
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }} >Name</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                    <FormControl  sx={{ flex: 1 }} >
                        <FormLabel sx={{ display: { sm: 'none' } }}>First name</FormLabel>
                        <Input 
                        type='text'
                        placeholder="" 
                        slotProps={{
                        input: {
                            pattern: '^[A-Za-z\\s]*$',
                        },
                        }}
                        onKeyPress={(e) => {
                        if (!/^[A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                        name="firstName"
                        required 
                        value={props.firstName} 
                        onChange={(e)=>props.dispatch({type: 'firstName', payload: e.target.value})} />
                    </FormControl>
                    <FormControl  sx={{ flex: 1 }}>
                        <FormLabel sx={{ display: { sm: 'none' } }}>Last name</FormLabel>
                        <Input placeholder=""
                        slotProps={{
                            input: {
                            pattern: '^[A-Za-z\\s]*$',
                            },
                        }}
                        onKeyPress={(e) => {
                            if (!/^[A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                            }
                        }}
                        name="lastName" required value={props.lastName} onChange={(e)=>props.dispatch({type: 'lastName', payload: e.target.value})} />
                    </FormControl>
                    </Box>
                    <Divider role="presentation" />
                    {
                    personalQuesList.map((ques: any, id: any) => (
                        <React.Fragment key={id}>
                        <FormControl sx={{ display: { sm: 'contents' } }}>
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
                                console.log(ques.formType)
                                if (ques.formType === 'email') {
                                if (ques.pattern.test(e.key)) {
                                    e.preventDefault();
                                }
                                } else {
                                if (!ques.pattern.test(e.key)) {
                                    e.preventDefault();
                                }
                                }
                            }}
                            value={ques.properties}
                            onChange={(e) =>
                                props.dispatch({ type: ques.id, payload: e.target.value })
                            }
                            />
                        </FormControl>
                        <Divider role="presentation" />
                        </React.Fragment>
                    ))
                    }
                <FormControl sx={{ display: { sm: 'contents' } }}><FormLabel>Gender</FormLabel>
                    <Select id="gender" name="gender" required value={props.Gender} onChange={(e, newValue) => props.dispatch({type: 'Gender', payload: newValue}) }>
                    <Option value="Female">Female</Option>
                    <Option value="Male">Male</Option>
                    <Option value="Others">Others</Option>
                    </Select>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}><FormLabel>Religion</FormLabel>
                    <Select name="religion" required value={props.Religion} onChange={(e, newValue) => props.dispatch({type: 'Religion', payload: newValue}) }>
                    <Option value="Hindu">Hindu</Option>
                    <Option value="Islam">Islam</Option>
                    <Option value="Sikh">Sikh</Option>
                    <Option value="Christian">Christian</Option>
                    <Option value="Jain">Jain</Option>
                    <Option value="Buddhism">Buddhism</Option>
                    <Option value="Other">Other</Option>
                    </Select>
                </FormControl>
                <Divider role="presentation" />
                <CountrySelector />
                <Divider role="presentation" />
                <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Address</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Address</FormLabel>
                    <FormControl sx={{ flex: 1 }}>
                        <Input name="HouseNo"
                        slotProps={{
                        input: {
                            pattern: '^[0-9A-Za-z\\s]*$',
                        },
                        }}
                        onKeyPress={(e) => {
                        if (!/^[0-9A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                        required placeholder="House No. / Building" value={props.HouseNo} onChange={(e)=>props.dispatch({type: 'HouseNo', payload: e.target.value})} />
                    </FormControl>
                    <FormControl sx={{ flex: 1 }}>
                        <Input name="Street"
                        slotProps={{
                        input: {
                            pattern: '^[0-9A-Za-z\\s]*$',
                        },
                        }}
                        onKeyPress={(e) => {
                        if (!/^[0-9A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                        required placeholder="Street / Locality"  value={props.Street} onChange={(e)=>props.dispatch({type: 'Street', payload: e.target.value})} />
                    </FormControl>
                    </Box>
                    <Divider />
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}></FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                    <FormControl sx={{ flex: 1 }}>
                        <Input name="Sector"
                        slotProps={{
                        input: {
                            pattern: '^[0-9A-Za-z\\s]*$',
                        },
                        }}
                        onKeyPress={(e) => {
                        if (!/^[0-9A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                        required placeholder="Area / Complex / Sector" value={props.Sector} onChange={(e)=>props.dispatch({type: 'Sector', payload: e.target.value})} />
                    </FormControl>
                    <FormControl sx={{ flex: 1 }}>
                        <Input name="City"
                        slotProps={{
                        input: {
                            pattern: '^[0-9A-Za-z\\s]*$',
                        },
                        }}
                        onKeyPress={(e) => {
                        if (!/^[0-9A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                        required placeholder="Town / City / Village" value={props.City} onChange={(e)=>props.dispatch({type: 'City', payload: e.target.value})} />
                    </FormControl>
                    </Box>
                    <Divider />
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}></FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                    <FormControl sx={{ flex: 1 }}>
                        <Input type='number' name="Pincode"
                        slotProps={{
                        input: {
                            pattern: '^[0-9A-Za-z\\s]*$',
                        },
                        }}
                        onKeyPress={(e) => {
                        if (!/^[0-9A-Za-z\s]+$/.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                        required placeholder="Pincode" value={props.Pincode} onChange={(e)=>props.dispatch({type: 'Pincode', payload: e.target.value})} />
                    </FormControl>
                    </Box>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Area</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Area</FormLabel>
                    <RadioGroup
                        name="Area"
                        value={props.Area}
                        orientation="horizontal"
                        onChange={(e)=>props.dispatch({type: 'Area', payload: e.target.value})}
                        sx={{ my: 1 }}
                        >
                        <Radio required value="Rural" label="Rural" />
                        <Radio required value="Urban" label="Urban" />
                    </RadioGroup>
                    </Box>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Marital Status</FormLabel>
                    <Select name="MaritalStatus" required value={props.MaritalStatus} onChange={(e, newValue) => props.dispatch({type: 'MaritalStatus', payload: newValue}) }>
                    <Option value="Single">Single</Option>
                    <Option value="Married">Married</Option>
                    <Option value="Divorced">Divorced</Option>
                    <Option value="Widow">Widow</Option>
                    <Option value="Widower">Widower</Option>
                    </Select>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: (props.MaritalStatus == 'Married') ? 'contents' : 'none'  } }>
                    <FormLabel></FormLabel>
                    <Input
                    type="text"
                    name="SpouseName"
                    placeholder="Spouse's Name"
                    slotProps={{
                        input: {
                        pattern: '^[A-Za-z\\s]*$',
                        },
                    }}
                    onKeyPress={(e) => {
                        if (!/^[A-Za-z\s]+$/.test(e.key)) {
                        e.preventDefault();
                        }
                    }}
                    value={props.SpouseName}
                    onChange={(e)=>props.dispatch({type: 'SpouseName', payload: e.target.value})}
                    />
                </FormControl>
                <Divider role="presentation" sx={{ display: (props.MaritalStatus == 'Married') ? 'content' : 'none' }} />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Do you identify as a person with a disability?</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Do you identify as a person with a disability?</FormLabel>
                    <RadioGroup
                        value={props.Disabled}
                        orientation="horizontal"
                        onChange={(e)=>props.dispatch({type: 'Disabled', payload: e.target.value})}
                        sx={{ my: 1 }}
                        name="Disabled" 
                        >
                        <Radio required value="Yes" label="Yes" />
                        <Radio required value="No" label="No" />
                    </RadioGroup>
                    </Box>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Orphan</FormLabel>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Orphan</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                    <RadioGroup
                        name="Orphan"
                        value={props.Orphan}
                        orientation="horizontal"
                        onChange={(e)=>props.dispatch({type: 'Orphan', payload: e.target.value})}
                        sx={{ my: 1 }}
                        >
                        <Radio required value="Yes" label="Yes" />
                        <Radio required value="No" label="No" />
                    </RadioGroup>
                    </Box>
                </FormControl>
                <Divider role="presentation" />
                <FormLabel>Upload Passport Size Photo</FormLabel>
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
                        <input name='PassportSize' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (PassportSize==null) ? true : false } />
                    </Button>
                    {PassportSize && <Box>&nbsp;{PassportSize?.name}</Box>}
                    </Typography>
                </Card>
                {(PassportSizeuploadProgress!=0) && (
                <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                        fileName={PassportSize?.name as string}
                        fileSize={PassportSize?.size}
                        progress={PassportSizeuploadProgress}
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
                    <Button name='PersonalSubmit' type='submit' size="sm">Next</Button>
                </Box>
                </Box>
                </form>
            </Box>
        </Box>    
    )
}
  