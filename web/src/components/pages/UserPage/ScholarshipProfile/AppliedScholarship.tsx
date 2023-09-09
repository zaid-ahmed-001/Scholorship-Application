import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import AppliedScholarshipTable from './elements/AppliedScholarshipTable';
import AppliedScholarshipList from './elements/AppliedScholarshipList';


const AppliedScholarship = () => {
    return (
        <>
            <AppliedScholarshipList />
            <AppliedScholarshipTable />
        </>
    );
};

export default AppliedScholarship;