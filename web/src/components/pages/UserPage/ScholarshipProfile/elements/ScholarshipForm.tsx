import * as React from 'react';
import {useState, ChangeEvent} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import { Breadcrumbs, Checkbox, Divider, FormControl, FormLabel, Grid } from '@mui/joy';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ShowAlert from '../../../../utils/ShowAlert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useLocation } from 'react-router-dom';


export default function ScholarshipForm() {
  React.useEffect(() => {
    document.title = "Scholarship Application - EduFundr";
    return () => {};
  }, []);
  const location = useLocation();
  const arr = location.state.arrData;

  const [AlertDisplay, setAlertDisplay] = React.useState('none');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [fileLimit, setFileLimit] = useState<boolean>(false);

  const handleUploadFiles = (files: File[]) => {
    const uploaded: File[] = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name == file.name) == -1) {
        uploaded.push(file);
        if (uploaded.length == arr.length) setFileLimit(true);
          if (uploaded.length > arr.length) {
            alert(`You can only add a maximum of ${arr.length} files`);
            setFileLimit(false);
            limitExceeded = true;
            return true;
          }
        }
      });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const chosenFiles = Array.from(e.target.files);
      handleUploadFiles(chosenFiles);
    }
  };

  return (
    <Stack spacing={2} sx={{
      mt: {xs: 1, lg: 1},
      width: {xs: '90%', lg: '80%'}
    }}>
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
            Scholarship Data
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
          {location.state.title} Application 
          </Typography>
        </Breadcrumbs>
      </Box>
        <Box sx={{ml: 1}}>
          <Typography level="h1" fontSize="xl3">
            Scholarship Application
          </Typography>
          <form  
            onSubmit={(event:any) => {
            event.preventDefault();
            const data = {
              Files: uploadedFiles,
            };
            if (uploadedFiles.length != arr.length) {
              setAlertDisplay('flex')
            } else {
              setAlertDisplay('none')
              alert(JSON.stringify(data, null, 2));
            }
            
          }}>
            <Box
            sx={{
                pt: 3,
                pb: 10,
                display: 'grid',
                gridTemplateColumns: {
                xs: '100%',
                sm: 'minmax(120px, 30%) 1fr',
                lg: '80%',
                },
                columnGap: { xs: 2, sm: 3, md: 4 },
                rowGap: { xs: 2, sm: 2.5 },
                '& > hr': {
                gridColumn: '1/-1',
                },
            }}
            >
              <List>
                <ListSubheader>Upload Following Documents</ListSubheader>
                  <ListItem nested key={1}>
                      <List>
                        {arr.map((__:any, index:any) => (
                          <ListItem key={index}>
                          <ListItemButton><ArrowRightIcon/>{arr[index]}</ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                  </ListItem>
              </List>
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
                  <Button component="label" variant="plain" disabled={(!fileLimit) ? true: false} >Choose PDF File
                      <input
                        id="fileUpload"
                        type="file"
                        multiple
                        accept="application/pdf"
                        onChange={handleFileEvent}
                        disabled={fileLimit}
                        required
                        style={{opacity: '0',position: 'absolute'}} 
                      />
                  </Button>
                  <div className="uploaded-files-list">
                    {uploadedFiles.map((file) => (
                        <div key={file.name}>{file.name}</div>
                      ))}
                    </div>
                  </Typography>
              </Card>
              <Divider role="presentation" sx={{ display:AlertDisplay }} />
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
                <Checkbox size="sm" label="I acknowledge that the information provided above is accurate and true to the best of my knowledge." required name="Agreement"/>
                 
              </Box>
              </FormControl>
              <Box sx={{ gridColumn: '1/-1', justifySelf: 'flex-end', display: 'flex', gap: 1, }} >
                <Button name='PersonalSubmit' type='submit' size="sm" >Submit</Button>
              </Box>
              <ShowAlert title="Please Upload All Documents!" display={AlertDisplay}/>
            </Box>
          </form>
        </Box>
      </Box>
    </Stack>
  );
}