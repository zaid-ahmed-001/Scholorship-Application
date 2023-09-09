import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2 onClick={()=>navigate('/')}>HomePage</h2>
            <div id='SubParts SignIn'>
                <h2 onClick={()=>navigate('/SignIn')}>Sign In</h2>
                <h2 onClick={()=>navigate('/SignUp')}>Sign Up</h2>
                <h4 onClick={()=>navigate('/ForgotPassword')}>Forgot Password</h4>
            </div>
            <h2 onClick={()=>navigate('/UserPage')}>User Page || :Has Components such as Navbar and Sidebar</h2>
            <div id='SubParts UserPage'>
                <h4 onClick={()=>navigate('UserPage/EditPersonalDetails')}>PersonalDetails</h4>
                <h4 onClick={()=>navigate('UserPage/EditAcademicDetails')}>AcademicDetails</h4>
                <h4 onClick={()=>navigate('UserPage/EditCasteDetails')}>CasteDetails</h4>
                <h4 onClick={()=>navigate('UserPage/EditIncomeDetails')}>IncomeDetails</h4>
                <h4 onClick={()=>navigate('UserPage/EditSamagraDetails')}>SamagraDetails</h4>
                <h4 onClick={()=>navigate('UserPage/EditNativeDetails')}>NativeDetails</h4>
                <h4 onClick={()=>navigate('UserPage/EligibleScholarship')}>EligibleScholorShip</h4>
                <h4 onClick={()=>navigate('UserPage/AppliedScholarship')}>AppliedScholorShip</h4>
            </div>
            <h2 onClick={()=>navigate('/AdminPage')}>Admin Page || :Has Components such as Navbar and Sidebar</h2>
            <div id='SubParts AdminPage'>
                <h4 onClick={()=>navigate('AdminPage/CreateScholarship')}>CreateScholarship</h4>
                <h4 onClick={()=>navigate('AdminPage/ViewApplications')}>ViewApplications</h4>
            </div>
        </>
    );
};

export default HomePage;