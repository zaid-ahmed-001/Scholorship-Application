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

export default function EditAcademicDetails(props: any) {
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
              Academic Details
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ml: 1}}>
        <Typography level="h1" fontSize="xl3">
            Academic Details
        </Typography>
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
              </form>
            </Box>
        </Box>    
    </>
    )
}
  