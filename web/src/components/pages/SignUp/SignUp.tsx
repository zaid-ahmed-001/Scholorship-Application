import * as React from 'react';
import { useState } from "react";
import { CssVarsProvider, useColorScheme, ColorPaletteProp } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip, { chipClasses } from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import FileUpload from '../../utils/FileUpload';
import CountrySelector from '../../utils/CountrySelector';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import { display } from '@mui/system';
import TabPanel from '@mui/joy/TabPanel';
import Checkbox from '@mui/joy/Checkbox';
import Card, { CardProps } from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import '../../../App.css';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/joy/Alert';
import { Label } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { title } from 'process';
import { type } from 'os';

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
export function PersonalDetails(props: any) {
  React.useEffect(() => {
    document.title = "SignUp - EduFundr";
    return () => {};
  }, []);
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
    <form  
    name='PersonalSubmit' method = "post"
    onSubmit={(event: React.FormEvent<PersonlFormElement>) => {
    event.preventDefault();
    props.dispatch({type: 'Next', payload: false})
    props.settabIndex(props.tabIndex+1)
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
      <TabPanel value={0}>
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
    </TabPanel>
    </form>
  )
}

interface AcademicFormElement extends HTMLFormElement {
  readonly Diploma: HTMLInputElement;
  readonly TenthBoard: HTMLInputElement;
  readonly TenthSchool: HTMLInputElement;
  readonly TenthPercentage: HTMLInputElement;
  readonly DiplomaCollege: HTMLInputElement;
  readonly DiplomaBranch: HTMLInputElement;
  readonly DiplomaCGPA: HTMLInputElement;
  readonly TwelfthBoard: HTMLInputElement;
  readonly TwelfthSchool: HTMLInputElement;
  readonly TwelfthStream: HTMLInputElement;
  readonly TwelfthPercentage: HTMLInputElement;
}
export function AcademicDetails(props: any) {
  const [TenthMarkSheet , setTenthMarkSheet] = React.useState<File | null>(null);
  const [TenthMarkSheetuploadProgress, setTenthMarkSheetUploadProgress] = React.useState(0);
  const [TwelfthMarkSheet , setTwelfthMarkSheet] = React.useState<File | null>(null);
  const [TwelfthMarkSheetuploadProgress, setTwelfthMarkSheetuploadProgress] = React.useState(0);
  const [previousSemMarkesheet , setpreviousSemMarkesheet] = React.useState<File | null>(null);
  const [previousSemMarkesheetuploadProgress, setpreviousSemMarkesheetuploadProgress] = React.useState(0);
  const [diplomaDegree , setdiplomaDegree] = React.useState<File | null>(null);
  const [diplomaDegreeuploadProgress, setdiplomaDegreeuploadProgress] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    var name:string = event.target.name;
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].type == 'application/pdf') {
        switch (event.target.name) {
          case 'TenthMarkSheet':
            setTenthMarkSheet(event.target.files[0]);
            setTenthMarkSheetUploadProgress(0);
            break;
          case 'TwelfthMarkSheet':
            setTwelfthMarkSheet(event.target.files[0]);
            setTwelfthMarkSheetuploadProgress(0);
            break;
          case 'previousSemMarkesheet':
            setpreviousSemMarkesheet(event.target.files[0]);
            setpreviousSemMarkesheetuploadProgress(0);
            break;
          case 'diplomaDegree':
            setdiplomaDegree(event.target.files[0]);
            setdiplomaDegreeuploadProgress(0);
            break;  
          default:
            break;
        }
        setSelectedFile(event.target.files[0]);
      } else {
        return
      }
    }
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target?.result as ArrayBuffer;
        // Simulate file upload process with a timeout
        uploadFile(fileData, name);
      };
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          // setUploadProgress(progress);
          switch (name) {
            case 'TenthMarkSheet':
              setTenthMarkSheetUploadProgress(progress);
              break;
            case 'TwelfthMarkSheet':
              setTwelfthMarkSheetuploadProgress(progress);
              break;
            case 'previousSemMarkesheet':
              setpreviousSemMarkesheetuploadProgress(progress);
              break;
            case 'diplomaDegree':
              setdiplomaDegreeuploadProgress(progress);
              break;  
            default:
              break;
          }
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };
  const uploadFile = async (fileData: ArrayBuffer, name: string) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    switch (name) {
      case 'TenthMarkSheet':
        setTenthMarkSheetUploadProgress(100);
        break;
      case 'TwelfthMarkSheet':
        setTwelfthMarkSheetuploadProgress(100);
        break;
      case 'previousSemMarkesheet':
        setpreviousSemMarkesheetuploadProgress(100);
        break;
      case 'diplomaDegree':
        setdiplomaDegreeuploadProgress(100);
        break;  
      default:
        break;
    }
    setTimeout(() => {
      setSelectedFile(null);
      switch (name) {
        case 'TenthMarkSheet':
          setTenthMarkSheetUploadProgress(0);
          break;
        case 'TwelfthMarkSheet':
          setTwelfthMarkSheetuploadProgress(0);
          break;
        case 'previousSemMarkesheet':
          setpreviousSemMarkesheetuploadProgress(0);
          break;
        case 'diplomaDegree':
          setdiplomaDegreeuploadProgress(0);
          break;    
        default:
          break;
      }
    }, 1000);
  };
  const diplomaQuesList = [
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Which college did you attend to complete your diploma?', formType:'text', decor: '', id: 'DiplomaCollege', properties: props.DiplomaCollege},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'In which branch did you complete your diploma?', formType:'text', decor: '', id: 'DiplomaBranch', properties: props.DiplomaBranch},
    {slotPattern: '^[0-9]*$' , pattern: /^[0-9]+$/, label: 'What was your CGPA when you completed your diploma?', formType:'number', decor: '', id: 'DiplomaCGPA', properties: props.DiplomaCGPA},
  ];
  const academicQuesList = [
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Exam board was in charge of your 10th-Grade Board Exams', formType:'text', decor: '', id: 'TenthBoard', properties: props.TenthBoard},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Name of the school where you completed your 10th-Grade Board Education', formType:'text', decor: '', id: 'TenthSchool', properties: props.TenthSchool},
    {slotPattern: '^[0-9]*$' , pattern: /^[0-9]+$/, label: 'Percentage you secured in your 10th-Grade Board Exams', formType:'number', decor: '', id: 'TenthPercentage', properties: props.TenthPercentage},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Exam board was in charge of your 12th-Grade Board Exams', formType:'text', decor: '', id: 'TwelfthBoard', properties: props.TwelfthBoard},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Name of the school where you completed your 12th-Grade Board Education', formType:'text', decor: '', id: 'TwelfthSchool', properties: props.TwelfthSchool},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'What stream did you choose for your 12th-Grade?', formType:'text', decor: '', id: 'TwelfthStream', properties: props.TwelfthStream},
    {slotPattern: '^[0-9]*$' , pattern: /^[0-9]+$/, label: 'Percentage you secured in your 12th-Grade Board Exams', formType:'number', decor: '', id: 'TwelfthPercentage', properties: props.TwelfthPercentage}
  ];
  return (
    <>
    <form  
    onSubmit={(event: React.FormEvent<AcademicFormElement>) => {
          event.preventDefault();
          props.dispatch({type: 'Next', payload: false})
          props.settabIndex(props.tabIndex+1)
          if (props.Diploma === 'Yes') {
            for (let index = 0; index < academicQuesList.length; index++) {
              const element = academicQuesList[index].id;
              props.dispatch({type: element, payload: '-NA-'})
            }
          } else if (props.Diploma === 'No') {
            for (let index = 0; index < diplomaQuesList.length; index++) {
              const element = diplomaQuesList[index].id;
              props.dispatch({type: element, payload: '-NA-'})
            }
          }
          const data = {
            Diploma: props.Diploma,
            DiplomaCollege: props.DiplomaCollege,
            DiplomaBranch: props.DiplomaBranch,
            DiplomaCGPA: props.DiplomaCGPA,
            TenthBoard: props.TenthBoard,
            TenthSchool: props.TenthSchool,
            TenthPercentage: props.TenthPercentage,
            TwelfthBoard: props.TwelfthBoard,
            TwelfthSchool: props.TwelfthSchool,
            TwelfthStream: props.TwelfthStream,
            TwelfthPercentage: props.TwelfthPercentage
          };
          alert(JSON.stringify(data, null, 2));
        }}>
      <TabPanel value={1}>
        <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
        <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Enter Current Semester</FormLabel>
                <Select required name='currentSemester' value={props.currentSemester} onChange={(e, newValue) => props.dispatch({type: 'currentSemester', payload: newValue})}>
                  <Option value={1}>First</Option>
                  <Option value={2}>Second</Option>
                  <Option value={3}>Third</Option>
                  <Option value={4}>Fourth</Option>
                  <Option value={5}>Fifth</Option>
                  <Option value={6}>Sixth</Option>
                  <Option value={7}>Seventh</Option>
                  <Option value={8}>Eighth</Option>
                </Select>
              </FormControl>
              {(() => { if (props.currentSemester!=1)  {
                return (
                  <>
                  <Divider role="presentation" />
                  <FormLabel>Upload Previous Semester MarkSheet</FormLabel>
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
                      <input name='previousSemMarkesheet' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: 0, position: 'absolute'}} required={ (previousSemMarkesheet==null) ? true : false }/>
                    </Button>
                    {previousSemMarkesheet && <Box>&nbsp;{previousSemMarkesheet?.name}</Box>}
                    </Typography>
                  </Card>
                  {(previousSemMarkesheetuploadProgress!=0) && (
                  <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                          fileName={previousSemMarkesheet?.name as string}
                          fileSize={previousSemMarkesheet?.size}
                          progress={previousSemMarkesheetuploadProgress}
                        />
                    </FormControl>
                  </>
                  )}
                  </>
                )
              }
            })()}
            <Divider role="presentation" />  
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Have you concluded a diploma curriculum?</FormLabel>
                <FormLabel sx={{ display: { sm: 'none' } }}>Have you concluded a diploma curriculum?</FormLabel>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <RadioGroup
                      name="Diploma"
                      value={props.Diploma}
                      orientation="horizontal"
                      onChange={(e)=>props.dispatch({type: 'Diploma', payload: e.target.value})}
                      sx={{ my: 1 }}
                    >
                    <Radio required value="Yes" label="Yes" />
                    <Radio required value="No" label="No" />
                  </RadioGroup>
                </Box>
              </FormControl>
              <Divider role="presentation" />
              {(() => { if (props.Diploma==='Yes')  {
                return (
                  <>
                    {
                      diplomaQuesList.map((ques:any, id:any) => (
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
                  <FormLabel>Upload Diploma Degree</FormLabel>
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
                      <input name='diplomaDegree' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (diplomaDegree==null) ? true : false }/>
                    </Button>
                    {diplomaDegree && <Box>&nbsp;{diplomaDegree?.name}</Box>}
                    </Typography>
                  </Card>
                  {(diplomaDegreeuploadProgress!=0) && (
                  <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                          fileName={diplomaDegree?.name as string}
                          fileSize={diplomaDegree?.size}
                          progress={diplomaDegreeuploadProgress}
                        />
                    </FormControl>
                  </>
                  )}
                  </>
                )
              } else if (props.Diploma==='No') {
                return (
                  <>
                    {
                      academicQuesList.map((ques:any, id:any) => (
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
                  <FormLabel>Upload 10th Class MarkSheet</FormLabel>
                  <Card
                    variant="outlined"
                    sx={[{borderRadius: 'sm', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', px: 3, flexGrow: 1}]}>
                    <Box sx={{ p: 1, bgcolor: 'background.level1', borderRadius: '50%' }}>
                      <Box
                        sx={{width: 32, height: 32, borderRadius: '50%', bgcolor: 'background.level2', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                        <i data-feather="upload-cloud" />
                      </Box>
                    </Box>
                    <Typography level="body-sm" textAlign="center" >
                      <Button component="label" variant="plain" >Choose PDF File
                        <input name='TenthMarkSheet' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (TenthMarkSheet==null) ? true : false }/>
                      </Button>
                      {TenthMarkSheet && <Box>&nbsp;{TenthMarkSheet?.name}</Box>}
                    </Typography>
                  </Card>
                  {(TenthMarkSheetuploadProgress!=0) && (
                  <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                          fileName={TenthMarkSheet?.name as string}
                          fileSize={TenthMarkSheet?.size}
                          progress={TenthMarkSheetuploadProgress}
                        />
                    </FormControl>
                  </>
                  )}
                  <Divider role="presentation" />
                  <FormLabel>Upload 12th Class MarkSheet</FormLabel>
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
                        <input name='TwelfthMarkSheet' accept=".pdf" type="file" onChange={handleUpload} style={{opacity: '0',position: 'absolute'}} required={ (TwelfthMarkSheet==null) ? true : false }/>
                      </Button>
                      {TwelfthMarkSheet && <Box>&nbsp;{TwelfthMarkSheet?.name}</Box>}
                    </Typography>
                  </Card>
                  {(TwelfthMarkSheetuploadProgress!=0) && (
                  <>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel></FormLabel>
                        <FileUpload
                          fileName={TwelfthMarkSheet?.name as string}
                          fileSize={TwelfthMarkSheet?.size}
                          progress={TwelfthMarkSheetuploadProgress}
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
                  <Divider role="presentation" />
                </>
                )
                }
              })()}
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                <Button type='submit' size="sm">Next</Button>
              </Box>
          </Box>
        </TabPanel>
      </form>
    </>
  )
}

interface CasteFormElement extends HTMLFormElement {
  readonly casteCertificateNumber: HTMLInputElement;
  readonly casteCertificateIssueDate: HTMLInputElement;
  readonly caste: HTMLInputElement;
  readonly subCaste: HTMLInputElement;
}
export function CasteDetails(props:any) {
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
    {slotPattern: '^[0-9A-Za-z-/\\s]*$' , pattern: /^[0-9A-Za-z-/\s]+$/, label: 'Caste Certificate Number', formType:'text', decor: '', id: 'casteCertificateNumber', properties: props.casteCertificateNumber},
    {slotPattern: '^[0-9-/,\s]*$' , pattern: /^[0-9-/,\s]+$/, label: 'Caste Certificate Issue Date', formType:'date', decor: '', id: 'casteCertificateIssueDate', properties: props.casteCertificateIssueDate},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Caste', formType:'text', decor: '', id: 'caste', properties: props.caste},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/, label: 'Sub-Caste', formType:'text', decor: '', id: 'subCaste', properties: props.subCaste},
  ];
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<CasteFormElement>) => {
        event.preventDefault();
        props.dispatch({type: 'Next', payload: false})
        props.settabIndex(props.tabIndex+1)
        const data = {
          casteCertificateNumber: props.casteCertificateNumber,
          casteCertificateIssueDate: props.casteCertificateIssueDate,
          caste: props.caste,
          subCaste: props.subCaste
        };
        alert(JSON.stringify(data, null, 2));
      }}>
        <TabPanel value={2}>
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
                    onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
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
                  checked={props.Agreement} onChange={(e)=>props.dispatch({type: 'Agreement', payload: e.target.checked})}/>
                </Box>
              </FormControl>
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }}>
                <Button type='submit' size="sm" >Next</Button>
              </Box>
            </Box>
        </TabPanel>
      </form>
    </>
  )
}

interface incomeFormElement extends HTMLFormElement {
  readonly incomeAgriculture: HTMLInputElement;
  readonly incomeBusiness: HTMLInputElement;
  readonly incomeProperty: HTMLInputElement;
  readonly familyMembers: HTMLInputElement;
  readonly incomeTotal: HTMLInputElement;
}
export function IncomeDetails(props:any) {
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
          <TabPanel value={3}>
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
        </TabPanel>
      </form>
    </>
  )
}

interface SamagraFormElement extends HTMLFormElement {
  readonly PersonalSamagraID: HTMLInputElement;
  readonly FamilySamagraID: HTMLInputElement;
  readonly HeadofFamily: HTMLInputElement;
  readonly RelationnShipHeadofFamily: HTMLInputElement;
  readonly GenderHeadofFamily: HTMLInputElement;
}
export function SamagraDetails(props:any) {
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
    {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/,label: 'Your Samagra ID', formType:'number', decor: '', id: 'PersonalSamagraID', properties: props.PersonalSamagraID},
    {slotPattern: '^[0-9]$' , pattern: /^[0-9]+$/,label: 'Family Samagra ID', formType:'number', decor: '', id: 'FamilySamagraID', properties: props.FamilySamagraID},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Name of Head of Family', formType:'text', decor: '', id: 'HeadofFamily', properties: props.HeadofFamily},
    {slotPattern: '^[A-Za-z\\s]*$' , pattern: /^[A-Za-z\s]+$/,label: 'Relationship with Head of Family', formType:'text', decor: '', id: 'RelationnShipHeadofFamily', properties: props.RelationnShipHeadofFamily},
  ];
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<SamagraFormElement>) => {
        event.preventDefault();
        props.dispatch({type: 'Next', payload: false})
        props.settabIndex(props.tabIndex+1)
        const data = {
          PersonalSamagraID: props.PersonalSamagraID,
          FamilySamagraID: props.FamilySamagraID,
          HeadofFamily: props.HeadofFamily,
          RelationnShipHeadofFamily: props.RelationnShipHeadofFamily,
          GenderHeadofFamily: props.GenderHeadofFamily
        };
        alert(JSON.stringify(data, null, 2));
      }}>
      <TabPanel value={4}>
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
                    onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                  </FormControl>
                  <Divider role="presentation" />
                </React.Fragment>
              ))
              }
          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Gender of Head of Family</FormLabel>
              <Select required name='GenderHeadofFamily' value={props.GenderHeadofFamily} onChange={(e, newValue) => props.dispatch({type: 'GenderHeadofFamily', payload: newValue})} >
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
             checked={props.Agreement} onChange={(e)=>props.dispatch({type: 'Agreement', payload: e.target.checked})}/>
            </Box>
          </FormControl>
          <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
            <Button name='PersonalSubmit' type='submit' size="sm" >Next</Button>
          </Box>
        </Box>
      </TabPanel>
    </form>
    </>
  )
}

interface NativeFormElement extends HTMLFormElement {
  readonly nativeBorn: HTMLInputElement;
  readonly nativeEducation: HTMLInputElement;
}
export function NativeDetails(props:any) {
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
        <TabPanel value={5}>
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
        </TabPanel>
      </form>
    </>
  )
}

const Personalinitstate = {
  firstName: '',
  lastName: '',
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
const Academicinitstate = {
  Diploma: '',
  DiplomaCollege: '',
  DiplomaBranch: '',
  DiplomaCGPA: '',
  TenthBoard: '',
  TenthSchool: '',
  TenthPercentage: '',
  TwelfthBoard: '',
  TwelfthSchool: '',
  TwelfthStream: '',
  TwelfthPercentage: '',
  currentSemester: 1,
  Next: true,
  Agreement: false
}
function Academicreducer(state:any, action:any) {
  switch (action.type) {
    case 'Diploma': return {...state, Diploma: action.payload}
    case 'DiplomaCollege': return {...state, DiplomaCollege: action.payload}
    case 'DiplomaBranch': return {...state, DiplomaBranch: action.payload}
    case 'DiplomaCGPA': return {...state, DiplomaCGPA: action.payload}
    case 'TenthBoard': return {...state, TenthBoard: action.payload}
    case 'TenthSchool': return {...state, TenthSchool: action.payload}
    case 'TenthPercentage': return {...state, TenthPercentage: action.payload}
    case 'TwelfthBoard': return {...state, TwelfthBoard: action.payload}
    case 'TwelfthSchool': return {...state, TwelfthSchool: action.payload}
    case 'TwelfthStream': return {...state, TwelfthStream: action.payload}
    case 'TwelfthPercentage': return {...state, TwelfthPercentage: action.payload}
    case 'currentSemester': return {...state, currentSemester: action.payload}
    case 'Agreement': return {...state, Agreement: action.payload}
    case 'Next': return {...state, Next: action.payload}
    default: throw new Error("Action not Found");
  }
}
const Casteinitstate = {
  casteCertificateNumber: '',
  casteCertificateIssueDate: '',
  caste: '',
  subCaste: '',
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
const Incomeinitstate = {
  incomeAgriculture: '',
  incomeBusiness: '',
  incomeProperty: '',
  familyMembers: '',
  incomeTotal: '',
  Next: true,
  Agreement: false
}
function Incomereducer(state:any, action:any) {
  switch (action.type) {
    case 'incomeAgriculture': return {...state, incomeAgriculture: action.payload}
    case 'incomeBusiness': return {...state, incomeBusiness: action.payload}
    case 'incomeProperty': return {...state, incomeProperty: action.payload}
    case 'familyMembers': return {...state, familyMembers: action.payload}
    case 'incomeTotal': return {...state, incomeTotal: action.payload}
    case 'Agreement': return {...state, Agreement: action.payload}
    case 'Next': return {...state, Next: action.payload}
    default: throw new Error("Action not Found");
  }
}
const Samagrainitstate = {
  PersonalSamagraID: '',
  FamilySamagraID: '',
  HeadofFamily: '',
  RelationnShipHeadofFamily: '',
  GenderHeadofFamily: '',
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
const Nativeinitstate = {
  nativeBorn: '',
  nativeEducation: '',
  Next: true,
  Agreement: false
}
function Nativereducer(state:any, action:any) {
  switch (action.type) {
    case 'nativeBorn': return {...state, nativeBorn: action.payload}
    case 'nativeEducation': return {...state, nativeEducation: action.payload}
    case 'Agreement': return {...state, Agreement: action.payload}
    case 'Next': return {...state, Next: action.payload}
    default: throw new Error("Action not Found");
  }
}

export default function SignUp() {
  const navigate = useNavigate();
  const [Personalstate, Personaldispatch] = React.useReducer(Personalreducer, Personalinitstate);
  const [Academicstate, Academicdispatch] = React.useReducer(Academicreducer, Academicinitstate);
  const [Castestate, Castedispatch] = React.useReducer(Castereducer, Casteinitstate);
  const [Incomestate, Incomedispatch] = React.useReducer(Incomereducer, Incomeinitstate);
  const [Samagrastate, Samagradispatch] = React.useReducer(Samagrareducer, Samagrainitstate);
  const [Nativestate, Nativedispatch] = React.useReducer(Nativereducer, Nativeinitstate);
  const [tabIndex, settabIndex] = React.useState(0);

  const ProfileReview = [
    {id: 'firstName', data: Personalstate.firstName+' '+Personalstate.lastName, decor: '', label: 'Name'},
    {id: 'fatherName', data: Personalstate.fatherName, decor: '', label: 'Father Name'},
    {id: 'eMail', data: Personalstate.eMail, decor: '', label: 'Email'},
    {id: 'contactNumber', data: Personalstate.contactNumber, decor: '', label: 'Contact Number'},
    {id: 'dateofBirth', data: Personalstate.dateofBirth, decor: '', label: 'Date of Birth'},
    {id: 'enrollmentNumber', data: Personalstate.enrollmentNumber, decor: '', label: 'Enrollment Number'},
    {id: 'Gender', data: Personalstate.Gender, decor: '', label: 'Gender'}, 
    {id: 'Religion', data: Personalstate.Religion, decor: '', label: 'Religion'},
    {id: 'HouseNo', data: Personalstate.HouseNo+' '+Personalstate.Street+' Sector '+Personalstate.Sector+' , '+Personalstate.City+' Pincode '+Personalstate.Pincode+' , '+Personalstate.Area, decor: '', label: 'Address'},
    {id: 'MaritalStatus', data: Personalstate.MaritalStatus+' '+Personalstate.SpouseName, decor: '', label: 'Marital Status'},
    {id: 'Disabled', data: Personalstate.Disabled, decor: '', label: 'Disabled'},
    {id: 'Orphan', data: Personalstate.Orphan, decor: '', label: 'Orphan'},
    {id: 'Diploma', data: Academicstate.Diploma, decor: '', label: 'Have you concluded a diploma curriculum?'},
    {id: 'DiplomaCollege', data: Academicstate.DiplomaCollege, decor: '', label: 'Which college did you attend to complete your diploma?'},
    {id: 'DiplomaBranch', data: Academicstate.DiplomaBranch, decor: '', label: 'In which branch did you complete your diploma?'},
    {id: 'DiplomaCGPA', data: Academicstate.DiplomaCGPA, decor: '', label: 'What was your CGPA when you completed your diploma?'},
    {id: 'TenthBoard', data: Academicstate.TenthBoard, decor: '', label: 'Exam board was in charge of your 10th-Grade Board Exams'},
    {id: 'TenthSchool', data: Academicstate.TenthSchool, decor: '', label: 'Name of the school where you completed your 10th-Grade Board Education'},
    {id: 'TenthPercentage', data: Academicstate.TenthPercentage, decor: '', label: 'Percentage you secured in your 10th-Grade Board Exams'},
    {id: 'TwelfthBoard', data: Academicstate.TwelfthBoard, decor: '', label: 'Exam board was in charge of your 12th-Grade Board Exams'},
    {id: 'TwelfthSchool', data: Academicstate.TwelfthSchool, decor: '', label: 'Name of the school where you completed your 12th-Grade Board Education'},
    {id: 'TwelfthStream', data: Academicstate.TwelfthStream, decor: '', label: 'What stream did you choose for your 12th-Grade?'},
    {id: 'TwelfthPercentage', data: Academicstate.TwelfthPercentage, decor: '', label: 'Percentage you secured in your 12th-Grade Board Exams'},
    {id: 'casteCertificateNumber', data: Castestate.casteCertificateNumber, decor: '', label: 'Caste Certificate Number'},
    {id: 'casteCertificateIssueDate', data: Castestate.casteCertificateIssueDate, decor: '', label: 'Caste Certificate Issue Date'},
    {id: 'caste', data: Castestate.caste, decor: '', label: 'Caste'},
    {id: 'subCaste', data: Castestate.subCaste, decor: '', label: 'Sub-Caste'},
    {id: 'incomeAgriculture', data: Incomestate.incomeAgriculture, decor: '', label: 'What`s your yearly income from the hectares / acres of agricultural land you own in the village?'},
    {id: 'incomeBusiness', data: Incomestate.incomeBusiness, decor: 'Rs', label: 'What`s your yearly income from your Business?'},
    {id: 'incomeProperty', data: Incomestate.incomeProperty, decor: 'Rs', label: 'What`s your yearly income from your House Property?'},
    {id: 'familyMembers', data: Incomestate.familyMembers, decor: 'Rs', label: 'Members your Family Contains?'},
    {id: 'incomeTotal', data: Incomestate.incomeTotal, decor: '', label: 'Total Income of Family'},
    {id: 'PersonalSamagraID', data: Samagrastate.PersonalSamagraID, decor: '', label: 'Your Samagra ID'},
    {id: 'FamilySamagraID', data: Samagrastate.FamilySamagraID, decor: '', label: 'Family Samagra ID'},
    {id: 'HeadofFamily', data: Samagrastate.HeadofFamily, decor: '', label: 'Name of Head of Family'},
    {id: 'RelationnShipHeadofFamily', data: Samagrastate.RelationnShipHeadofFamily, decor: '', label: 'Relationship with Head of Family'},
    {id: 'GenderHeadofFamily', data: Samagrastate.GenderHeadofFamily, decor: '', label: 'Gender of Head of Family'},
    {id: 'nativeBorn', data: Nativestate.nativeBorn, decor: '', label: 'Were you born in Madhya Pradesh?'},
    {id: 'nativeEducation', data: Nativestate.nativeEducation, decor: '', label: 'Have you received continuous education for atleast three years in any educational institute located in Madhya Pradesh? (Provision of education will not apply to disable candidates)'},
  ];
  const alertInitial = {
    title: '',
    color: '', 
    icon: '',
    display: ''
  };
  const [alertSubmit, setalertSubmit] = React.useState(alertInitial);
  function onFinalSubmit() {
    for (let index = 0; index < ProfileReview.length; index++) {
      const element = ProfileReview[index];
      console.log(element.label, element.data)
      if (element.data == ' ' || element.data == '' || element.data == '  Sector  ,  Pincode  , ' || element.data == null || element.data == "null " ) {
        setalertSubmit({title:'The '+ element.label+' field is missing. Please fill it out before submitting.', color:'warning',  icon: '', display: 'flex'})
        setTimeout(() => {
          setalertSubmit({ ...alertSubmit, display: 'none'})
        }, 4000);
        break
      }
      if (index == ProfileReview.length-1) {
        setalertSubmit({title:'Your form has been submitted successfully!', color:'success',  icon: '', display: 'flex'})
        setTimeout(() => {
          setalertSubmit({ ...alertSubmit, display: 'none'})
          setTimeout(() => {
            navigate('/')
          }, 1000);
        }, 4000);
      }
    }
  }
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <GlobalStyles
        styles={(theme) => ({
          '[data-feather], .feather': {
            color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
            margin: 'var(--Icon-margin)',
            fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
            width: '1em',
            height: '1em',
          },
        })}
      />
      <CssBaseline />     
    <Box
      sx={{
        flex: 1,
        maxWidth: 1200,
        width: '100%',
        mx: 'auto',
      }}
    >
    <Box
      sx={{
        flex: 1,
        maxHeight: 30,
        height: 30,
        mx: 'auto',
        opacity: 0,
      }}
    />
      <Typography level="h1" fontSize="xl2" sx={{ mb: 1, paddingLeft: 2}}>
        My Profile
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'row-reverse',justifySelf: 'flex-end', position: 'absolute', top: 4, right: 15}}>
            <Button  variant="soft" color="neutral" name='PersonalSubmit' type='submit' size="sm" onClick={ () => navigate('/') }>Home</Button>
        </Box>
      </Typography>
      <Tabs value={tabIndex} onChange={(event, value) => settabIndex(value as number)} sx={{ bgcolor: 'transparent' }}>
        <Box
          sx={{
            '--_shadow-height': '16px',
            height: 0,
            position: 'sticky',
            top: 'calc(48px - var(--main-paddingTop, 0px) + var(--Header-height, 0px) - (var(--_shadow-height) / 2))',
            zIndex: 1,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'relative',
              zIndex: 1,

              height: 'var(--_shadow-height)',
              background:
                'radial-gradient(closest-side, rgba(0 0 0 / 0.12), transparent 100%)',
            },
          }}
        />
        <TabList
          sticky="top"
          variant="plain"
          sx={(theme) => ({
            '--Chip-minHeight': '20px',
            '--ListItem-minHeight': '48px',
            top: 'calc(-1 * (var(--main-paddingTop, 0px) - var(--Header-height, 0px)))',
            zIndex: 10,
            paddingLeft: 2,
            width: '100%',
            overflow: 'auto hidden',
            alignSelf: 'flex-start',
            scrollSnapType: 'inline',
            '&::after': {
              pointerEvents: 'none',
              display: { xs: 'block', sm: 'none' },
              content: '""',
              position: 'sticky',
              top: 0,
              width: 40,
              flex: 'none',
              zIndex: 1,
              right: 0,
              borderBottom: '1px solid transparent',
              background: `linear-gradient(to left, ${theme.vars.palette.background.body}, rgb(0 0 0 / 0))`,
              backgroundClip: 'content-box',
            },
            '&::-webkit-scrollbar': {
              width: 0,
              display: 'none',
            },
            [`& .${tabClasses.root}`]: {
              '--focus-outline-offset': '-2px',
              '&:first-of-type': {
                ml: 'calc(-1 * var(--ListItem-paddingX))',
              },
              scrollSnapAlign: 'start',
              bgcolor: 'transparent',
              flex: 'none',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                bgcolor: 'transparent',
                [`& .${chipClasses.root}`]: theme.variants.solid.primary,
              },
            },
          })}
        > 
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row-reverse',justifySelf: 'flex-end', position: 'absolute', bottom: 8, right: 15}}>
            <Button variant="soft" color="neutral" name='PersonalSubmit' type='submit' size="sm" onClick={ () => navigate('/') }>Home</Button>
          </Box>
          <Tab indicatorInset value={0} onClick={()=>settabIndex(0)} >
            Personal Details
          </Tab>
          <Tab indicatorInset value={1} disabled={Personalstate.Next} >
            Academic Details
          </Tab>
          <Tab indicatorInset value={2} disabled={Academicstate.Next} >
            Caste & Composite
          </Tab>
          <Tab indicatorInset value={3} disabled={Castestate.Next} >
            Income Details
          </Tab>
          <Tab indicatorInset value={4} disabled={Incomestate.Next} >
            Samagra Details
          </Tab>
          <Tab indicatorInset value={5} disabled={Samagrastate.Next} >
            Native Declaration
          </Tab>
          <Tab indicatorInset value={6} disabled={Nativestate.Next} >
            Profile Review
          </Tab>
        </TabList>
        
        <PersonalDetails dispatch={Personaldispatch} firstName={Personalstate.firstName} lastName={Personalstate.lastName} fatherName={Personalstate.fatherName} eMail={Personalstate.eMail}
         contactNumber={Personalstate.contactNumber} dateofBirth={Personalstate.dateofBirth} enrollmentNumber={Personalstate.enrollmentNumber} Gender={Personalstate.Gender} Religion={Personalstate.Religion} HouseNo={Personalstate.HouseNo}
         Street={Personalstate.Street} Sector={Personalstate.Sector} City={Personalstate.City} Pincode={Personalstate.Pincode} Area={Personalstate.Area} MaritalStatus={Personalstate.MaritalStatus}
         SpouseName={Personalstate.SpouseName} Disabled={Personalstate.Disabled} Orphan={Personalstate.Orphan} Next={Personalstate.Next} tabIndex={tabIndex} settabIndex={settabIndex}
         Agreement={Personalstate.Agreement}
        />
        <AcademicDetails dispatch={Academicdispatch} Diploma={Academicstate.Diploma} TenthBoard={Academicstate.TenthBoard} TenthSchool={Academicstate.TenthSchool} TenthPercentage={Academicstate.TenthPercentage}
          TwelfthBoard={Academicstate.TwelfthBoard} TwelfthSchool={Academicstate.TwelfthSchool} TwelfthStream={Academicstate.TwelfthStream} TwelfthPercentage={Academicstate.TwelfthPercentage}
          Next={Academicstate.Next} tabIndex={tabIndex} settabIndex={settabIndex} Agreement={Academicstate.Agreement} currentSemester={Academicstate.currentSemester}
          DiplomaCollege={Academicstate.DiplomaCollege} DiplomaBranch={Academicstate.DiplomaBranch} DiplomaCGPA={Academicstate.DiplomaCGPA}
        />
        <CasteDetails dispatch={Castedispatch} casteCertificateNumber={Castestate.casteCertificateNumber} casteCertificateIssueDate={Castestate.casteCertificateIssueDate} caste={Castestate.caste} 
          subCaste={Castestate.subCaste} Next={Castestate.Next} tabIndex={tabIndex} settabIndex={settabIndex} Agreement={Castestate.Agreement}
        />
        <IncomeDetails dispatch={Incomedispatch} incomeAgriculture={Incomestate.incomeAgriculture} incomeBusiness={Incomestate.incomeBusiness} incomeProperty={Incomestate.incomeProperty}
          familyMembers={Incomestate.familyMembers} incomeTotal={Incomestate.incomeTotal} Next={Incomestate.Next} tabIndex={tabIndex} settabIndex={settabIndex}
          Agreement={Incomestate.Agreement}
        />
        <SamagraDetails dispatch={Samagradispatch} PersonalSamagraID={Samagrastate.PersonalSamagraID} FamilySamagraID={Samagrastate.FamilySamagraID} HeadofFamily={Samagrastate.HeadofFamily} 
          RelationnShipHeadofFamily={Samagrastate.RelationnShipHeadofFamily} GenderHeadofFamily={Samagrastate.GenderHeadofFamily} Next={Samagrastate.Next} tabIndex={tabIndex} settabIndex={settabIndex}
          Agreement={Samagrastate.Agreement}
        />
        <NativeDetails dispatch={Nativedispatch} nativeBorn={Nativestate.nativeBorn} nativeEducation={Nativestate.nativeEducation} Next={Nativestate.Next} tabIndex={tabIndex} settabIndex={settabIndex}
          Agreement={Nativestate.Agreement}
        />  

        <TabPanel value={6}>
          <Box sx={{ pt: 3, pb: 4, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >
              {
                ProfileReview.map((ques:any, id:any) => (
                  <React.Fragment key={id}>
                    <FormControl sx={{ display: (ques.data==='' || ques.data==='-NA-') ? 'none' : { sm: 'contents', sx: 'flex' } }}>
                      <FormLabel>{ques.label}</FormLabel>
                      <Input 
                      type='text'
                      placeholder=''
                      defaultValue={ques.data}
                      disabled
                      startDecorator={ques.decor}
                      required />
                      <Divider role="presentation" />
                    </FormControl>
                  </React.Fragment>
                ))
              }
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
                  <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." checked name="ReviewAgreement" />
                </Box>
              </FormControl>
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                <Button name='FinalSubmit' type='submit' size="sm" onClick={()=>onFinalSubmit()}>Submit</Button>
              </Box>
          </Box>
            {(() => { if (alertSubmit.color==='warning')  {
            return (
              <Box sx={{pb: 10, display: 'flex', gap: 2, width: '100%', flexDirection: 'row' , justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <Alert key={alertSubmit.title} sx={{zIndex: 999, textAlign: 'center',width: '100%', display: 'flex' ,justifyContent: 'center', borderRadius: '10px'}} variant="outlined" color="warning" >
                  <div>
                    {/* <div>{alertSubmit.title}</div> */}
                    <Typography level="body-sm" color="warning">{alertSubmit.title}</Typography>
                  </div>
                </Alert>
              </Box>   
            )
          } else if (alertSubmit.color==='success') {
            return (
            <Box sx={{pb: 10, display: alertSubmit.display, gap: 2, width: '100%', flexDirection: 'column' , justifyContent: 'center', alignItems: 'flex-end'}}>
              <Alert key={alertSubmit.title} sx={{zIndex: 999, textAlign: 'center',width: '100%', display: 'flex' ,justifyContent: 'center', borderRadius: '10px'}} variant="outlined" color="success" >
                <div>
                  {/* <div>{alertSubmit.title}</div> */}
                  <Typography level="body-sm" color="success">{alertSubmit.title}</Typography>
                </div>
              </Alert>
            </Box>  
            )
          }
          })()}
          <Box sx={{pb: 18, width: '100%'}}></Box>
        </TabPanel>
      </Tabs>
    </Box>
    </CssVarsProvider>
  );
}