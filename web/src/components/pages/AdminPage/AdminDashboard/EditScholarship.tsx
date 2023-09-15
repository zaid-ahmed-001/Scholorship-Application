import { Box, Breadcrumbs, Link, ListDivider, Stack, Typography } from '@mui/joy';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ScholarshipAdminElements from './elements/ScholarshipAdminElements';

const EditScholarship = () => {
    return (
        <>
            <Stack spacing={2} sx={{
                m: 2.5,
                ml: {lg: 4},
                mt: {xs: 9.5, lg: 3},
                width: {xs: '90%', lg: '80%'}
            }}>
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
                    Admin Dashboard
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                    Edit Scholarship
                </Typography>
                </Breadcrumbs>
            </Box>
                <ScholarshipAdminElements
                    title="Anandam Scholarship Viddhya"
                    category="Deadline: 21.08.2023 "
                    description="The `Viddhya` Scholarship is a golden opportunity exclusively designed to empower and uplift young girls who aspire to pursue higher education. We firmly believe that every girl deserves a chance to shine, irrespective of her financial background. With this scholarship, we aim to break down financial barriers and provide deserving girls with the support they need to realize their dreams."
                    image="https://cdn.discordapp.com/attachments/1144894054505664612/1149639170772451378/vidhya.jpg"
                    arr = {['Only for Girls Students  (General Category)', 'Minimum CGPA: 8.5 Above', 'Family Annual: Less than 3 Lac']}
                    arrSec = {['Anandam Scholarship Form', 'Copy of Last semester Marksheet', 'Income Certificate', 'Copy of Aadhar -Student', 'Copy of Aadhar -Father'
                    , 'Copy of Fees Deposit Slip', 'Student Photo - 1']}
                    docReq = {['Anandam Scholarship Form', 'Copy of Last semester Marksheet', 'Copy of Aadhar -Student', 'Copy of Aadhar -Father', 'Copy of Fees Deposit Slip']}
                />
                <ScholarshipAdminElements
                    title="Chavi Jain Scholarship"
                    category="Deadline: 08.09.2023 "
                    description="The Academic Excellence Scholarship is a prestigious and highly sought-after scholarship program that rewards exceptional students who have demonstrated outstanding academic performance in their examinations. This scholarship is designed to recognize and support the brightest minds among our student community, motivating them to continue their pursuit of excellence in education."
                    image="https://cdn.discordapp.com/attachments/1144894054505664612/1149650304200101898/piemr.jpg"
                    arr = {['Minimum CGPA: 8.0 Above']}
                    arrSec = {['Copy of Last semester Marksheet', 'Copy of Aadhar -Student', 'Copy of Aadhar -Father'
                    , 'Copy of Fees Deposit Slip', 'Student Photo - 1']}
                    docReq = {['Copy of Last semester Marksheet', 'Copy of Aadhar -Student', 'Copy of Aadhar -Father', 'Copy of Fees Deposit Slip']}
                />
                <ListDivider />
            </Stack>
        </>
    );
};

export default EditScholarship;
