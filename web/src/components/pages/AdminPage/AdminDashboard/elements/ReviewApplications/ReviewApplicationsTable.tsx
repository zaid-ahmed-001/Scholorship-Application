/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
// icons
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate } from 'react-router-dom';

export default function ReviewApplicationsTable() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedScholarship, setSelectedScholarship] = React.useState('All');
  const [selectedScholarshipStatus, setSelectedScholarshipStatus] = React.useState('All');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = React.useState('All');

  const data:any = [
    {enrollmentNumber: '0863CS221189', studentName: 'Zaid Ahmed', Semester: 3, ApplyDate: '2023/12/13', scholarshipStatus: 'Approved', PaymentStatus: 'Approved', PaidDate: '2024/12/15',
    Amount: '26000', ViewProfile: 'View Doc...', scholarship: 'Anandam Scholarship Viddhya'},
    {enrollmentNumber: '0863CS221169', studentName: 'Shashank Mishra', Semester: 3, ApplyDate: '2023/08/13', scholarshipStatus: 'InProcess', PaymentStatus: 'Rejected', PaidDate: '',
    Amount: '23500', ViewProfile: 'View Doc...', scholarship: 'Chavi Jain Scholarship'},
  ];

  const filteredData = data.filter((item: any) => {
    const enrollmentNumber = item.enrollmentNumber.toLowerCase();
    const studentName = item.studentName.toLowerCase();
    const searchQueryMatch = enrollmentNumber.includes(searchQuery.toLowerCase()) || studentName.includes(searchQuery.toLowerCase());
    const scholarshipMatch = selectedScholarship === 'All' || item.scholarship === selectedScholarship;
    const scholarshipStatusMatch = selectedScholarshipStatus === 'All' || item.scholarshipStatus === selectedScholarshipStatus;
    const paymentStatusMatch = selectedPaymentStatus === 'All' || item.PaymentStatus === selectedPaymentStatus;

    return searchQueryMatch && scholarshipMatch && scholarshipStatusMatch && paymentStatusMatch;
  });

  type ScholarshipStatus = 'Approved' | 'InProcess' | 'Rejected';

  const iconMap: Record<ScholarshipStatus, JSX.Element> = {
    Approved: <CheckRoundedIcon />,
    InProcess: <AutorenewRoundedIcon />,
    Rejected: <BlockIcon />,
  };

  const colorMap: Record<ScholarshipStatus, ColorPaletteProp> = {
    Approved: 'success',
    InProcess: 'neutral',
    Rejected: 'danger',
  };
  const navigate = useNavigate();

  function HandleClick(eN: any) {
    console.log(eN)
    navigate('../StudentProfile', {state: {enrollmentNumber: eN}})
  }

  const renderFilters = () => (
    <React.Fragment>
        <FormControl size="sm">
            <FormLabel>Scholarship</FormLabel>
            <Select 
              placeholder="All" 
              slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
              value={selectedScholarship}
              onChange={(e, newValue) => setSelectedScholarship(newValue ?? 'All')}
            >
              <Option value="All">All</Option>
              <Option value="Anandam Scholarship Viddhya">Anandam Scholarship Viddhya</Option>
              <Option value="Chavi Jain Scholarship">Chavi Jain Scholarship</Option>
            </Select>
        </FormControl>
        <FormControl size="sm">
            <FormLabel>Filter by Scholarship Status</FormLabel>
            <Select
              size="sm"
              placeholder="All"
              slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
              value={selectedScholarshipStatus}
              onChange={(e, newValue) => setSelectedScholarshipStatus(newValue ?? 'All')}
            >
              <Option value="All">All</Option>
              <Option value="Approved">Approved</Option>
              <Option value="InProcess">InProcess</Option>
              <Option value="Rejected">Rejected</Option>
            </Select>
        </FormControl>
      <FormControl size="sm">
        <FormLabel>Filter by Payment Status</FormLabel>
        <Select size="sm" 
          placeholder="All" 
          slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
          value={selectedPaymentStatus}
          onChange={(e, newValue) => setSelectedPaymentStatus(newValue ?? 'All')}
        >
          <Option value="All">All</Option>
          <Option value="Approved">Approved</Option>
          <Option value="InProcess">InProcess</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>
      </FormControl>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Box
      component="main"
      className="MainContent"
      sx={{
          px: {
          xs: 2,
          md: 4,
          },
          pt: {
          xs: 'calc(12px + var(--Header-height))',
          sm: 'calc(12px + var(--Header-height))',
          md: 3,
          },
          pb: {
          xs: 2,
          sm: 2,
          md: 3,
          },
          flex: 1,          
          display: {xs: 'none', sm:  'flex', md: 'flex', lg:'flex'},
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
      }}
      >
        <Box sx={{ display: {xs: 'none', md: 'flex', lg: 'flex'}, alignItems: 'center' }}>
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
                Admin Dashboard
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
                Review Scholarship
            </Typography>
            </Breadcrumbs>
        </Box>
        <Box
            className="SearchAndFilters-tabletUp"
            sx={{
            borderRadius: 'sm',
            py: 2,
            display: {
                xs: 'none',
                sm: 'flex',
            },
            flexWrap: 'wrap',
            gap: 1.5,
            '& > *': {
                minWidth: {
                xs: '120px',
                md: '160px',
                },
            },
            }}
          >
          <FormControl sx={{ flex: 1 }} size="sm">
              <FormLabel>Search for Enrollment Number</FormLabel>
              <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </FormControl>
          {renderFilters()}
        </Box>
        <Sheet
          className="OrderTableContainer"
          variant="outlined"
          sx={{
            display: { xs: 'none', sm: 'initial' },
            width: '100%',
            borderRadius: 'sm',
            flexShrink: 1,
            overflow: 'auto',
            overflowX: 'scroll',
            minHeight: 0,
          }}
        >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
            '--TableCell-paddingY': '4px',
            '--TableCell-paddingX': '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 140, padding: '18px 20px'}}> <Typography level="body-xs">Enrollment Number</Typography> </th>
              <th style={{ width: 170, padding: '18px 20px' }}> <Typography level="body-xs">Student Name</Typography> </th>
              <th style={{ width: 90, padding: '18px 20px' }}> <Typography level="body-xs">Semester</Typography> </th>
              <th style={{ width: 160, padding: '18px 20px' }}> <Typography level="body-xs">Apply Date</Typography> </th>
              <th style={{ width: 140, padding: '18px 20px' }}> <Typography level="body-xs">Scholarship Status</Typography> </th>
              <th style={{ width: 140, padding: '18px 20px' }}> <Typography level="body-xs">Payment Status</Typography> </th>
              <th style={{ width: 100, padding: '18px 20px' }}> <Typography level="body-xs">Paid Date</Typography> </th>
              <th style={{ width: 100, padding: '18px 20px' }}> <Typography level="body-xs">Amount</Typography> </th>
              <th style={{ width: 100, padding: '18px 20px' }}> <Typography level="body-xs">View Profile</Typography>  </th>
              <th style={{ width: 180, padding: '18px 20px' }}> <Typography level="body-xs">Set Scholarship Status</Typography> </th>
              <th style={{ width: 180, padding: '18px 20px' }}> <Typography level="body-xs">Set Payment Status</Typography> </th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((item: any) => (
            <tr key={item.enrollmentNumber}>
              <td> <Typography level="body-xs">{item.enrollmentNumber}</Typography> </td>
              <td> <Typography level="body-xs">{item.studentName}</Typography> </td>
              <td> <Typography level="body-xs">{item.Semester}</Typography> </td>
              <td> <Typography level="body-xs">{item.ApplyDate}</Typography> </td>
              <td>
                  <Chip
                    variant="soft"
                    size="sm"
                    startDecorator={iconMap[item.scholarshipStatus as ScholarshipStatus]}
                    color={colorMap[item.scholarshipStatus as ScholarshipStatus]}
                  >
                    {item.scholarshipStatus}
                  </Chip>
              </td>
              <td>
                  <Chip
                    variant="soft"
                    size="sm"
                    startDecorator={iconMap[item.PaymentStatus as ScholarshipStatus]}
                    color={colorMap[item.PaymentStatus as ScholarshipStatus]}
                  >
                    {item.PaymentStatus}
                  </Chip>
              </td>
              <td> <Typography level="body-xs"></Typography>{item.PaidDate}</td>
              <td> <Typography level="body-xs">{item.Amount}</Typography> </td>
              <td onClick={()=>HandleClick(item.enrollmentNumber)}> <Typography level="body-xs" color='primary' >View Doc..</Typography> </td>
              <td>  <Select sx={{fontSize: 'body-xs', border: 0}}>
                <Option value="Approved">Approved</Option>
                <Option value="InProcess">InProcess</Option>
                <Option value="Rejected">Rejected</Option>
              </Select> </td>
              <td> <Select sx={{fontSize: 'body-xs', border: 0}}>
                <Option value="Approved">Approved</Option>
                <Option value="InProcess">InProcess</Option>
                <Option value="Rejected">Rejected</Option>
              </Select></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Sheet>
      </Box>
    </React.Fragment>
  );
}