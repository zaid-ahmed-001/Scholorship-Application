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
  readonly elements: PersonlForm;
}
interface PersonlForm extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  fatherName: HTMLInputElement;
  eMail: HTMLInputElement;
  contactNumber: HTMLInputElement;
  dateofBirth: HTMLInputElement;
  gender: HTMLInputElement;
  religion: HTMLInputElement;
  country: HTMLInputElement;
  MaritalStatus: HTMLInputElement;
  SpouseName: HTMLInputElement;
  Disabled: HTMLInputElement;
  Orphan: HTMLInputElement;
  PersonalAgreement: HTMLInputElement;
}
function PersonalDetails() {
  const [Area, setArea] = useState('');
  const [Orphan, setOrphan] = useState('');
  const [Disabled, setDisabled] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [eMail, seteMail] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [dateofBirth, setdateofBirth] = useState('');
  const [SpouseName, setSpouseName] = useState('');
  const [HouseNo, setHouseNo] = useState('');
  const [Street, setStreet] = useState('');
  const [Sector, setSector] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Gender, setGender] = useState();
  const [Religion, setReligion] = useState();
  const [MaritalStatus, setMaritalStatus] = useState();
  const handleChangeHouseNo = (event: React.ChangeEvent<HTMLInputElement>) => {setHouseNo(event.target.value);};
  const handleChangeStreet = (event: React.ChangeEvent<HTMLInputElement>) => {setStreet(event.target.value);};
  const handleChangeSector = (event: React.ChangeEvent<HTMLInputElement>) => {setSector(event.target.value);};
  const handleChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {setCity(event.target.value);};
  const handleChangePincode = (event: React.ChangeEvent<HTMLInputElement>) => {setPincode(event.target.value);};
  const handleChangefirstName = (event: React.ChangeEvent<HTMLInputElement>) => {setfirstName(event.target.value);};
  const handleChangelastName = (event: React.ChangeEvent<HTMLInputElement>) => {setlastName(event.target.value);};
  const handleChangefatherName = (event: React.ChangeEvent<HTMLInputElement>) => {setfatherName(event.target.value);};
  const handleChangeeMail = (event: React.ChangeEvent<HTMLInputElement>) => {seteMail(event.target.value);};
  const handleChangecontactNumber = (event: React.ChangeEvent<HTMLInputElement>) => {setcontactNumber(event.target.value);};
  const handleChangedateofBirth = (event: React.ChangeEvent<HTMLInputElement>) => {setdateofBirth(event.target.value);};
  const handleChangeSpouseName = (event: React.ChangeEvent<HTMLInputElement>) => {setSpouseName(event.target.value);};
  const handleChangeArea = (event: React.ChangeEvent<HTMLInputElement>) => {setArea(event.target.value);};
  const handleChangeDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {setOrphan(event.target.value);};
  const handleChangeOrphan = (event: React.ChangeEvent<HTMLInputElement>) => {setDisabled(event.target.value);};
  const handleChangeGender = (val: any) => {setGender(val);};
  const handleChangeReligion = (val: any) => {setReligion(val);};
  const handleChangeMaritalStatus = (val: any) => {setMaritalStatus(val);};
  return (
    <form  
    name='PersonalSubmit'
    onSubmit={(event: React.FormEvent<PersonlFormElement>) => {
          event.preventDefault();
          const PersonlForm = event.currentTarget.elements;
          const data = {
            firstName: PersonlForm.firstName.value,
            lastName: PersonlForm.lastName.value,
            fatherName: PersonlForm.fatherName.value,
            eMail: PersonlForm.eMail.value,
            contactNumber: PersonlForm.contactNumber.value,
            dateofBirth: PersonlForm.dateofBirth.value,
            gender: Gender,
            country: PersonlForm.country.value,
            religion: Religion,
            MaritalStatus: MaritalStatus,
            SpouseName: {SpouseName},
            Disabled: PersonlForm.Disabled.value,
            Orphan: PersonlForm.Orphan.value,
            Agreement: PersonlForm.PersonalAgreement.checked,
          };
          alert(JSON.stringify(data, null, 2));
        }}>
    <TabPanel value={0}>
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
        <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }} >Name</FormLabel>
        <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
          <FormControl  sx={{ flex: 1 }} >
            <FormLabel sx={{ display: { sm: 'none' } }}>First name</FormLabel>
            <Input placeholder="" name="firstName" required value={firstName} onChange={handleChangefirstName} />
          </FormControl>
          <FormControl  sx={{ flex: 1 }}>
            <FormLabel sx={{ display: { sm: 'none' } }}>Last name</FormLabel>
            <Input placeholder="" name="lastName" required value={lastName} onChange={handleChangelastName} />
          </FormControl>
        </Box>
        <Divider role="presentation" />
        <FormControl  sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Father's Name</FormLabel>
          <Input placeholder="" name="fatherName" required value={fatherName} onChange={handleChangefatherName} />
        </FormControl>
        <Divider role="presentation" />
        <FormControl  sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            startDecorator={<i data-feather="mail" />}
            placeholder=" "
            name="eMail"
            value={eMail}
            onChange={handleChangeeMail}
            required
          />
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="number"
            startDecorator={'+91'}
            placeholder=" "
            name="contactNumber"
            required
            value={contactNumber}
            onChange={handleChangecontactNumber}
          />
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            name="dateofBirth"
            required
            value={dateofBirth}
            onChange={handleChangedateofBirth}
          />
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Gender</FormLabel>
          <Select id="gender" name="gender" required value={Gender} onChange={(e, newValue) => handleChangeGender(newValue)}>
            <Option value="female">
              Female
            </Option>
            <Option value="male">
              Male
            </Option>
            <Option value="transgender">
              Transgender
            </Option>
          </Select>
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel>Religion</FormLabel>
          <Select defaultValue="" name="religion" required value={Religion} onChange={(e, newValue) => handleChangeReligion(newValue)}>
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
              <Input name="HouseNo" required placeholder="House No. / Building" value={HouseNo} onChange={(handleChangeHouseNo)} />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <Input name="Street" required placeholder="Street / Locality"  value={Street} onChange={handleChangeStreet} />
            </FormControl>
          </Box>
          <Divider />
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}></FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <Input name="Sector" required placeholder="Area / Complex / Sector" value={Sector} onChange={handleChangeSector} />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <Input name="City" required placeholder="Town / City / Village" value={City} onChange={handleChangeCity} />
            </FormControl>
          </Box>
          <Divider />
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}></FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <Input type='number' name="Pincode" required placeholder="Pincode" value={Pincode} onChange={handleChangePincode} />
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
                value={Area}
                orientation="horizontal"
                onChange={handleChangeArea}
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
          <Select defaultValue="" name="MaritalStatus" required value={MaritalStatus} onChange={(e, newValue) => handleChangeMaritalStatus(newValue)}>
            <Option value="single">
              Single
            </Option>
            <Option value="married">
              Married
            </Option>
            <Option value="divorced">
              Divorced
            </Option>
            <Option value="widow">
              Widow
            </Option>
            <Option value="widower">
              Widower
            </Option>
          </Select>
        </FormControl>
        <Divider role="presentation" />
        <FormControl sx={{ display: (MaritalStatus == 'married') ? 'contents' : 'none'  } }>
          <FormLabel></FormLabel>
          <Input
            type="text"
            name="SpouseName"
            placeholder="Spouse's Name"
            value={SpouseName}
            onChange={handleChangeSpouseName}
          />
        </FormControl>
        <Divider role="presentation" sx={{ display: (MaritalStatus == 'married') ? 'content' : 'none' }} />
        <FormControl sx={{ display: { sm: 'contents' } }}>
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Do you identify as a person with a disability?</FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>Do you identify as a person with a disability?</FormLabel>
            <RadioGroup
                value={Disabled}
                orientation="horizontal"
                onChange={handleChangeOrphan}
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
                value={Orphan}
                orientation="horizontal"
                onChange={handleChangeDisabled}
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
  readonly elements: AcademicForm;
}
interface AcademicForm extends HTMLFormControlsCollection {
  Diploma: HTMLInputElement;
  TenthBoard: HTMLInputElement;
  TenthSchool: HTMLInputElement;
  TenthPercentage: HTMLInputElement;
  TwelfthBoard: HTMLInputElement;
  TwelfthSchool: HTMLInputElement;
  TwelfthStream: HTMLInputElement;
  TwelfthPercentage: HTMLInputElement;
}
function AcademicDetails() {
  const [Diploma, setDiploma] = React.useState('');
  const [TenthBoard , setTenthBoard] = React.useState('');
  const [TenthSchool , setTenthSchool] = React.useState('');
  const [TenthPercentage , setTenthPercentage] = React.useState('');
  const [TwelfthBoard , setTwelfthBoard] = React.useState('');
  const [TwelfthSchool , setTwelfthSchool] = React.useState('');
  const [TwelfthStream , setTwelfthStream] = React.useState('');
  const [TwelfthPercentage , setTwelfthPercentage] = React.useState('');
  const handleChangeTenthBoard = (event: React.ChangeEvent<HTMLInputElement>) => {setTenthBoard(event.target.value);};
  const handleChangeTenthSchool = (event: React.ChangeEvent<HTMLInputElement>) => {setTenthSchool(event.target.value);};
  const handleChangeTenthPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {setTenthPercentage(event.target.value);};
  const handleChangeTwelfthBoard = (event: React.ChangeEvent<HTMLInputElement>) => {setTwelfthBoard(event.target.value);};
  const handleChangeTwelfthSchool = (event: React.ChangeEvent<HTMLInputElement>) => {setTwelfthSchool(event.target.value);};
  const handleChangeTwelfthStream = (event: React.ChangeEvent<HTMLInputElement>) => {setTwelfthStream(event.target.value);};
  const handleChangeTwelfthPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {setTwelfthPercentage(event.target.value);};
  const handleChangeDiploma = (event: React.ChangeEvent<HTMLInputElement>) => {setDiploma(event.target.value);};
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
  return (
    <>
    <form  
    onSubmit={(event: React.FormEvent<AcademicFormElement>) => {
          event.preventDefault();
          const data = {
            Diploma: {Diploma},
            TenthBoard: {TenthBoard},
            TenthSchool: {TenthSchool},
            TenthPercentage: {TenthPercentage},
            TwelfthBoard: {TwelfthBoard},
            TwelfthSchool: {TwelfthSchool},
            TwelfthStream: {TwelfthStream},
            TwelfthPercentage: {TwelfthPercentage}
          };
          alert(JSON.stringify(data, null, 2));
        }}>
      <TabPanel value={1}>
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
                      name="controlled-radio-buttons-group"
                      value={Diploma}
                      orientation="horizontal"
                      onChange={handleChangeDiploma}
                      sx={{ my: 1 }}
                    >
                    <Radio required value="yes" label="Yes" />
                    <Radio required value="no" label="No" />
                  </RadioGroup>
                </Box>
              </FormControl>
              <Divider role="presentation" />
              {(() => { if (Diploma==='yes')  {
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
              } else if (Diploma==='no') {
                return (
                  <>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Exam board was in charge of your <br/> 10th-Grade Board Exams</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TenthBoard}
                      onChange={handleChangeTenthBoard}
                    />
                  </FormControl>
                  <Divider role="presentation" />
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Name of the school where you completed your 10th-Grade Board Education</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TenthSchool}
                      onChange={handleChangeTenthSchool}
                    />
                  </FormControl>
                  <Divider role="presentation" />
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Percentage you secured in your <br/> 10th-Grade Board Exams</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TenthPercentage}
                      onChange={handleChangeTenthPercentage}
                    />
                  </FormControl>
                  <Divider role="presentation" />
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Exam board was in charge of your <br/> 12th-Grade Board Exams</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TwelfthBoard}
                      onChange={handleChangeTwelfthBoard}
                    />
                  </FormControl>
                  <Divider role="presentation" />
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Name of the school where you completed your 12th-Grade Board Education</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TwelfthSchool}
                      onChange={handleChangeTwelfthSchool}
                    />
                  </FormControl>
                  <Divider role="presentation" />
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>What stream did you choose for your <br/> 12th-Grade?</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TwelfthStream}
                      onChange={handleChangeTwelfthStream}
                    />
                  </FormControl>
                  <Divider role="presentation" />
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Percentage you secured in your <br/> 12th-Grade Board Exams</FormLabel>
                    <Input 
                      type='text'
                      placeholder=""
                      required
                      value={TwelfthPercentage}
                      onChange={handleChangeTwelfthPercentage}
                    />
                  </FormControl>
                  <Divider role="presentation" />
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
              <Box
                sx={{
                  gridColumn: '1/-1',
                  justifySelf: 'flex-end',
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Button type='submit' size="sm" onClick={ () => enableTab(2) }>Next</Button>
              </Box>
          </Box>
        </TabPanel>
      </form>
    </>
  )
}

interface CasteFormElement extends HTMLFormElement {
  readonly elements: CasteForm;
}
interface CasteForm extends HTMLFormControlsCollection {
  casteCertificateNumber: HTMLInputElement;
  casteCertificateIssueDate: HTMLInputElement;
  caste: HTMLInputElement;
  subCaste: HTMLInputElement;
}
function CasteDetails() {
  const [casteCertificateNumber , setcasteCertificateNumber] = React.useState('');
  const [casteCertificateIssueDate , setcasteCertificateIssueDate] = React.useState('');
  const [caste , setcaste] = React.useState('');
  const [subCaste , setsubCaste] = React.useState('');
  const handlecasteCertificateNumber = (event: React.ChangeEvent<HTMLInputElement>) => {setcasteCertificateNumber(event.target.value);};
  const handlecasteCertificateIssueDate = (event: React.ChangeEvent<HTMLInputElement>) => {setcasteCertificateIssueDate(event.target.value);};
  const handlecaste = (event: React.ChangeEvent<HTMLInputElement>) => {setcaste(event.target.value);};
  const handlesubCaste = (event: React.ChangeEvent<HTMLInputElement>) => {setsubCaste(event.target.value);};
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
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<CasteFormElement>) => {
        event.preventDefault();
        const data = {
          casteCertificateNumber: {casteCertificateNumber},
          casteCertificateIssueDate: {casteCertificateIssueDate},
          caste: {caste},
          subCaste: {subCaste}
        };
        alert(JSON.stringify(data, null, 2));
      }}>
        <TabPanel value={2}>
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
                <FormLabel>Caste Certificate Number</FormLabel>
                <Input placeholder="" required name='casteCertificateNumber' value={casteCertificateNumber} onChange={handlecasteCertificateNumber} />
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Caste Certificate Issue Date</FormLabel>
                <Input
                  type="date"
                  required name='casteCertificateIssueDate' value={casteCertificateIssueDate} onChange={handlecasteCertificateIssueDate}
                />
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Caste</FormLabel>
                <Input placeholder="" required name='caste' value={caste} onChange={handlecaste}/>
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Sub-Caste</FormLabel>
                <Input placeholder="" required name='subCaste' value={subCaste} onChange={handlesubCaste}/>
              </FormControl>

              <Divider role="presentation" />
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
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
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
  readonly elements: incomeForm;
}
interface incomeForm extends HTMLFormControlsCollection {
  incomeAgriculture: HTMLInputElement;
  incomeBusiness: HTMLInputElement;
  incomeProperty: HTMLInputElement;
  familyMembers: HTMLInputElement;
  incomeTotal: HTMLInputElement;
}
function IncomeDetails() {
  const [incomeAgriculture , setincomeAgriculture] = React.useState('');
  const [incomeBusiness , setincomeBusiness] = React.useState('');
  const [incomeProperty , setincomeProperty] = React.useState('');
  const [familyMembers , setfamilyMembers] = React.useState('');
  const [incomeTotal , setincomeTotal] = React.useState();
  const handleincomeAgriculture = (event: React.ChangeEvent<HTMLInputElement>) => {setincomeAgriculture(event.target.value);};
  const handleincomeBusiness = (event: React.ChangeEvent<HTMLInputElement>) => {setincomeBusiness(event.target.value);};
  const handleincomeProperty = (event: React.ChangeEvent<HTMLInputElement>) => {setincomeProperty(event.target.value);};
  const handlefamilyMembers = (event: React.ChangeEvent<HTMLInputElement>) => {setfamilyMembers(event.target.value);};
  const handleincomeTotal = (val: any) => {setincomeTotal(val);};
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
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<incomeFormElement>) => {
        event.preventDefault();
        const data = {
          incomeAgriculture: {incomeAgriculture},
          incomeBusiness: {incomeBusiness},
          incomeProperty: {incomeProperty},
          familyMembers: {familyMembers},
          incomeTotal: {incomeTotal}
        };
        alert(JSON.stringify(data, null, 2));
      }}>
      <TabPanel value={3}>
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
                <FormLabel>What's your yearly income from the hectares / acres of agricultural land you own in the village?</FormLabel>
                <Input 
                  type='number'
                  startDecorator={'Rs'}
                  placeholder=""
                  required
                  name='incomeAgriculture'
                  value={incomeAgriculture}
                  onChange={handleincomeAgriculture}
                />
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>What's your yearly income from your Business?</FormLabel>
                <Input 
                  type='number'
                  startDecorator={'Rs'}
                  placeholder=""
                  required
                  name='incomeBusiness'
                  value={incomeBusiness}
                  onChange={handleincomeBusiness}
                />
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>What's your yearly income from your House Property?</FormLabel>
                <Input 
                  type='number'
                  startDecorator={'Rs'}
                  placeholder=""
                  required
                  name='incomeProperty'
                  value={incomeProperty}
                  onChange={handleincomeProperty}
                />
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Members your Family Contains?</FormLabel>
                <Input 
                  type='text'
                  placeholder="Member1, Member2..."
                  required
                  name='familyMembers'
                  value={familyMembers}
                  onChange={handlefamilyMembers}
                />
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Total Income of Family</FormLabel>
                <Select defaultValue=" " required name='incomeTotal' value={incomeTotal} onChange={(e, newValue) => handleincomeTotal(newValue)}>
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
                  {/* {selectedFile && (
                    <button name='incomeCertificate' type='button' onClick={()=>handleUpload('incomeCertificate')}>Upload</button>
                  )} */}
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
  readonly elements: SamagraForm;
}
interface SamagraForm extends HTMLFormControlsCollection {
  PersonalSamagraID: HTMLInputElement;
  FamilySamagraID: HTMLInputElement;
  HeadofFamily: HTMLInputElement;
  RelationnShipHeadofFamily: HTMLInputElement;
  GenderHeadofFamily: HTMLInputElement;
}
function SamagraDetails() {
  const [PersonalSamagraID , setPersonalSamagraID] = React.useState('');
  const [FamilySamagraID , setFamilySamagraID] = React.useState('');
  const [HeadofFamily , setHeadofFamily] = React.useState('');
  const [RelationnShipHeadofFamily , setRelationnShipHeadofFamily] = React.useState('');
  const [GenderHeadofFamily , setGenderHeadofFamily] = React.useState();
  const handlePersonalSamagraID = (event: React.ChangeEvent<HTMLInputElement>) => {setPersonalSamagraID(event.target.value);};
  const handleFamilySamagraID = (event: React.ChangeEvent<HTMLInputElement>) => {setFamilySamagraID(event.target.value);};
  const handleHeadofFamily = (event: React.ChangeEvent<HTMLInputElement>) => {setHeadofFamily(event.target.value);};
  const handleRelationnShipHeadofFamily = (event: React.ChangeEvent<HTMLInputElement>) => {setRelationnShipHeadofFamily(event.target.value);};
  const handleGenderHeadofFamily = (val: any) => {setGenderHeadofFamily(val);};
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
  return (
    <>
      <form  
      onSubmit={(event: React.FormEvent<SamagraFormElement>) => {
        event.preventDefault();
        const data = {
          PersonalSamagraID: {PersonalSamagraID},
          FamilySamagraID: {FamilySamagraID},
          HeadofFamily: {HeadofFamily},
          RelationnShipHeadofFamily: {RelationnShipHeadofFamily},
          GenderHeadofFamily: {GenderHeadofFamily}
        };
        alert(JSON.stringify(data, null, 2));
      }}>
      <TabPanel value={4}>
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
            <FormLabel>Your Samagra ID</FormLabel>
            <Input 
              type='number'
              placeholder=""
              name='PersonalSamagraID'
              required
              value={PersonalSamagraID}
              onChange={handlePersonalSamagraID}
            />
          </FormControl>
          <Divider role="presentation" />
          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Family Samagra ID</FormLabel>
            <Input 
              type='number'
              placeholder=""
              name='FamilySamagraID'
              required
              value={FamilySamagraID}
              onChange={handleFamilySamagraID}
            />
          </FormControl>
          <Divider role="presentation" />
          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Name of Head of Family</FormLabel>
            <Input 
              type='text'
              placeholder=""
              name='HeadofFamily'
              required
              value={HeadofFamily}
              onChange={handleHeadofFamily}
            />
          </FormControl>
          <Divider role="presentation" />
          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Gender of Head of Family</FormLabel>
              <Select defaultValue=" " required name='GenderHeadofFamily' value={GenderHeadofFamily} onChange={(e, newValue) => handleGenderHeadofFamily(newValue)}>
              <Option value="female">
                Female
              </Option>
              <Option value="male">
                Male
              </Option>
              <Option value="transgender">
                Transgender
              </Option>
            </Select>
          </FormControl>
          <Divider role="presentation" />
          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Relationship with Head of Family</FormLabel>
            <Input 
              type='text'
              placeholder=""
              name='RelationnShipHeadofFamily'
              required
              value={RelationnShipHeadofFamily}
              onChange={handleRelationnShipHeadofFamily}
            />
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
  readonly elements: NativeForm;
}
interface NativeForm extends HTMLFormControlsCollection {
  nativeBorn: HTMLInputElement;
  nativeEducation: HTMLInputElement;
}
function NativeDetails() {
  const [nativeBorn, setnativeBorn] = React.useState('');
  const [nativeEducation, setnativeEducation] = React.useState('');
  const handlenativeBorn = (event:  React.ChangeEvent<HTMLInputElement>) => {setnativeBorn(event?.target.value);}
  const handlenativeEducation = (event: React.ChangeEvent<HTMLInputElement>) => {setnativeEducation(event.target.value);}
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
          nativeBorn: {nativeBorn},
          nativeEducation: {nativeEducation}
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
                    value={nativeBorn}
                    onChange={handlenativeBorn}
                  >
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
                    value={nativeEducation}
                    onChange={handlenativeEducation}
                  >
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
export default function SignUp() {
  const navigate = useNavigate();
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
        <PersonalDetails />
        <AcademicDetails />
        <CasteDetails />
        <IncomeDetails />
        <SamagraDetails />
        <NativeDetails />  

        {/* <TabPanel value={6}>
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
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }} >Name</FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
             
            <Divider role="presentation" />
          </Box>
        </TabPanel> */}

      </Tabs>
    </Box>
    </CssVarsProvider>
  );
}
