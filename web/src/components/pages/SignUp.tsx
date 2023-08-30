import * as React from 'react';
import { useState } from "react";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
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
import DropZone from '../tools/DropZone';
import FileUpload from '../tools/FileUpload';
import CountrySelector from '../tools/CountrySelector';
import EditorToolbar from '../tools/EditorToolbar';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import { display } from '@mui/system';
import TabPanel from '@mui/joy/TabPanel';
import Checkbox from '@mui/joy/Checkbox';
import Card, { CardProps } from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

function enableTab(index:number) {
  console.log('check data for ', index)
}
interface PersonlFormElement extends HTMLFormElement {
  readonly firstName: HTMLInputElement;
  readonly lastName: HTMLInputElement;
  readonly fatherName: HTMLInputElement;
  readonly eMail: HTMLInputElement;
  readonly contactNumber: HTMLInputElement;
  readonly dateofBirth: HTMLInputElement;
  readonly gender: HTMLInputElement;
  readonly religion: HTMLInputElement;
  readonly country: HTMLInputElement;
  readonly MaritalStatus: HTMLInputElement;
  readonly SpouseName: HTMLInputElement;
  readonly Disabled: HTMLInputElement;
  readonly Orphan: HTMLInputElement;
  readonly PersonalAgreement: HTMLInputElement;
}
function PersonalDetails(props: any) {
  const personalQuesList = [
    {label: 'Email', formType:'text', decor: <i data-feather="mail" />, id: 'eMail', properties: props.eMail},
    {label: 'Contact Number', formType:'number', decor: "+91", id: 'contactNumber', properties: props.contactNumber},
    {label: 'Date of Birth', formType:'date', decor: "", id: 'dateofBirth', properties: props.dateofBirth}
  ];
  return (
    <form  
    name='PersonalSubmit'
    onSubmit={(event: React.FormEvent<PersonlFormElement>) => {
    event.preventDefault();
    const PersonlForm = event.currentTarget.elements;
    const data = {
      firstName: props.firstName,
      lastName: props.lastName,
      fatherName: props.fatherName,
      eMail: props.eMail,
      contactNumber: props.contactNumber,
      dateofBirth: props.dateofBirth,
      gender: props.Gender,
      country: props.country,
      religion: props.Religion,
      MaritalStatus: props.MaritalStatus,
      SpouseName: props.SpouseName,
      Disabled: props.Disabled,
      Orphan: props.Orphan,
      Agreement: props.PersonalAgreement,
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
              <Input placeholder="" name="firstName" required value={props.firstName} onChange={(e)=>props.dispatch({type: 'firstName', payload: e.target.value})} />
            </FormControl>
            <FormControl  sx={{ flex: 1 }}>
              <FormLabel sx={{ display: { sm: 'none' } }}>Last name</FormLabel>
              <Input placeholder="" name="lastName" required value={props.lastName} onChange={(e)=>props.dispatch({type: 'lastName', payload: e.target.value})} />
            </FormControl>
          </Box>
        {
          personalQuesList.map((ques:any, index:any) => {
              return <>
                <Divider role="presentation" />
                <FormControl  sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>{ques.label}</FormLabel>
                  <Input 
                  type={ques.formType}
                  placeholder=''
                  defaultValue=''
                  startDecorator={ques.decor}
                  name={ques.id}
                  required
                  value={ques.properties}
                  onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                </FormControl>
                <Divider role="presentation" />
            </>
          })
        }
        <FormControl sx={{ display: { sm: 'contents' } }}><FormLabel>Gender</FormLabel>
          <Select id="gender" name="gender" required value={props.Gender} onChange={(e, newValue) => props.dispatch({type: 'Gender', payload: newValue}) }>
            <Option value="female">Female</Option>
            <Option value="male">Male</Option>
            <Option value="transgender">Transgender</Option>
          </Select>
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}><FormLabel>Religion</FormLabel>
          <Select defaultValue="" name="religion" required value={props.Religion} onChange={(e, newValue) => props.dispatch({type: 'Religion', payload: newValue}) }>
            <Option value="hindu">Hindu</Option>
            <Option value="muslim">Islam</Option>
            <Option value="sikh">Sikh</Option>
            <Option value="christian">Christian</Option>
            <Option value="jain">Jain</Option>
            <Option value="buddhism">Buddhism</Option>
            <Option value="other">Other</Option>
          </Select>
        </FormControl>
        <Divider role="presentation" />
        <CountrySelector />
        <Divider role="presentation" />
        <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Address</FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormLabel sx={{ display: { sm: 'none' } }}>Address</FormLabel>
            <FormControl sx={{ flex: 1 }}>
              <Input name="HouseNo" required placeholder="House No. / Building" value={props.HouseNo} onChange={(e)=>props.dispatch({type: 'HouseNo', payload: e.target.value})} />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <Input name="Street" required placeholder="Street / Locality"  value={props.Street} onChange={(e)=>props.dispatch({type: 'Street', payload: e.target.value})} />
            </FormControl>
          </Box>
          <Divider />
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}></FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <Input name="Sector" required placeholder="Area / Complex / Sector" value={props.Sector} onChange={(e)=>props.dispatch({type: 'Sector', payload: e.target.value})} />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <Input name="City" required placeholder="Town / City / Village" value={props.City} onChange={(e)=>props.dispatch({type: 'City', payload: e.target.value})} />
            </FormControl>
          </Box>
          <Divider />
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}></FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <Input type='number' name="Pincode" required placeholder="Pincode" value={props.Pincode} onChange={(e)=>props.dispatch({type: 'Pincode', payload: e.target.value})} />
            </FormControl>
          </Box>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Area</FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>Area</FormLabel>
            <RadioGroup
                defaultValue=""
                name="Area"
                value={props.Area}
                orientation="horizontal"
                onChange={(e)=>props.dispatch({type: 'Area', payload: e.target.value})}
                sx={{ my: 1 }}
              >
              <Radio required value="rural" label="Rural" />
              <Radio required value="urban" label="Urban" />
            </RadioGroup>
          </Box>
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Marital Status</FormLabel>
          <Select defaultValue="" name="MaritalStatus" required value={props.MaritalStatus} onChange={(e, newValue) => props.dispatch({type: 'MaritalStatus', payload: newValue}) }>
            <Option value="single">Single</Option>
            <Option value="married">Married</Option>
            <Option value="divorced">Divorced</Option>
            <Option value="widow">Widow</Option>
            <Option value="widower">Widower</Option>
          </Select>
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: (props.MaritalStatus == 'married') ? 'contents' : 'none'  } }>
          <FormLabel></FormLabel>
          <Input
            type="text"
            name="SpouseName"
            placeholder="Spouse's Name"
            value={props.SpouseName}
            onChange={(e)=>props.dispatch({type: 'SpouseName', payload: e.target.value})}
          />
        </FormControl>
        <Divider role="presentation" sx={{ display: (props.MaritalStatus == 'married') ? 'content' : 'none' }} />
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
              <Radio required value="yes" label="Yes" />
              <Radio required value="no" label="No" />
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
              <Radio required value="yes" label="Yes" />
              <Radio required value="no" label="No" />
            </RadioGroup>
          </Box>
        </FormControl>
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
            <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." required name="PersonalAgreement" />
          </Box>
        </FormControl>
        <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
          <Button name='PersonalSubmit' type='submit' size="sm" onClick={ () => enableTab(1) }>Next</Button>
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
  readonly TwelfthBoard: HTMLInputElement;
  readonly TwelfthSchool: HTMLInputElement;
  readonly TwelfthStream: HTMLInputElement;
  readonly TwelfthPercentage: HTMLInputElement;
}
function AcademicDetails(props: any) {
  const [TenthMarkSheet , setTenthMarkSheet] = React.useState<File | null>(null);
  const [TenthMarkSheetuploadProgress, setTenthMarkSheetUploadProgress] = React.useState(0);
  const [TwelfthMarkSheet , setTwelfthMarkSheet] = React.useState<File | null>(null);
  const [TwelfthMarkSheetuploadProgress, setTwelfthMarkSheetuploadProgress] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    var name:string = event.target.name;
    if (event.target.files && event.target.files.length > 0) {
      switch (event.target.name) {
        case 'TenthMarkSheet':
          setTenthMarkSheet(event.target.files[0]);
          setTenthMarkSheetUploadProgress(0);
          break;
        case 'TwelfthMarkSheet':
          setTwelfthMarkSheet(event.target.files[0]);
          setTwelfthMarkSheetuploadProgress(0);
          break;
        default:
          break;
      }
      setSelectedFile(event.target.files[0]);
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
        default:
          break;
      }
    }, 1000);
  };
  const academicQuesList = [
    {label: 'Exam board was in charge of your 10th-Grade Board Exams', formType:'text', decor: '', id: 'TenthBoard', properties: props.TenthBoard},
    {label: 'Name of the school where you completed your 10th-Grade Board Education', formType:'text', decor: '', id: 'TenthSchool', properties: props.TenthSchool},
    {label: 'Percentage you secured in your 10th-Grade Board Exams', formType:'number', decor: '', id: 'TenthPercentage', properties: props.TenthPercentage},
    {label: 'Exam board was in charge of your 12th-Grade Board Exams', formType:'text', decor: '', id: 'TwelfthBoard', properties: props.TwelfthBoard},
    {label: 'Name of the school where you completed your 12th-Grade Board Education', formType:'text', decor: '', id: 'TwelfthSchool', properties: props.TwelfthSchool},
    {label: 'What stream did you choose for your 12th-Grade?', formType:'text', decor: '', id: 'TwelfthStream', properties: props.TwelfthStream},
    {label: 'Percentage you secured in your 12th-Grade Board Exams', formType:'number', decor: '', id: 'TwelfthPercentage', properties: props.TwelfthPercentage}
  ];
  return (
    <>
    <form  
    onSubmit={(event: React.FormEvent<AcademicFormElement>) => {
          event.preventDefault();
          const data = {
            Diploma: props.Diploma,
            TenthBoard: props.TenthBoard,
            TenthSchool: props.TenthSchool,
            TenthPercentage: props.enthPercentage,
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
                    <Radio required value="yes" label="Yes" />
                    <Radio required value="no" label="No" />
                  </RadioGroup>
                </Box>
              </FormControl>
              <Divider role="presentation" />
              {(() => { if (props.Diploma==='yes')  {
                return (
                  <>
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Diploma Karega BKL</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                  </>
                )
              } else if (props.Diploma==='no') {
                return (
                  <>
                    {
                      academicQuesList.map((ques:any, index:any) => {
                          return <>
                            <Divider role="presentation" />
                            <FormControl  sx={{ display: { sm: 'contents' } }}>
                              <FormLabel>{ques.label}</FormLabel>
                              <Input 
                              type={ques.formType}
                              placeholder=''
                              startDecorator={ques.decor}
                              name={ques.id}
                              required
                              value={ques.properties}
                              onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                            </FormControl>
                            <Divider role="presentation" />
                        </>
                      })
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
                        <input name='TenthMarkSheet' type="file" onChange={handleUpload} className='fileuploadInput' required />
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
                      <input name='TwelfthMarkSheet' type="file" onChange={handleUpload} style={{appearance: 'none'}} required/>
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
                      <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="AcademicAgreement" required/>
                    </Box>
                  </FormControl>
                </>
                )
                }
              })()}
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                <Button type='submit' size="sm" onClick={ () => enableTab(2) }>Next</Button>
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
function CasteDetails(props:any) {
  const [casteCertificate , setcasteCertificate] = React.useState<File | null>(null);
  const [casteCertificateuploadProgress, setcasteCertificateuploadProgress] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setcasteCertificate(event.target.files[0]);
      setcasteCertificateuploadProgress(0);
      setSelectedFile(event.target.files[0]);
      var name:string = event?.target.name;
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
    {label: 'Caste Certificate Number', formType:'text', decor: '', id: 'casteCertificateNumber', properties: props.casteCertificateNumber},
    {label: 'Caste Certificate Issue Date', formType:'date', decor: '', id: 'casteCertificateIssueDate', properties: props.casteCertificateIssueDate},
    {label: 'Caste', formType:'text', decor: '', id: 'caste', properties: props.caste},
    {label: 'Sub-Caste', formType:'text', decor: '', id: 'subCaste', properties: props.subCaste},
  ];
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<CasteFormElement>) => {
        event.preventDefault();
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
              casteQuesList.map((ques:any, index:any) => {
                  return <>
                    <Divider role="presentation" />
                    <FormControl  sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>{ques.label}</FormLabel>
                      <Input 
                      type={ques.formType}
                      placeholder=''
                      defaultValue=''
                      startDecorator={ques.decor}
                      name={ques.id}
                      required
                      value={ques.properties}
                      onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                    </FormControl>
                    <Divider role="presentation" />
                </>
              })
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
                  <input name='casteCertificate' type="file" onChange={handleUpload} style={{appearance: 'none'}} required/>
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
                  <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="casteAgreement" required />
                </Box>
              </FormControl>
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }}>
                <Button type='submit' size="sm" onClick={ () => enableTab(2) }>Next</Button>
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
function IncomeDetails(props:any) {
  const [incomeCertificate , setincomeCertificate] = React.useState<File | null>(null);
  const [incomeCertificateuploadProgress, setincomeCertificateuploadProgress] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setincomeCertificate(event.target.files[0]);
      setincomeCertificateuploadProgress(0);
      setSelectedFile(event.target.files[0]);
      var name:string = event.target.name;
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
    {label: 'What`s your yearly income from the hectares / acres of agricultural land you own in the village?', formType:'number', decor: 'Rs', id: 'incomeAgriculture', properties: props.incomeAgriculture},
    {label: 'What`s your yearly income from your Business?', formType:'number', decor: 'Rs', id: 'incomeBusiness', properties: props.incomeBusiness},
    {label: 'What`s your yearly income from your House Property?', formType:'number', decor: 'Rs', id: 'incomeProperty', properties: props.incomeProperty},
    {label: 'Members your Family Contains?', formType:'text', decor: '', id: 'familyMembers', properties: props.familyMembers},
  ];
  return (
    <>
      <form  
          onSubmit={(event: React.FormEvent<incomeFormElement>) => {
            event.preventDefault();
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
                incomeQuesList.map((ques:any, index:any) => {
                    return <>
                      <Divider role="presentation" />
                      <FormControl  sx={{ display: { sm: 'contents' } }}>
                        <FormLabel>{ques.label}</FormLabel>
                        <Input 
                        type={ques.formType}
                        placeholder=''
                        defaultValue=''
                        startDecorator={ques.decor}
                        name={ques.id}
                        required
                        value={ques.properties}
                        onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                      </FormControl>
                      <Divider role="presentation" />
                  </>
                })
              }
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Total Income of Family</FormLabel>
                <Select defaultValue=" " required name='incomeTotal' value={props.incomeTotal} onChange={(e, newValue) => props.dispatch({type: 'incomeTotal', payload: newValue})}>
                  <Option value="1,00,000">
                    Less Than Rs: 1,00,000
                  </Option>
                  <Option value="1,50,000">
                    Rs: 1,00,000 to Rs: 2,00,000
                  </Option>
                  <Option value="2,50,000">
                    Rs: 2,00,000 to Rs: 3,00,000
                  </Option>
                  <Option value="3,50,000">
                    Rs: 3,00,000 to Rs: 4,00,000
                  </Option>
                  <Option value="4,50,000">
                    Rs: 4,00,000 to Rs: 5,00,000
                  </Option>
                  <Option value="5,50,000">
                    Rs: 5,00,000 to Rs: 6,00,000
                  </Option>
                  <Option value="6,50,000">
                    Rs: 6,00,000 to Rs: 7,00,000
                  </Option>
                  <Option value="7,00,000">
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
                  <input name='incomeCertificate' type="file" onChange={handleUpload} style={{appearance: 'none'}} required/>
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
                  <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="incomeAgreement" required />
                </Box>
              </FormControl>
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }}>
                <Button type='submit' size="sm" onClick={ () => enableTab(2) }>Next</Button>
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
function SamagraDetails(props:any) {
  const [samagraCertificate , setsamagraCertificate] = React.useState<File | null>(null);
  const [samagraCertificateuploadProgress, setsamagraCertificateuploadProgress] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setsamagraCertificate(event.target.files[0]);
      setsamagraCertificateuploadProgress(0);
      setSelectedFile(event.target.files[0]);
      var name:string = event.target.name;
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
    {label: 'Your Samagra ID', formType:'number', decor: '', id: 'PersonalSamagraID', properties: props.PersonalSamagraID},
    {label: 'Family Samagra ID', formType:'number', decor: '', id: 'FamilySamagraID', properties: props.FamilySamagraID},
    {label: 'Name of Head of Family', formType:'text', decor: '', id: 'HeadofFamily', properties: props.HeadofFamily},
    {label: 'Members your Family Contains?', formType:'text', decor: '', id: 'familyMembers', properties: props.familyMembers},
    {label: 'Relationship with Head of Family', formType:'text', decor: '', id: 'RelationnShipHeadofFamily', properties: props.RelationnShipHeadofFamily},
  ];
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<SamagraFormElement>) => {
        event.preventDefault();
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
              samagraQuesList.map((ques:any, index:any) => {
                  return <>
                    <Divider role="presentation" />
                    <FormControl  sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>{ques.label}</FormLabel>
                      <Input 
                      type={ques.formType}
                      placeholder=''
                      defaultValue=''
                      startDecorator={ques.decor}
                      name={ques.id}
                      required
                      value={ques.properties}
                      onChange={(e)=>props.dispatch({type: ques.id, payload: e.target.value})} />
                    </FormControl>
                    <Divider role="presentation" />
                </>
                })
              }
          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Gender of Head of Family</FormLabel>
              <Select defaultValue=" " required name='GenderHeadofFamily' value={props.GenderHeadofFamily} onChange={(e, newValue) => props.dispatch({type: 'GenderHeadofFamily', payload: newValue})} >
              <Option value="female">Female</Option>
              <Option value="male">Male</Option>
              <Option value="transgender">Transgender</Option>
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
              <input name='samagraCertificate' type="file" onChange={handleUpload} style={{appearance: 'none'}} required/>
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
              <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="samagraAgreement"  required />
            </Box>
          </FormControl>
          <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
            <Button name='PersonalSubmit' type='submit' size="sm" onClick={ () => enableTab(4) }>Next</Button>
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
function NativeDetails(props:any) {
  const [nativeCertificate , setnativeCertificate] = React.useState<File | null>(null);
  const [nativeCertificateuploadProgress, setnativeCertificateuploadProgress] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setnativeCertificate(event.target.files[0]);
      setnativeCertificateuploadProgress(0);
      setSelectedFile(event.target.files[0]);
      var name:string =  event.target.name;
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
                  <Radio required value="yes" label="Yes" />
                  <Radio required value="no" label="No" />
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
                  <Radio required value="yes" label="Yes" />
                  <Radio required value="no" label="No" />
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
                <input name='nativeCertificate' type="file" onChange={handleUpload} style={{appearance: 'none'}} required/>
                {/* {selectedFile && (
                  <button name='nativeCertificate' type='button' onClick={()=>handleUpload('nativeCertificate')}>Upload</button>
                )} */}
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
                  <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="nativeAgreement" required />
                </Box>
              </FormControl>
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                <Button name='PersonalSubmit' type='submit' size="sm" onClick={ () => enableTab(5) }>Next</Button>
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
  Orphan: ''
}
function Personalreducer(state:any, action:any) {
  switch (action.type) {
    case 'firstName': return {...state, firstName: action.payload}
    case 'lastName': return {...state, lastName: action.payload}
    case 'fatherName': return {...state, fatherName: action.payload}
    case 'eMail': return {...state, eMail: action.payload}
    case 'contactNumber': return {...state, contactNumber: action.payload}
    case 'dateofBirth': return {...state, dateofBirth: action.payload}
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
    default: throw new Error("Action not Found");
  }
}
const Academicinitstate = {
  Diploma: '',
  TenthBoard: '',
  TenthSchool: '',
  TenthPercentage: '',
  TwelfthBoard: '',
  TwelfthSchool: '',
  TwelfthStream: '',
  TwelfthPercentage: ''
}
function Academicreducer(state:any, action:any) {
  switch (action.type) {
    case 'Diploma': return {...state, Diploma: action.payload}
    case 'TenthBoard': return {...state, TenthBoard: action.payload}
    case 'TenthSchool': return {...state, TenthSchool: action.payload}
    case 'TenthPercentage': return {...state, TenthPercentage: action.payload}
    case 'TwelfthBoard': return {...state, TwelfthBoard: action.payload}
    case 'TwelfthSchool': return {...state, TwelfthSchool: action.payload}
    case 'TwelfthStream': return {...state, TwelfthStream: action.payload}
    case 'TwelfthPercentage': return {...state, TwelfthPercentage: action.payload}
    default: throw new Error("Action not Found");
  }
}
const Casteinitstate = {
  casteCertificateNumber: '',
  casteCertificateIssueDate: '',
  caste: '',
  subCaste: ''
}
function Castereducer(state:any, action:any) {
  switch (action.type) {
    case 'casteCertificateNumber': return {...state, casteCertificateNumber: action.payload}
    case 'casteCertificateIssueDate': return {...state, casteCertificateIssueDate: action.payload}
    case 'caste': return {...state, caste: action.payload}
    case 'subCaste': return {...state, subCaste: action.payload}
    default: throw new Error("Action not Found");
  }
}
const Incomeinitstate = {
  incomeAgriculture: '',
  incomeBusiness: '',
  incomeProperty: '',
  familyMembers: '',
  incomeTotal: ''
}
function Incomereducer(state:any, action:any) {
  switch (action.type) {
    case 'incomeAgriculture': return {...state, incomeAgriculture: action.payload}
    case 'incomeBusiness': return {...state, incomeBusiness: action.payload}
    case 'incomeProperty': return {...state, incomeProperty: action.payload}
    case 'familyMembers': return {...state, familyMembers: action.payload}
    case 'incomeTotal': return {...state, incomeTotal: action.payload}
    default: throw new Error("Action not Found");
  }
}
const Samagrainitstate = {
  PersonalSamagraID: '',
  FamilySamagraID: '',
  HeadofFamily: '',
  RelationnShipHeadofFamily: '',
  GenderHeadofFamily: ''
}
function Samagrareducer(state:any, action:any) {
  switch (action.type) {
    case 'PersonalSamagraID': return {...state, PersonalSamagraID: action.payload}
    case 'FamilySamagraID': return {...state, FamilySamagraID: action.payload}
    case 'HeadofFamily': return {...state, HeadofFamily: action.payload}
    case 'RelationnShipHeadofFamily': return {...state, RelationnShipHeadofFamily: action.payload}
    case 'GenderHeadofFamily': return {...state, GenderHeadofFamily: action.payload}
    default: throw new Error("Action not Found");
  }
}
const Nativeinitstate = {
  nativeBorn: '',
  nativeEducation: ''
}
function Nativereducer(state:any, action:any) {
  switch (action.type) {
    case 'nativeBorn': return {...state, nativeBorn: action.payload}
    case 'nativeEducation': return {...state, nativeEducation: action.payload}
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
        My profile
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'row-reverse',justifySelf: 'flex-end', position: 'absolute', top: 4, right: 15}}>
            <Button  variant="soft" color="neutral" name='PersonalSubmit' type='submit' size="sm" onClick={ () => navigate('/') }>Home</Button>
        </Box>
      </Typography>
      <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
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
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row-reverse',justifySelf: 'flex-end', position: 'absolute', top: 4, right: 15}}>
            <Button  variant="soft" color="neutral" name='PersonalSubmit' type='submit' size="sm" onClick={ () => navigate('/') }>Home</Button>
          </Box>
          <Tab indicatorInset value={0}>
            Personal Details
          </Tab>
          <Tab indicatorInset value={1}>
            Academic Details
          </Tab>
          <Tab indicatorInset value={2}>
            Caste & Composite
          </Tab>
          <Tab indicatorInset value={3}>
            Income Details
          </Tab>
          <Tab indicatorInset value={4}>
            Samagra Details
          </Tab>
          <Tab indicatorInset value={5}>
            Native Declaration
          </Tab>
          <Tab indicatorInset value={6}>
            Profile Review
          </Tab>
        </TabList>
        <PersonalDetails dispatch={Personaldispatch} firstName={Personalstate.firstName} lastName={Personalstate.lastName} fatherName={Personalstate.fatherName} eMail={Personalstate.eMail}
         contactNumber={Personalstate.contactNumber} dateofBirth={Personalstate.dateofBirth} Gender={Personalstate.Gender} Religion={Personalstate.Religion} HouseNo={Personalstate.HouseNo}
         Street={Personalstate.Street} Sector={Personalstate.Sector} City={Personalstate.City} Pincode={Personalstate.Pincode} Area={Personalstate.Area} MaritalStatus={Personalstate.MaritalStatus}
         SpouseName={Personalstate.SpouseName} Disabled={Personalstate.Disabled} Orphan={Personalstate.Orphan}
        />
        <AcademicDetails dispatch={Academicdispatch} Diploma={Academicstate.Diploma} TenthBoard={Academicstate.TenthBoard} TenthSchool={Academicstate.TenthSchool} TenthPercentage={Academicstate.TenthPercentage}
          TwelfthBoard={Academicstate.TwelfthBoard} TwelfthSchool={Academicstate.TwelfthSchool} TwelfthStream={Academicstate.TwelfthStream} TwelfthPercentage={Academicstate.TwelfthPercentage}
        />
        <CasteDetails dispatch={Castedispatch} casteCertificateNumber={Castestate.casteCertificateNumber} casteCertificateIssueDate={Castestate.casteCertificateIssueDate} caste={Castestate.caste} 
          subCaste={Castestate.subCaste} 
        />
        <IncomeDetails dispatch={Incomedispatch} incomeAgriculture={Incomestate.incomeAgriculture} incomeBusiness={Incomestate.incomeBusiness} incomeProperty={Incomestate.incomeProperty}
          familyMembers={Incomestate.familyMembers} incomeTotal={Incomestate.incomeTotal} 
        />
        <SamagraDetails dispatch={Samagradispatch} PersonalSamagraID={Samagrastate.PersonalSamagraID} FamilySamagraID={Samagrastate.FamilySamagraID} HeadofFamily={Samagrastate.HeadofFamily} 
          RelationnShipHeadofFamily={Samagrastate.RelationnShipHeadofFamily} GenderHeadofFamily={Samagrastate.GenderHeadofFamily} 
        />
        <NativeDetails dispatch={Nativedispatch} nativeBorn={Nativestate.nativeBorn} nativeEducation={Nativestate.nativeEducation}
        />  

        <TabPanel value={6}>
          <Box sx={{ pt: 3, pb: 10, display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'minmax(120px, 30%) 1fr', lg: '280px 1fr minmax(120px, 208px)', }, columnGap: { xs: 2, sm: 3, md: 4 }, rowGap: { xs: 2, sm: 2.5 }, '& > hr': { gridColumn: '1/-1', }, }} >

            <Divider role="presentation" />
          </Box>
        </TabPanel>

      </Tabs>
    </Box>
    </CssVarsProvider>
  );
}