import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import useScript from './components/utils/useScript'

import HomePage from './components/pages/HomePage/HomePage'
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import UserSideBar from './components/pages/UserPage/userSideBar';
import UserNavbar from './components/pages/UserPage/userNavbar';
import EditPersonalDetails from './components/pages/UserPage/PersonalizeProfile/EditPersonalDetails';
import EditAcademicDetails from './components/pages/UserPage/PersonalizeProfile/EditAcademicDetails';
import EditIncomeDetails from './components/pages/UserPage/PersonalizeProfile/EditIncomeDetails';
import EditSamagraDetails from './components/pages/UserPage/PersonalizeProfile/EditSamagraDetails';
import EditNativeDetails from './components/pages/UserPage/PersonalizeProfile/EditNativeDetails';
import EditCasteDetails from './components/pages/UserPage/PersonalizeProfile/EditCasteDetails';
import EligibleScholarship from './components/pages/UserPage/ScholarshipProfile/EligibleScholarship';
import AppliedScholarship from './components/pages/UserPage/ScholarshipProfile/AppliedScholarship';
import AdminSideBar from './components/pages/AdminPage/adminSideBar';
import AdminNavbar from './components/pages/AdminPage/adminNavbar';
import CreateScholarship from './components/pages/AdminPage/AdminDashboard/CreateScholarship';
import ViewApplications from './components/pages/AdminPage/AdminDashboard/ViewApplications';
import EditScholarship from './components/pages/AdminPage/AdminDashboard/EditScholarship';
import ForgotPassword from './components/pages/ForgotPasswordPage/ForgotPassword';
import CreatePassword from './components/pages/ForgotPasswordPage/CreatePassword';
import ScholarshipElements from './components/pages/UserPage/ScholarshipProfile/elements/ScholarshipElements';
import ScholarshipForm from './components/pages/UserPage/ScholarshipProfile/elements/ScholarshipForm';
import ScholarshipEditForm from './components/pages/AdminPage/AdminDashboard/elements/ScholarshipEditForm';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function App() {
  const status = useScript(`https://unpkg.com/feather-icons`);
  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);
  return (
    <>
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
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/SignIn" element={<SignIn />} />
               {/* Sign In */}
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/CreatePassword" element={<CreatePassword />} />
               {/* Sign Up */}
              <Route path="/SignUp" element={<SignUp />} />
            <Route path='/UserPage' element={<><UserSideBar/><UserNavbar/></>}>
              {/* Profile Part */}
              <Route path="EditPersonalDetails" element={<EditPersonalDetails />} />
              <Route path="EditAcademicDetails" element={<EditAcademicDetails />} />
              <Route path="EditCasteDetails" element={<EditCasteDetails />} />
              <Route path="EditIncomeDetails" element={<EditIncomeDetails />} />
              <Route path="EditSamagraDetails" element={<EditSamagraDetails />} />
              <Route path="EditNativeDetails" element={<EditNativeDetails />} />
              {/* Scholarship Part */}
              <Route path="EligibleScholarship" element={<EligibleScholarship />} />
              <Route path="AppliedScholarship" element={<AppliedScholarship />} />
              <Route path="ScholarshipForm" element={<ScholarshipForm />} />
            </Route>
            <Route path='/AdminPage' element={<><AdminSideBar/><AdminNavbar/></>}>
              {/* Admin Dashboard */}
              <Route path="CreateScholarship" element={<CreateScholarship />} />
              <Route path="EditScholarship" element={<EditScholarship />} />
              <Route path="ViewApplications" element={<ViewApplications />} />
              <Route path="ScholarshipEditForm" element={<ScholarshipEditForm />} />
            </Route>
          </Routes>
       </CssVarsProvider>
    </>
  );    
}

export default App;
