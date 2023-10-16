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
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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

const PersonalModifystate = {
    firstName: 'Zaid',
    lastName: 'Ahmed',
    passWord: 'nig123',
    ConfirmpassWord: 'nig123',
    fatherName: 'Parvez Ahmed',
    eMail: 'klick4278@gmail.com',
    contactNumber: '8982570514',
    enrollmentNumber: '0863CS221189',
    dateofBirth: '2004-12-13',
    Gender: 'Male',
    Religion: 'Islam',
    HouseNo: '39 GG',
    Street: 'Vijay Nagar',
    Sector: '54',
    City: 'Indore',
    Pincode: '452010',
    Area: 'Urban',
    MaritalStatus: 'Single',
    SpouseName: '',
    Disabled: 'No',
    Orphan: 'No',
    Next: true,
    Agreement: false
}

const Personalinitstate = {
    firstName: '',
    lastName: '',
    passWord: '',
    ConfirmpassWord: '',
    fatherName: '',
    eMail: '',
    contactNumber: '',
    enrollmentNumber: '',
    dateofBirth: '',
    Gender: '',
    Religion: '',
    HouseNo: '',
    Street: '',
    Sector: '',
    City: '',
    Pincode: '',
    Area: '',
    MaritalStatus: '',
    SpouseName: '',
    Disabled: '',
    Orphan: '',
    Next: true,
    Agreement: false
}
function Personalreducer(state:any, action:any) {
    switch (action.type) {
        case 'firstName': return {...state, firstName: action.payload}
        case 'lastName': return {...state, lastName: action.payload}
        case 'passWord': return {...state, passWord: action.payload}
        case 'ConfirmpassWord': return {...state, ConfirmpassWord: action.payload}
        case 'fatherName': return {...state, fatherName: action.payload}
        case 'eMail': return {...state, eMail: action.payload}
        case 'contactNumber': return {...state, contactNumber: action.payload}
        case 'dateofBirth': return {...state, dateofBirth: action.payload}
        case 'enrollmentNumber': return {...state, enrollmentNumber: action.payload}
        case 'Gender': return {...state, Gender: action.payload}
        case 'Religion': return {...state, Religion: action.payload}
        case 'HouseNo': return {...state, HouseNo: action.payload}
        case 'Street': return {...state, Street: action.payload}
        case 'Sector': return {...state, Sector: action.payload}
        case 'City': return {...state, City: action.payload}
        case 'Pincode': return {...state, Pincode: action.payload}
        case 'Area': return {...state, Area: action.payload}
        case 'MaritalStatus': return {...state, MaritalStatus: action.payload}
        case 'SpouseName': return {...state, SpouseName: action.payload}
        case 'Disabled': return {...state, Disabled: action.payload}
        case 'Orphan': return {...state, Orphan: action.payload}
        case 'Agreement': return {...state, Agreement: action.payload}
        case 'Next': return {...state, Next: action.payload}
        default: throw new Error("Action not Found");
    }
}
export default function EditPersonalDetails() {
    const [Personalstate, Personaldispatch] = React.useReducer(Personalreducer, PersonalModifystate);

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
      {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Father`s Name', formType:'text', decor: '', id: 'fatherName', properties: Personalstate.fatherName},
      {slotPattern: '^[/\S+@\S+\.\S+/]*$', pattern: /\S+@\S+\.\S+/, label: 'Email', formType:'email', decor: <MailOutlineIcon />, id: 'eMail', properties: Personalstate.eMail},
      {slotPattern: '^[0-9-\\s]*$' , pattern: /^[0-9-\s]+$/, label: 'Contact Number', formType:'number', decor: "+91", id: 'contactNumber', properties: Personalstate.contactNumber},
      {slotPattern: '^[0-9-,/\\s]*$' , pattern: /^[0-9/,-\s]+$/, label: 'Date of Birth', formType:'date', decor: "", id: 'dateofBirth', properties: Personalstate.dateofBirth},
      {slotPattern: '^[A-Za-z0-9-,/\\s]*$' , pattern: /^[A-Za-z0-9/,-\s]+$/, label: 'Enrollment Number', formType:'text', decor: "", id: 'enrollmentNumber', properties: Personalstate.enrollmentNumber}
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
            Personaldispatch({type: 'Next', payload: false})
            const data = {
                firstName: Personalstate.firstName,
                lastName: Personalstate.lastName,
                fatherName: Personalstate.fatherName,
                eMail: Personalstate.eMail,
                contactNumber: Personalstate.contactNumber,
                dateofBirth: Personalstate.dateofBirth,
                enrollmentNumber: Personalstate.enrollmentNumber,
                gender: Personalstate.Gender,
                country: Personalstate.country,
                religion: Personalstate.Religion,
                MaritalStatus: Personalstate.MaritalStatus,
                SpouseName: Personalstate.SpouseName,
                Disabled: Personalstate.Disabled,
                Orphan: Personalstate.Orphan,
                Agreement: Personalstate.Agreement,
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
                        value={Personalstate.firstName} 
                        onChange={(e)=>Personaldispatch({type: 'firstName', payload: e.target.value})} />
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
                        name="lastName" required value={Personalstate.lastName} onChange={(e)=>Personaldispatch({type: 'lastName', payload: e.target.value})} />
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
                                if (ques.formType == 'email') {
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
                                Personaldispatch({ type: ques.id, payload: e.target.value })
                            }
                            />
                        </FormControl>
                        <Divider role="presentation" />
                        </React.Fragment>
                    ))
                    }
                <FormControl sx={{ display: { sm: 'contents' } }}><FormLabel>Gender</FormLabel>
                    <Select id="gender" name="gender" required value={Personalstate.Gender} onChange={(e, newValue) => Personaldispatch({type: 'Gender', payload: newValue}) }>
                    <Option value="Female">Female</Option>
                    <Option value="Male">Male</Option>
                    <Option value="Others">Others</Option>
                    </Select>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}><FormLabel>Religion</FormLabel>
                    <Select name="religion" required value={Personalstate.Religion} onChange={(e, newValue) => Personaldispatch({type: 'Religion', payload: newValue}) }>
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
                        required placeholder="House No. / Building" value={Personalstate.HouseNo} onChange={(e)=>Personaldispatch({type: 'HouseNo', payload: e.target.value})} />
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
                        required placeholder="Street / Locality"  value={Personalstate.Street} onChange={(e)=>Personaldispatch({type: 'Street', payload: e.target.value})} />
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
                        required placeholder="Area / Complex / Sector" value={Personalstate.Sector} onChange={(e)=>Personaldispatch({type: 'Sector', payload: e.target.value})} />
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
                        required placeholder="Town / City / Village" value={Personalstate.City} onChange={(e)=>Personaldispatch({type: 'City', payload: e.target.value})} />
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
                        required placeholder="Pincode" value={Personalstate.Pincode} onChange={(e)=>Personaldispatch({type: 'Pincode', payload: e.target.value})} />
                    </FormControl>
                    </Box>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Area</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Area</FormLabel>
                    <RadioGroup
                        name="Area"
                        value={Personalstate.Area}
                        orientation="horizontal"
                        onChange={(e)=>Personaldispatch({type: 'Area', payload: e.target.value})}
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
                    <Select name="MaritalStatus" required value={Personalstate.MaritalStatus} onChange={(e, newValue) => Personaldispatch({type: 'MaritalStatus', payload: newValue}) }>
                    <Option value="Single">Single</Option>
                    <Option value="Married">Married</Option>
                    <Option value="Divorced">Divorced</Option>
                    <Option value="Widow">Widow</Option>
                    <Option value="Widower">Widower</Option>
                    </Select>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: (Personalstate.MaritalStatus == 'Married') ? 'contents' : 'none'  } }>
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
                    value={Personalstate.SpouseName}
                    onChange={(e)=>Personaldispatch({type: 'SpouseName', payload: e.target.value})}
                    />
                </FormControl>
                <Divider role="presentation" sx={{ display: (Personalstate.MaritalStatus == 'Married') ? 'content' : 'none' }} />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Do you identify as a person with a disability?</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>Do you identify as a person with a disability?</FormLabel>
                    <RadioGroup
                        value={Personalstate.Disabled}
                        orientation="horizontal"
                        onChange={(e)=>Personaldispatch({type: 'Disabled', payload: e.target.value})}
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
                        value={Personalstate.Orphan}
                        orientation="horizontal"
                        onChange={(e)=>Personaldispatch({type: 'Orphan', payload: e.target.value})}
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
                    checked={Personalstate.Agreement} onChange={(e)=>Personaldispatch({type: 'Agreement', payload: e.target.checked})}/>
                    </Box>
                </FormControl>
                <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                    <Button name='PersonalSubmit' type='submit' size="sm">Update Details</Button>
                </Box>
                </Box>
                </form>
            </Box>
        </Box>    
    )
}
  