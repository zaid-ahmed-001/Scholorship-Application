import * as React from 'react';
import { useEffect } from "react";
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

interface SignUPFormElement extends HTMLFormElement {
  readonly elements: PersonlForm;
}
// var ProfileDetails:any = [
//   {firstName: ''},
//   {lastName: ''},
//   {fatherName: ''},
//   {eMail: ''},
//   {contactNumber: ''},
//   {dateofBirth: ''},
//   {gender: ''},
//   {religion: ''},
//   {country: ''},
//   {Address:  
//     {HouseNo: '', Street: '', Sector: '', City: '', Pincode: '', Area: ''},
//   },
//   {MaritalStatus: ''},
//   {SpouseName: ''},
//   {Disabled: ''},
//   {Orphan: ''},
//   {Agreement: ''},
// ]

export default function SignUp() {
  const [Area, setArea] = React.useState('');
  const [Orphan, setOrphan] = React.useState('');
  const [Disabled, setDisabled] = React.useState('');
  const [Diploma, setDiploma] = React.useState('');
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');
  const [fatherName, setfatherName] = React.useState('');
  const [eMail, seteMail] = React.useState('');
  const [contactNumber, setcontactNumber] = React.useState('');
  const [dateofBirth, setdateofBirth] = React.useState('');
  const [SpouseName, setSpouseName] = React.useState('');
  const [HouseNo, setHouseNo] = React.useState('');
  const [Street, setStreet] = React.useState('');
  const [Sector, setSector] = React.useState('');
  const [City, setCity] = React.useState('');
  const [Pincode, setPincode] = React.useState('');
  const [Gender, setGender] = React.useState();
  const [Religion, setReligion] = React.useState();
  const [MaritalStatus, setMaritalStatus] = React.useState();
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
  const handleChangeDiploma = (event: React.ChangeEvent<HTMLInputElement>) => {setDiploma(event.target.value);};
  const handleChangeGender = (val: any) => {setGender(val);};
  const handleChangeReligion = (val: any) => {setReligion(val);};
  const handleChangeMaritalStatus = (val: any) => {setMaritalStatus(val);};

  function enableTab(index:number) {
    console.log('check data for ', index)
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
        My profile
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
        <form  
              onSubmit={(event: React.FormEvent<SignUPFormElement>) => {
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
                  SpouseName: PersonlForm.SpouseName.value,
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
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel></FormLabel>
                <Input
                  type="text"
                  name="SpouseName"
                  placeholder="Spouse's Name"
                  value={SpouseName}
                  onChange={handleChangeSpouseName}
                />
              </FormControl>
              <Divider role="presentation" />
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
              <Box
                sx={{
                  gridColumn: '1/-1',
                  justifySelf: 'flex-end',
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Button type='submit' size="sm" onClick={ () => enableTab(1) }>Next</Button>
              </Box>
            </Box>
          </TabPanel>
          </form>



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
                  <Input placeholder="" />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Caste Certificate Issue Date</FormLabel>
                  <Input
                    type="date"
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Caste</FormLabel>
                  <Input placeholder=""/>
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Sub-Caste</FormLabel>
                  <Input placeholder="" />
                </FormControl>
                <Divider role="presentation" />
                <FormLabel>Upload Caste Certificate</FormLabel>
                <Stack useFlexGap spacing={1.5}>
                  <DropZone />
                    <FileUpload
                      fileName="CasteCertificate.pdf"
                      fileSize="200 KB"
                      progress={100}
                    />
                </Stack>
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
                    <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="persistent" />
                  </Box>
                </FormControl>
              </Box>
          </TabPanel>
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
                    type='text'
                    startDecorator={'Rs'}
                    placeholder=""
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>What's your yearly income from your Business?</FormLabel>
                  <Input 
                    type='text'
                    startDecorator={'Rs'}
                    placeholder=""
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>What's your yearly income from your House Property?</FormLabel>
                  <Input 
                    type='text'
                    startDecorator={'Rs'}
                    placeholder=""
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Members your Family Contains?</FormLabel>
                  <Input 
                    type='text'
                    placeholder="Member1, Member2..."
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Total Income of Family</FormLabel>
                  <Select defaultValue=" ">
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
                  <Stack useFlexGap spacing={1.5}>
                    <DropZone />
                      <FileUpload
                        fileName="IncomeCertificate.pdf"
                        fileSize="200 KB"
                        progress={100}
                      />
                  </Stack>
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
                    <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="persistent" />
                  </Box>
                </FormControl>
              </Box>
          </TabPanel>
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
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Family Samagra ID</FormLabel>
                  <Input 
                    type='number'
                    placeholder=""
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Name of Head of Family</FormLabel>
                  <Input 
                    type='text'
                    placeholder=""
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Gender of Head of Family</FormLabel>
                    <Select defaultValue=" ">
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
                  />
                </FormControl>
                <Divider role="presentation" />
                <FormLabel>Upload Samagra ID</FormLabel>
                  <Stack useFlexGap spacing={1.5}>
                    <DropZone />
                      <FileUpload
                        fileName="SamagraID.pdf"
                        fileSize="200 KB"
                        progress={100}
                      />
                  </Stack>
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
                    <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="persistent" />
                  </Box>
                </FormControl>
              </Box>
          </TabPanel>

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
                      name="controlled-radio-buttons-group"
                      value={Orphan}
                      orientation="horizontal"
                      onChange={handleChangeDisabled}
                      sx={{ my: 1 }}
                    >
                    <Radio value="yes" label="Yes" />
                    <Radio value="no" label="No" />
                  </RadioGroup>
                </Box>
              </FormControl>
              <Divider role="presentation" />
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel >Have you received continuous education for atleast three years in any educational institute located in Madhya Pradesh? (Provision of education will not apply to disable candidates)</FormLabel>
                <Box sx={{ display: { xs: 'contents', sm: 'flex', flexDirection: 'column'  }, gap: 2 }}>
                  <RadioGroup
                      name="controlled-radio-buttons-group"
                      value={Orphan}
                      orientation="horizontal"
                      onChange={handleChangeDisabled}
                      sx={{ my: 1 }}
                    >
                    <Radio value="yes" label="Yes" />
                    <Radio value="no" label="No" />
                  </RadioGroup>
                </Box>
              </FormControl>
              <Divider role="presentation" />
                <FormLabel>Upload Domicile Certificate</FormLabel>
                  <Stack useFlexGap spacing={1.5}>
                    <DropZone />
                      <FileUpload
                        fileName="DomicileCertificate.pdf"
                        fileSize="200 KB"
                        progress={100}
                      />
                  </Stack>
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
                    <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="persistent" />
                  </Box>
                </FormControl>
            </Box>
          </TabPanel>

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
                      <Radio value="yes" label="Yes" />
                      <Radio value="no" label="No" />
                    </RadioGroup>
                  </Box>
                </FormControl>
                <Divider role="presentation" />
                {(Diploma==='yes') ? (
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
                ) : (
                  <>
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Exam board was in charge of your <br/> 10th-Grade Board Exams</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Name of the school where you completed your 10th-Grade Board Education</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Percentage you secured in your <br/> 10th-Grade Board Exams</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Exam board was in charge of your <br/> 12th-Grade Board Exams</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Name of the school where you completed your 12th-Grade Board Education</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>What stream did you choose for your <br/> 12th-Grade?</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormControl sx={{ display: { sm: 'contents' } }}>
                      <FormLabel>Percentage you secured in your <br/> 12th-Grade Board Exams</FormLabel>
                      <Input 
                        type='text'
                        placeholder=""
                      />
                    </FormControl>
                    <Divider role="presentation" />
                    <FormLabel>Upload 10th Class MarkSheet</FormLabel>
                      <Stack useFlexGap spacing={1.5}>
                        <DropZone />
                          <FileUpload
                            fileName="10thMarkSheet.pdf"
                            fileSize="200 KB"
                            progress={100}
                          />
                      </Stack>
                    <Divider role="presentation" />
                    <FormLabel>Upload 12th Class MarkSheet</FormLabel>
                      <Stack useFlexGap spacing={1.5}>
                        <DropZone />
                          <FileUpload
                            fileName="12thMarkSheet.pdf"
                            fileSize="200 KB"
                            progress={100}
                          />
                    </Stack>
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
                        <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." name="persistent" />
                      </Box>
                    </FormControl>
                  </>
                )}
                
            </Box>
          </TabPanel>
          
      </Tabs>
    </Box>
    </CssVarsProvider>
  );
}
