/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
// icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Card, { CardProps } from '@mui/joy/Card';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Button, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Option, Select, Sheet } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';

export default function ReviewApplicationsList() {
  type ScholarshipStatus = 'Approved' | 'InProcess' | 'Rejected';
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
  <Box sx={{minWidth: '95%', px: 1, display: {xs: 'flex', sm: 'none'}}}>
      <Box sx={{ display: { xs: 'block', sm: 'none' } , mt: 9.5, width: '100%', ml: 1}}>
        <Box sx={{ display: {xs: 'flex', md: 'none', lg: 'none'}, alignItems: 'center' , mb: 2}}>
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
              Applied Scholarship
          </Typography>
          </Breadcrumbs>
        </Box>
        <Sheet
          className="SearchAndFilters-mobile"
          sx={{
            display: {
              xs: 'flex',
              sm: 'none',
            },
            my: 1,
            gap: 1,
          }}
        >
            <Input
              size="sm"
              placeholder="Search"
              startDecorator={<SearchIcon />}
              sx={{ flexGrow: 1}}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(true)}
            >
            <FilterAltIcon />
            </IconButton>
            <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                <ModalClose />
                <Typography id="filter-modal" level="h2">
                Filters
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {renderFilters()}
                <Button color="primary" onClick={() => setOpen(false)}>
                    Submit
                </Button>
                </Sheet>
            </ModalDialog>
            </Modal>
        </Sheet>

        {filteredData.map((item: any) => (
          <List
            key={item.enrollmentNumber}
            size="sm"
            sx={{
              '--ListItem-paddingX': 0,
            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'start',
              }}
            >
              <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                <ListItemDecorator>
                  <Avatar size="sm" sx={{ml: 2.5}}>Z</Avatar>
                </ListItemDecorator>
                <div>
                  <Typography level="body-sm" fontWeight={600} gutterBottom>
                    {item.studentName}
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                    {item.enrollmentNumber}
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                  Apply Date : {item.ApplyDate}
                  </Typography>
                  <Typography level="body-xs" gutterBottom>
                  Paid Date : {item.PaidDate}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography level="body-xs" gutterBottom>
                        Amount: {item.Amount}
                    </Typography>
                    <Chip
                      variant="soft"
                      size="sm"
                      startDecorator={iconMap[item.PaymentStatus as ScholarshipStatus]}
                      color={colorMap[item.PaymentStatus as ScholarshipStatus]}
                    >
                      {item.PaymentStatus}
                    </Chip>
                  </Box>
                <Typography level="body-xs" gutterBottom color='primary'>
                    View Profile
                </Typography>
                <Typography level="body-sm" gutterBottom sx={{mb: 2, mt: 2}}>
                    Set Scholarship Status
                </Typography>
                <Select sx={{fontSize: 'body-xs', border: 0}}>
                    <Option value="Approved">Approved</Option>
                    <Option value="In-Process">In-Process</Option>
                    <Option value="Rejected">Rejected</Option>
                </Select>
                <Typography level="body-sm" gutterBottom sx={{mb: 2, mt: 2}}>
                    Set Payment Status
                </Typography>
                <Select sx={{fontSize: 'body-xs', border: 0}}>
                    <Option value="Approved">Approved</Option>
                    <Option value="In-Process">In-Process</Option>
                    <Option value="Rejected">Rejected</Option>
                </Select>
                </div>
              </ListItemContent>
                <Chip
                  variant="soft"
                  size="sm"
                  startDecorator={iconMap[item.scholarshipStatus as ScholarshipStatus]}
                  color={colorMap[item.scholarshipStatus as ScholarshipStatus]}
                >
                  {item.scholarshipStatus}
                </Chip>
            </ListItem>
            <ListDivider />
          </List>
        ))}
      </Box>
  </Box>
  );
}
